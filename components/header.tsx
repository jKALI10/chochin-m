"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Utensils, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : ""
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Utensils className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">
            CHOCHINCHICKEN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/about"
            className={`text-sm font-medium ${
              isActive("/about") ? "text-primary" : "hover:text-primary"
            }`}
          >
            About
          </Link>
          <Link
            href="/menu"
            className={`text-sm font-medium ${
              isActive("/menu") ? "text-primary" : "hover:text-primary"
            }`}
          >
            Menu
          </Link>
          <Link
            href="/features"
            className={`text-sm font-medium ${
              isActive("/features") ? "text-primary" : "hover:text-primary"
            }`}
          >
            Features
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium ${
              isActive("/contact") ? "text-primary" : "hover:text-primary"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Desktop Reservation Button */}
          <Link href="/contact" className="hidden md:block">
            <Button>Reserve a Table</Button>
          </Link>

          {/* Mobile Menu Button - Only visible on mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Menu"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Menu Sheet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Utensils className="h-6 w-6 text-primary" />
                    <span className="font-bold">CHOCHINCHICKEN</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full hover:bg-muted"
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>

                <nav className="flex flex-col p-4">
                  <Link
                    href="/"
                    className={`py-3 px-2 text-lg ${
                      isActive("/") ? "text-primary font-medium" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={`py-3 px-2 text-lg ${
                      isActive("/about") ? "text-primary font-medium" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/menu"
                    className={`py-3 px-2 text-lg ${
                      isActive("/menu") ? "text-primary font-medium" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Menu
                  </Link>
                  <Link
                    href="/features"
                    className={`py-3 px-2 text-lg ${
                      isActive("/features") ? "text-primary font-medium" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href="/contact"
                    className={`py-3 px-2 text-lg ${
                      isActive("/contact") ? "text-primary font-medium" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>

                <div className="mt-auto p-4 border-t">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Reserve a Table</Button>
                  </Link>

                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground mb-1">
                      Contact Us
                    </p>
                    <p className="text-sm">+251 11 234 5678</p>
                    <p className="text-sm">info@chochinchicken.com</p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
