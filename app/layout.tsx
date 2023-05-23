import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nobel Tech Solutions',
  description: 'NObel Tech Solutions provide technical assistance and solutions to bussinesses to help them grow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Navbar />
          {children}
          <Footer/>
        </>
      </body>
    </html>
  )
}
