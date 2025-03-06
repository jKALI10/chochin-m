import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 z-10" />
      <Image
        src="/placeholder.svg?height=600&width=1200"
        alt="CHOCHINCHICKEN restaurant interior"
        width={1200}
        height={600}
        className="w-full h-[70vh] object-cover"
        priority
      />
      <div className="container absolute inset-0 z-20 flex flex-col justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Where Indian Flavors Meet African Spirit</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Experience the unique fusion of Cochin's vibrant flavors and Ethiopian culinary traditions at Addis Ababa's
          premier fusion restaurant.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/menu">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              View Our Menu
            </Button>
          </Link>
          <Link href="/reservation">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Make a Reservation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

