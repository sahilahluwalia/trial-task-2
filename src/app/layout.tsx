'use client'
import {
  QueryClientProvider,
} from '@tanstack/react-query'
import { queryClient } from '@/util/reactQuery'
import './globals.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body>{children}</body>
        <ReactQueryDevtools initialIsOpen={false} />
      </html>
    </QueryClientProvider>

  )
}
