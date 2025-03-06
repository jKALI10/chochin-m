import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-primary/10 z-5" />
        <Image
          src="/ab01.jpg?height=400&width=1200"
          alt="CHOCHINCHICKEN restaurant interior"
          width={1200}
          height={400}
          className="w-full h-[40vh] object-cover"
          priority
        />
        <div className="container absolute inset-0 z-20 flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-lg max-w-2xl">
            Learn about our culinary journey and the fusion Ethiopian cuisines.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Culinary Journey</h2>
              <p className="text-muted-foreground mb-4">
                CHOCHINCHICKEN is a unique dining destination in Addis Ababa
                that brings the vibrant flavors of Cochin, to Ethiopia. Our
                restaurant offers a delightful fusion chicken dishes crafted
                with local ingredients, providing a one-of-a-kind culinary
                experience that celebrates the best of both cultures.
              </p>
              <p className="text-muted-foreground mb-6">
                Our chefs have mastered the art of blending traditional Cochin
                spices with Ethiopian berbere and other local ingredients,
              </p>
              <p className="text-muted-foreground mb-6">
                The idea for CHOCHINCHICKEN was born when our founder, who had
                spent years traveling between ...... and Ethiopia, noticed the
                surprising similarities and complementary nature of these two
                distinct culinary traditions. What started as experimental
                cooking for friends and family quickly grew into a passion
                project and eventually into the restaurant you see today.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/cu01.jpg?height=400&width=600"
                alt="Chef preparing fusion cuisine"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our talented team of chefs and staff are dedicated to providing
              you with an exceptional dining experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Head Chef"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Rahul Menon</h3>
              <p className="text-primary font-medium">Head Chef</p>
              <p className="text-muted-foreground mt-2">
                With over 15 years of experience in Indian cuisine, Chef Rahul
                brings authentic Cochin flavors to our kitchen.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Sous Chef"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Tigist Haile</h3>
              <p className="text-primary font-medium">Sous Chef</p>
              <p className="text-muted-foreground mt-2">
                Chef Tigist specializes in Ethiopian cuisine and helps create
                our unique fusion dishes with local ingredients.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Restaurant Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Daniel Bekele</h3>
              <p className="text-primary font-medium">Restaurant Manager</p>
              <p className="text-muted-foreground mt-2">
                Daniel ensures that every guest receives exceptional service and
                has a memorable dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At CHOCHINCHICKEN, we're guided by a set of core values that
              influence everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                We source only the freshest ingredients and authentic spices to
                ensure every dish meets our high standards.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly experiment with new flavor combinations while
                respecting traditional cooking techniques.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-muted-foreground">
                We support local farmers and suppliers, contributing to the
                growth of our community.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Hospitality</h3>
              <p className="text-muted-foreground">
                We treat every guest like family, ensuring a warm and welcoming
                atmosphere for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Our Fusion Cuisine?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join us for a culinary adventure that combines the best of Ethiopian
            flavors.
          </p>
        </div>
      </section>
    </>
  );
}
