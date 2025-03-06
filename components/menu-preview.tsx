"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MenuCard from "@/components/menu-card"
import MenuItemModal from "@/components/menu-item-modal"
import { menuItems } from "@/data/menu-items"

export default function MenuPreview() {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filterMenuItems = (category: string) => {
    return menuItems.filter((item) => item.category === category).slice(0, 3) // Only show 3 items per category for the preview
  }

  const handleItemClick = (item: any) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  return (
    <>
      <Tabs defaultValue="mains" className="w-full">
        <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto mb-8">
          <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
          <TabsTrigger value="mains">Main Courses</TabsTrigger>
          <TabsTrigger value="desserts">Desserts</TabsTrigger>
          <TabsTrigger value="drinks">Drinks</TabsTrigger>
        </TabsList>

        <TabsContent value="appetizers" className="space-y-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterMenuItems("appetizers").map((item) => (
              <div key={item.id} onClick={() => handleItemClick(item)} className="cursor-pointer">
                <MenuCard
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  featured={item.featured}
                />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mains" className="space-y-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterMenuItems("mains").map((item) => (
              <div key={item.id} onClick={() => handleItemClick(item)} className="cursor-pointer">
                <MenuCard
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  featured={item.featured}
                />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="desserts" className="space-y-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterMenuItems("desserts").map((item) => (
              <div key={item.id} onClick={() => handleItemClick(item)} className="cursor-pointer">
                <MenuCard
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  featured={item.featured}
                />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="drinks" className="space-y-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterMenuItems("drinks").map((item) => (
              <div key={item.id} onClick={() => handleItemClick(item)} className="cursor-pointer">
                <MenuCard
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  featured={item.featured}
                />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {isModalOpen && selectedItem && (
        <MenuItemModal item={selectedItem} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  )
}

