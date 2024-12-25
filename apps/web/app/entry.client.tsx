import { i18n } from '@lingui/core';
import { detect, fromHtmlTag } from '@lingui/detect-locale';
import { I18nProvider } from '@lingui/react';
import { loadCatalog } from '@repo/shared-i18n';
import { StrictMode, startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';

startTransition(async () => {
  const locale = detect(fromHtmlTag('lang')) || 'en';

  await loadCatalog(locale);

  hydrateRoot(
    document,
    <StrictMode>
      <I18nProvider i18n={i18n}>
        <HydratedRouter />
      </I18nProvider>
    </StrictMode>,
  );
});
