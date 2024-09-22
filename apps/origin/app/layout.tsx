import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {ThemeProvider} from "@ui/base/menu/ThemeToggle";
import MaxWidthWrapper from "@ui/basic/base/MaxWidthWrapper";
import Basic from "@ui/base/nav/Basic";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
    title: 'blog template',
    description: 'basic blog page for monorepo',
    keywords: ['monorepo', 'blog'],
    openGraph: {
        title: 'tender blog',
        description: 'some descripiton',
        url: 'URL',
        siteName: 'search keyword',
        images: [
            {
                url: 'logo path should be absolute',
                width: 800,
                height: 600,
                alt: 'logo'
            },

        ],
        type: 'website',
    },

};



const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "blog",
        path: "/blog"
    },
    {
        name: "about",
        path: "/about"
    },
    {
        name: "contact",
        path: "/contact"
    },
]



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
				<ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <MaxWidthWrapper>
                        <Basic links={links} />

        {children}
		</MaxWidthWrapper>
		</ThemeProvider>	
      </body>
    </html>
  );
}
