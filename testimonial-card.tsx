import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  image: string
  rating: number
  testimonial: string
}

export function TestimonialCard({ name, image, rating, testimonial }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4 mb-4">
          <Image src={image || "/placeholder.svg"} alt={name} width={50} height={50} className="rounded-full" />
          <div>
            <h3 className="font-bold">{name}</h3>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" fill={i < rating ? "currentColor" : "none"} />
              ))}
            </div>
          </div>
        </div>
        <p className="text-muted-foreground italic">"{testimonial}"</p>
      </CardContent>
    </Card>
  )
}

