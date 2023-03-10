import type { ReactNode } from "react"

const Navbar = () => {
  return (
    <nav className="bg-slate-700">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-4">
        <h2 className="font-bold text-white">Navbar</h2>
      </div>
    </nav>
  )
}

const Footer = () => {
  return (
    <footer className="bg-slate-50">
      <div className="mx-auto flex max-w-7xl items-center py-6 px-4">
        Footer
      </div>
    </footer>
  )
}

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-white text-slate-700">{children}</main>
      <Footer />
    </div>
  )
}
