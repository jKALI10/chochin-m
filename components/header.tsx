"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "text-primary font-medium" : "text-sm font-medium hover:text-primary"
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Utensils className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">CHOCHINCHICKEN</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/about" className={isActive("/about")}>
            About
          </Link>
          <Link href="/menu" className={isActive("/menu")}>
            Menu
          </Link>
          <Link href="/features" className={isActive("/features")}>
            Features
          </Link>
          <Link href="/contact" className={isActive("/contact")}>
            Contact
          </Link>
        </nav>
        <Link href="/contact">
          <Button>Reserve a Table</Button>
        </Link>
      </div>
    </header>
  )
}

