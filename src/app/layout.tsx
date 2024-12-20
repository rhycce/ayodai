import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './ui/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ayodai',
  description: 'Breaking goals into actionable chunks for personal development',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
