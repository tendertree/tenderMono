import Header from '@src/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans, Nanum_Gothic } from 'next/font/google'
import PageTransition from '@src/PageTransition'
import StairTransition from '@src/StairTransition'
const noto = Noto_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-noto',
    weight: '400',
})
const nanum = Nanum_Gothic({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nanum',
    weight: ['400', '700'],
})

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning>
            <body className={`${noto.variable} ${nanum.variable} font-primary bg-dark`}>
                <Header />
                <StairTransition />
                <PageTransition>
                    {children}
                </PageTransition>

            </body>
        </html>
    );
}
