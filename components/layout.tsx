import type { ReactNode } from "react"

import { Navbar } from "./navbar"
import { Footer } from "./footer"

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-cyan-200">{children}</main>
      <Footer />
    </div>
  )
}
