"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MenuCard, type MenuItem } from "@/components/menu-card";
import Image from "next/image";

// Menu data
const menuItems: MenuItem[] = [
  // Wings
  {
    id: "w1",
    name: "Cochin Spiced Wings",
    description:
      "Crispy chicken wings tossed in our signature Cochin spice blend",
    price: "632 ETB",
    image: "/it01.jpg",
    category: "wings",
    featured: true,
  },
  {
    id: "w2",
    name: "Berbere Hot Wings",
    description: "Spicy wings coated in Ethiopian berbere sauce",
    price: "464 ETB",
    image: "/it02.jpg",
    category: "wings",
  },
  {
    id: "w3",
    name: "Honey Ginger Wings",
    description: "Sweet and tangy wings with honey and ginger glaze",
    price: "564 ETB",
    image: "/it03.jpg",
    category: "wings",
  },

  // Chicken
  {
    id: "c1",
    name: "Berbere Butter Chicken",
    description:
      "Our signature dish combining the creaminess of butter chicken with Ethiopian berbere spice",
    price: "320 ETB",
    image: "/it04.jpg",
    category: "chicken",
    featured: true,
  },
  {
    id: "c2",
    name: "Cochin Chicken Curry",
    description:
      "Succulent chicken cooked in a rich tomato and spice gravy, served with injera",
    price: "280 ETB",
    image: "/it05.jpg",
    category: "chicken",
  },
  {
    id: "c3",
    name: "Chicken Biryani Fusion",
    description:
      "Fragrant rice cooked with chicken, Indian spices, and a touch of Ethiopian mitmita",
    price: "347 ETB",
    image: "/it06.jpg",
    category: "chicken",
  },

  // Sides
  {
    id: "s1",
    name: "Spiced Rice",
    description: "Basmati rice cooked with aromatic spices",
    price: "346 ETB",
    image: "/it01.jpg",
    category: "sides",
  },
  {
    id: "s2",
    name: "Garlic Naan",
    description: "Soft flatbread topped with garlic butter",
    price: "600 ETB",
    image: "/it02.jpg",
    category: "sides",
  },
  {
    id: "s3",
    name: "Fusion Salad",
    description: "Fresh vegetables with a tangy dressing",
    price: "753 ETB",
    image: "/it03.jpg",
    category: "sides",
  },

  // Sauces
  {
    id: "sa1",
    name: "Mint Chutney",
    description: "Fresh mint sauce with a hint of spice",
    price: "586 ETB",
    image: "/it04.jpg",
    category: "sauces",
  },
  {
    id: "sa2",
    name: "Berbere Sauce",
    description: "Traditional Ethiopian spice blend sauce",
    price: "567 ETB",
    image: "/it05.jpg",
    category: "sauces",
  },

  // Desserts
  {
    id: "d1",
    name: "Cardamom Honey Cake",
    description:
      "Soft cake infused with cardamom and drizzled with Ethiopian honey",
    price: "773 ETB",
    image: "/it06.jpg",
    category: "desserts",
  },
  {
    id: "d2",
    name: "Gulab Jamun",
    description: "Sweet milk solids dumplings soaked in rose-scented syrup",
    price: "567 ETB",
    image: "/it01.jpg",
    category: "desserts",
  },
  {
    id: "d3",
    name: "Mango Kulfi",
    description: "Traditional Indian frozen dessert with mango flavor",
    price: "500 ETB",
    image: "/it02.jpg",
    category: "desserts",
  },

  // Drinks
  {
    id: "dr1",
    name: "Mango Lassi",
    description:
      "Refreshing yogurt drink blended with ripe mangoes and a hint of cardamom",
    price: "90 ETB",
    image: "/it08.jpg",
    category: "drinks",
  },
  {
    id: "dr2",
    name: "Spiced Ethiopian Coffee",
    description: "Traditional Ethiopian coffee infused with Indian spices",
    price: "70 ETB",
    image: "/it06.jpg",
    category: "drinks",
  },
  {
    id: "dr3",
    name: "Masala Chai",
    description: "Aromatic tea brewed with milk and spices",
    price: "60 ETB",
    image: "/it07.jpg",
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-5" />
        <Image
          src="/men01.jpg?height=400&width=1200"
          alt="CHOCHINCHICKEN menu display"
          width={1200}
          height={400}
          className="w-full h-[40vh] object-cover"
        />
        <div className="container absolute inset-0 z-20 flex flex-col justify-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
            Our Menu
          </h1>
          <p className="text-base md:text-lg max-w-2xl">
            Explore our unique Ethiopian flavors.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-8 md:py-16">
        <div className="container px-4 md:px-6">
          {/* Search Bar */}
          <div className="mb-6 md:mb-8 max-w-md mx-auto">
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
          <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 h-auto"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
