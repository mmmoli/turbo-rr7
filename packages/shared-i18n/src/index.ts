import { useMatches } from "react-router";
import config from "../lingui.config";
import { msg } from "@lingui/core/macro";
import { type MessageDescriptor, i18n } from "@lingui/core";

export function getLanguages(): Array<{
  key: (typeof config.locales)[number];
  label: MessageDescriptor;
}> {
  return [
    { key: "en", label: msg`English` },
    { key: "th", label: msg`Thai` },
  ];
}

export async function loadCatalog(locale: string) {
  const { messages } = await import(`../locales/${locale}.po`);
  return i18n.loadAndActivate({ locale, messages });
}

/**
 * Get the locale returned by the root route loader under the `locale` key.
 * @example
 * let locale = useLocale()
 * let formattedDate = date.toLocaleDateString(locale);
 * @example
 * let locale = useLocale("language")
 * let formattedDate = date.toLocaleDateString(locale);
 */
export function useLocale(localeKey = "locale"): string {
  const defaultLocale = "en";
  const [rootMatch] = useMatches();
  const { [localeKey]: locale } =
    (rootMatch.data as Record<string, string>) ?? {};
  if (!locale) return defaultLocale;
  if (typeof locale === "string") return locale;
  return defaultLocale;
}
