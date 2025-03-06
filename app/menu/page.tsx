"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MenuCard, type MenuItem } from "@/components/menu-card";

// Menu data
const menuItems: MenuItem[] = [
  // Wings
  {
    id: "w1",
    name: "Cochin Spiced Wings",
    description:
      "Crispy chicken wings tossed in our signature Cochin spice blend",
    price: "180 ETB",
    image: "/it01.jpg?height=200&width=300",
    category: "wings",
    featured: true,
  },
  {
    id: "w2",
    name: "Berbere Hot Wings",
    description: "Spicy wings coated in Ethiopian berbere sauce",
    price: "190 ETB",
    image: "/it02.jpg?height=200&width=300",
    category: "wings",
  },
  {
    id: "w3",
    name: "Honey Ginger Wings",
    description: "Sweet and tangy wings with honey and ginger glaze",
    price: "185 ETB",
    image: "/it03.jpg?height=200&width=300",
    category: "wings",
  },

  // Chicken
  {
    id: "c1",
    name: "Berbere Butter Chicken",
    description:
      "Our signature dish combining the creaminess of butter chicken with Ethiopian berbere spice",
    price: "320 ETB",
    image: "/it03.jpg?height=200&width=300",
    category: "chicken",
    featured: true,
  },
  {
    id: "c2",
    name: "Cochin Chicken Curry",
    description:
      "Succulent chicken cooked in a rich tomato and spice gravy, served with injera",
    price: "280 ETB",
    image: "/it04.jpg?height=200&width=300",
    category: "chicken",
  },
  {
    id: "c3",
    name: "Chicken Biryani Fusion",
    description:
      "Fragrant rice cooked with chicken, Indian spices, and a touch of Ethiopian mitmita",
    price: "290 ETB",
    image: "/it05.jpg?height=200&width=300",
    category: "chicken",
  },

  // Sides
  {
    id: "s1",
    name: "Spiced Rice",
    description: "Basmati rice cooked with aromatic spices",
    price: "80 ETB",
    image: "/it02.jpg?height=200&width=300",
    category: "sides",
  },
  {
    id: "s2",
    name: "Garlic Naan",
    description: "Soft flatbread topped with garlic butter",
    price: "50 ETB",
    image: "/it04.jpg?height=200&width=300",
    category: "sides",
  },
  {
    id: "s3",
    name: "Fusion Salad",
    description: "Fresh vegetables with a tangy dressing",
    price: "90 ETB",
    image: "/it05.jpg?height=200&width=300",
    category: "sides",
  },

  // Sauces
  {
    id: "sa1",
    name: "Mint Chutney",
    description: "Fresh mint sauce with a hint of spice",
    price: "40 ETB",
    image: "/it02.jpg?height=200&width=300",
    category: "sauces",
  },
  {
    id: "sa2",
    name: "Berbere Sauce",
    description: "Traditional Ethiopian spice blend sauce",
    price: "45 ETB",
    image: "/it01.jpg?height=200&width=300",
    category: "sauces",
  },

  // Desserts
  {
    id: "d1",
    name: "Cardamom Honey Cake",
    description:
      "Soft cake infused with cardamom and drizzled with Ethiopian honey",
    price: "120 ETB",
    image: "/it03.jpg?height=200&width=300",
    category: "desserts",
  },
  {
    id: "d2",
    name: "Gulab Jamun",
    description: "Sweet milk solids dumplings soaked in rose-scented syrup",
    price: "100 ETB",
    image: "/it04.jpg?height=200&width=300",
    category: "desserts",
  },
  {
    id: "d3",
    name: "Mango Kulfi",
    description: "Traditional Indian frozen dessert with mango flavor",
    price: "110 ETB",
    image: "/it01.jpg?height=200&width=300",
    category: "desserts",
  },

  // Drinks
  {
    id: "dr1",
    name: "Mango Lassi",
    description:
      "Refreshing yogurt drink blended with ripe mangoes and a hint of cardamom",
    price: "90 ETB",
    image: "/it02.jpg?height=200&width=300",
    category: "drinks",
  },
  {
    id: "dr2",
    name: "Spiced Ethiopian Coffee",
    description: "Traditional Ethiopian coffee infused with Indian spices",
    price: "70 ETB",
    image: "/it06.jpg?height=200&width=300",
    category: "drinks",
  },
  {
    id: "dr3",
    name: "Masala Chai",
    description: "Aromatic tea brewed with milk and spices",
    price: "60 ETB",
    image: "/it01.jpg?height=200&width=300",
    category: "drinks",
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", name: "All" },
    { id: "wings", name: "Wings" },
    { id: "chicken", name: "Chicken" },
    { id: "sides", name: "Sides" },
    { id: "sauces", name: "Sauces" },
    { id: "desserts", name: "Desserts" },
    { id: "drinks", name: "Drinks" },
  ];

  const filteredItems = menuItems.filter((item) => {
    // Filter by category
    const categoryMatch =
      activeCategory === "all" || item.category === activeCategory;

    // Filter by search query
    const searchMatch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/15 z-15" />
        <Image
          src="/men01.jpg?height=400&width=1200"
          alt="CHOCHINCHICKEN menu display"
          width={1200}
          height={400}
          className="w-full h-[40vh] object-cover"
        />
        <div className="container absolute inset-0 z-20 flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-lg max-w-2xl">
            Explore our unique fusion of Indian and Ethiopian flavors.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16">
        <div className="container">
          {/* Search Bar */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search our menu..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="min-w-[100px]"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          {filteredItems.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No items found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
