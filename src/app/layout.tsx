import './globals.css'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import { ThemeProvider } from '@/app/components/theme-provider'

import Providers from './components/Providers'
import { Toaster } from '@/components/ui/toaster'

const Header = dynamic(() => import('./components/header'), { ssr: true })

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Modern Lost and Found',
  description: 'A sleek and intuitive platform for lost and found items',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="container mx-auto px-4 py-8 md:py-12">
              {children}
            </main>
            <Toaster />
          </ThemeProvider>
        </Providers>

      </body>
    </html>
  )
}

