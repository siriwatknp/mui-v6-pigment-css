import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import colorSchemeScript from "./getInitColorSchemeScript";
import theme from "./theme";
import "@pigment-css/react/styles.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {colorSchemeScript}
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CssVarsProvider
            theme={theme}
            defaultMode="system"
            disableStyleSheetGeneration
          >
            <CssBaseline enableColorScheme />
            {children}
          </CssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
