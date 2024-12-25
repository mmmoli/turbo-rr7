import type { Route } from "./+types/_index";

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
  return <h1 className="font-serif text-2xl">{loaderData.data}</h1>;
}
