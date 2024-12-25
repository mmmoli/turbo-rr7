import { useLingui } from "@lingui/react/macro";
import type { Route } from "./+types/_index";
import { Button } from "@repo/shared-ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  return {
    data: "Hello",
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { t } = useLingui();
  return (
    <>
      <h1 className="font-serif text-2xl">
        {t`message`}: {loaderData.data}
      </h1>
      <Button>Click me</Button>
    </>
  );
}
