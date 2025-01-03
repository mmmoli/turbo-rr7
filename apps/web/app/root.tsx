import { data } from 'react-router';
import {
  Links,
  type LoaderFunctionArgs,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from 'react-router';

import { useLocale } from '@repo/shared-i18n';
import { linguiServer, localeCookie } from '@repo/shared-i18n/lingui.server';

import { i18n } from '@lingui/core';
import { loadCatalog } from '@repo/shared-i18n';
import { useEffect, useMemo } from 'react';
import type { Route } from './+types/root';
import stylesheet from '@repo/shared-ui/global.css?url';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playwrite+US+Modern:wght@100..400&display=swap',
  },
  { rel: 'stylesheet', href: stylesheet },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = await linguiServer.getLocale(request);

  return data(
    {
      locale,
    },
    {
      headers: {
        'Set-Cookie': await localeCookie.serialize(locale),
      },
    },
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();

  useEffect(() => {
    if (i18n.locale !== locale) {
      loadCatalog(locale);
    }
  }, [locale]);

  const lang = useMemo(() => locale ?? 'en', [locale]);

  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-amber-50">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
