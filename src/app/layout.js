import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tiktok',
  description: 'The best Plataform by Alan ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
