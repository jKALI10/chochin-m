import Link from "next/link";
import { Utensils } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Utensils className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">
                CHOCHINCHICKEN
              </span>
            </div>
            <p className="text-muted-foreground">
              A unique dining destination in Addis Ababa that brings the vibrant
              flavors of Cochin to Ethiopia.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-muted-foreground hover:text-primary"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-muted-foreground hover:text-primary"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-muted-foreground">
              <p>Bole Road, Near Millennium Hall</p>
              <p>Addis Ababa, Ethiopia</p>
              <p className="mt-2">+251 11 234 5678</p>
              <p>info@chochinchicken.com</p>
            </address>
          </div>

          <div>
            <h3 className="font-bold mb-4">Opening Hours</h3>
            <ul className="text-muted-foreground">
              <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
              <li>Saturday - Sunday: 10:00 AM - 11:00 PM</li>
            </ul>
            <div className="mt-4 flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 md:mt-12 pt-6 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} CHOCHINCHICKEN. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
