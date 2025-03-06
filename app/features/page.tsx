import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/12 to-primary/9 z-4" />
        <Image
          src="/fe01.jpg?height=400&width=1200"
          alt="CHOCHINCHICKEN restaurant features"
          width={1200}
          height={400}
          className="w-full h-[40vh] object-cover"
        />
        <div className="container absolute inset-0 z-20 flex flex-col justify-center text-white px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
            Our Features
          </h1>
          <p className="text-base md:text-lg max-w-2xl">
            What makes CHOCHINCHICKEN a unique dining experience.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              What Makes Us Special
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At CHOCHINCHICKEN, we pride ourselves on offering more than just a
              meal – we provide a complete cultural and culinary experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Utensils className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fusion Cuisine</h3>
                <p className="text-muted-foreground">
                  Specializes in chicken dishes inspired by Cochin, with a
                  fusion of local Ethiopian flavors, creating a unique culinary
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Menu icon"
                    width={24}
                    height={24}
                    className="h-6 w-6 text-primary"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Menu</h3>
                <p className="text-muted-foreground">
                  Our menu is carefully organized into categories with detailed
                  descriptions and images, showcasing our unique fusion
                  offerings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Ambiance icon"
                    width={24}
                    height={24}
                    className="h-6 w-6 text-primary"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Unique Ambiance</h3>
                <p className="text-muted-foreground">
                  Beautifully designed interior blending Ethiopian cultures for
                  a warm and inviting atmosphere.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Service icon"
                    width={24}
                    height={24}
                    className="h-6 w-6 text-primary"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellent Service</h3>
                <p className="text-muted-foreground">
                  Enjoy our excellent customer service, including online
                  reservations and takeout options for your convenience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Cultural icon"
                    width={24}
                    height={24}
                    className="h-6 w-6 text-primary"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Cultural Experience</h3>
                <p className="text-muted-foreground">
                  Explore Cochin's rich culinary heritage alongside local
                  Ethiopian cuisine.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Ingredients icon"
                    width={24}
                    height={24}
                    className="h-6 w-6 text-primary"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Ingredients</h3>
                <p className="text-muted-foreground">
                  We source the freshest local ingredients, ensure every dish
                  meets our high standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-16">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Fusion cuisine"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Unique Fusion Cuisine
              </h2>
              <p className="text-muted-foreground mb-4">
                Our chefs have spent years perfecting the art of blending
                Ethiopian flavors. The result is a menu that offers the best of
                both worlds - the rich, aromatic spices of Cochin combined with
                the bold, distinctive flavors of Ethiopian cuisine.
              </p>
              <p className="text-muted-foreground">
                Each dish is carefully crafted to balance these flavors,
                creating a harmonious fusion that respects both culinary
                traditions while offering something entirely new and exciting.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Cultural Ambiance
              </h2>
              <p className="text-muted-foreground mb-4">
                Step into CHOCHINCHICKEN and you'll immediately notice the
                thoughtful design that pays homage to Ethiopian cultures. From
                the artwork on the walls to the music playing softly in the
                background, every element has been chosen to create an immersive
                cultural experience.
              </p>
              <p className="text-muted-foreground">
                Our dining space features comfortable seating, warm lighting,
                and authentic decorative elements that transport you to the
                streets of Cochin and the highlands of Ethiopia.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Restaurant ambiance"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Quality ingredients"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Premium Ingredients
              </h2>
              <p className="text-muted-foreground mb-4">
                We believe that great food starts with great ingredients. That's
                why we source the freshest local produce and meats. 
              </p>
              <p className="text-muted-foreground">
                Our commitment to quality means we never cut corners. From our
                free-range chicken to our house-made spice blends, every
                ingredient is selected with care to ensure the best possible
                dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
