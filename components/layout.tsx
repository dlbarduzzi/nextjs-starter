import type { ReactNode } from "react"

import { Navbar } from "./navbar"
import { Footer } from "./footer"

import { classnames } from "../utils/classnames"

type LayoutProps = {
  children: ReactNode
  mainColor?: string
}

export const Layout = ({ children, mainColor = "bg-white" }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className={classnames("flex-grow text-slate-700", mainColor)}>{children}</main>
      <Footer />
    </div>
  )
}
