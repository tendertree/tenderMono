import Footer from '@ui/custom/footer/footer';
import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans, Nanum_Gothic } from 'next/font/google'

const noto = Noto_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-noto',
    weight: '400',
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
            <body className={'${noto.className} bg-cover bg-no-repeat bg-white-100'}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
