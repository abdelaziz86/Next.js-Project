import './globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({subsets : ['latin'], weight  : ["400"]})
export const metadata: Metadata = {
  title: 'To do app',
  description: 'Simple to do app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( 
    <html lang="en">
      <body className={poppins.className}> 
        {children}
      </body>
    </html>
  )
}
