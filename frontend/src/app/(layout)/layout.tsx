import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/shared/utils/trpc/react";
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "~/shared/components/layout";

export const metadata = {
  title: "Shades",
  icons: [{ rel: "icon", url: "/shades.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <NextUIProvider>
            <Layout>{children}</Layout>
          </NextUIProvider>
        </TRPCReactProvider>
        <Toaster position="bottom-center" reverseOrder={false} />
      </body>
    </html>
  );
}
