import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Phone } from "lucide-react"

export default function ReservationCTA() {
  return (
    <section id="contact" className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Reserve Your Table</h2>
            <p className="mb-8">
              Experience the unique fusion of Cochin and Ethiopian flavors. Book your table now to avoid disappointment.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p>Bole Road, Near Millennium Hall, Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold">Opening Hours</h3>
                  <p>Monday - Sunday: 11:00 AM - 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold">Contact</h3>
                  <p>+251 11 234 5678</p>
                  <p>info@chochinchicken.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Our Fusion Cuisine?</h3>
            <p className="mb-6">
              Join us for a culinary journey that combines the best of Cochin and Ethiopian flavors. Make your
              reservation now to secure your table.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/reservation">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                  Reserve a Table
                </Button>
              </Link>
              <Link href="/menu">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 w-full sm:w-auto"
                >
                  View Our Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

