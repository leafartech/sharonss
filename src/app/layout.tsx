import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Sharon Santos | Inscrição",
  description: "Sharon Santos | Inscrição",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MW7FFSWX')
        `}} />
      </head>
      <body className={sora.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MW7FFSWX"
          height="0" width="0"></iframe></noscript>
        {children}
      </body>
    </html>
  );
}