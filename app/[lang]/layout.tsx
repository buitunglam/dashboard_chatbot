import * as React from "react";
import type { Viewport } from "next";

import { UserProvider } from "@/contexts/user-context";
import { LocalizationProvider } from "@/components/core/localization-provider";
import { ThemeProvider } from "@/components/core/theme-provider/theme-provider";
import initTranslations from "@/utils/i18n";
import TranslationsProvider from "@/contexts/translation.provider";
import NextTopLoader from 'nextjs-toploader';

export const viewport = {
  width: "device-width",
  initialScale: 1,
} satisfies Viewport;

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function Layout({
  children,
  params: { locale },
}: LayoutProps) {
  const { options } = await initTranslations(locale == "ja" ? locale : "en", [
    "translation",
  ]);

  return (
    <html lang={locale}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body suppressHydrationWarning={true}>
        <NextTopLoader
          color='#7578ff'
        />
        <TranslationsProvider namespaces={options.ns} locale={locale}>
          <LocalizationProvider>
            <UserProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </UserProvider>
          </LocalizationProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
