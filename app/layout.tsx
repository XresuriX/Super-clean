import React from 'react'
import './globals.css'
import { ThemeProvider } from "../components/theme-provider"
import { ReactNode } from 'react';

export const metadata = {
  title: 'Super Clean',
  description: 'Cleaning service website for Jamaican based company',
}

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}