import "./globals.css"

export const metadata = {
  title: "Portafolio Imanol",
  description: "Portafolio para mostrar mis proyectos",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-zinc-900 text-gray-100 antialiased">{children}</body>
    </html>
  )
}

