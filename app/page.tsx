import Image from "next/image";
import { ChevronRight, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/testimonial-card";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0" />
        <Image
          src="/hot01.jpg?height=600&width=1200"
          alt="CHOCHINCHICKEN restaurant interior"
          width={1200}
          height={600}
          className="w-full h-[60vh] md:h-[70vh] object-cover"
          priority
        />
        <div className="container absolute inset-0 z-20 flex flex-col justify-center text-white px-4 md:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 md:mb-4">
            Where Authentic Ethiopian Taste Meets Culinary Excellence
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-4 md:mb-8">
            Experience the unique fusion of Cochin's vibrant flavors and
            Ethiopian culinary traditions at Addis Ababa's premier fusion
            restaurant.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link href="/menu">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
              >
                View Our Menu
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
              >
                Make a Reservation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            <Link href="/about" className="group">
              <div className="bg-muted/30 p-4 md:p-6 rounded-lg hover:bg-muted/50 transition-colors">
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-4">
                  Learn about our culinary journey and the fusion of Indian and
                  Ethiopian cuisines.
                </p>
                <div className="flex items-center text-primary">
                  <span>Read More</span>
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/menu" className="group">
              <div className="bg-muted/30 p-4 md:p-6 rounded-lg hover:bg-muted/50 transition-colors">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Our Menu</h2>
                <p className="text-muted-foreground mb-4">
                  Explore our unique fusion dishes combining the best of Cochin
                  and Ethiopian flavors.
                </p>
                <div className="flex items-center text-primary">
                  <span>View Menu</span>
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/contact" className="group">
              <div className="bg-muted/30 p-4 md:p-6 rounded-lg hover:bg-muted/50 transition-colors">
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  Reservations
                </h2>
                <p className="text-muted-foreground mb-4">
                  Book your table now to experience our unique culinary
                  offerings.
                </p>
                <div className="flex items-center text-primary">
                  <span>Reserve Now</span>
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              Our Signature Dishes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular fusion creations that have our customers
              coming back for more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="/it01.jpg?height=200&width=300"
                  alt="Berbere Butter Chicken"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Berbere Butter Chicken</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Our signature dish combining the creaminess of butter chicken
                  with Ethiopian berbere spice
                </p>
                <span className="text-primary font-semibold">320 ETB</span>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="/it02.jpg?height=200&width=300"
                  alt="Fusion Kebabs"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Fusion Kebabs</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Grilled chicken kebabs marinated in a blend of Cochin and
                  Ethiopian spices
                </p>
                <span className="text-primary font-semibold">180 ETB</span>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="/it03.jpg?height=200&width=300"
                  alt="Chicken Biryani Fusion"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Chicken Biryani Fusion</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Fragrant rice cooked with chicken, Indian spices, and a touch
                  of Ethiopian mitmita
                </p>
                <span className="text-primary font-semibold">290 ETB</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 md:mt-8">
            <Link href="/menu">
              <Button>View Full Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it – hear from our satisfied
              customers who have experienced our unique fusion cuisine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <TestimonialCard
              name="Abebe Kebede"
              image="/placeholder.svg?height=100&width=100"
              rating={5}
              testimonial="Loved the Cochin chicken with Ethiopian spices! The fusion of flavors was incredible and unlike anything I've tasted in Addis before."
            />
            <TestimonialCard
              name="Sarah Johnson"
              image="/placeholder.svg?height=100&width=100"
              rating={5}
              testimonial="As someone who loves both Indian and Ethiopian food, CHOCHINCHICKEN is a dream come true. The berbere butter chicken is now my favorite dish in the city!"
            />
            <TestimonialCard
              name="Dawit Haile"
              image="/placeholder.svg?height=100&width=100"
              rating={4}
              testimonial="Great atmosphere and even better food. The service was excellent and the staff was knowledgeable about the fusion concept. Will definitely return!"
            />
          </div>
        </div>
      </section>
    </>
  );
}
