import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  image: string
  featured?: boolean
  category: string
}

interface MenuCardProps {
  item: MenuItem
}

export function MenuCard({ item }: MenuCardProps) {
  const { name, description, price, image, featured = false } = item

  return (
    <Card className={featured ? "border-primary" : ""}>
      <div className="relative">
        <Image
          src={image || "/placeholder.svg?height=200&width=300"}
          alt={name}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {featured && <Badge className="absolute top-2 right-2">Chef's Special</Badge>}
      </div>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{name}</h3>
          <span className="font-bold text-primary">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}

