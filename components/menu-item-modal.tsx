"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface MenuItemModalProps {
  item: {
    id: string
    name: string
    description: string
    price: string
    image: string
    featured?: boolean
    ingredients?: string[]
    allergens?: string[]
    spiceLevel?: number
  }
  isOpen: boolean
  onClose: () => void
}

export default function MenuItemModal({ item, isOpen, onClose }: MenuItemModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{item.name}</span>
            <span className="text-primary">{item.price}</span>
          </DialogTitle>
          <DialogDescription>{item.featured && <Badge className="mb-2">Chef's Special</Badge>}</DialogDescription>
        </DialogHeader>

        <div className="relative h-[200px] w-full rounded-md overflow-hidden mb-4">
          <Image
            src={item.image || "/placeholder.svg?height=200&width=400"}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          <p className="text-muted-foreground">{item.description}</p>

          {item.ingredients && (
            <div>
              <h4 className="font-medium mb-1">Ingredients</h4>
              <p className="text-sm text-muted-foreground">{item.ingredients.join(", ")}</p>
            </div>
          )}

          {item.allergens && (
            <div>
              <h4 className="font-medium mb-1">Allergens</h4>
              <p className="text-sm text-muted-foreground">{item.allergens.join(", ")}</p>
            </div>
          )}

          {item.spiceLevel !== undefined && (
            <div>
              <h4 className="font-medium mb-1">Spice Level</h4>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`h-4 w-4 rounded-full mr-1 ${i < item.spiceLevel! ? "bg-red-500" : "bg-gray-200"}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Link href="/reservation">
            <Button>Make a Reservation</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

