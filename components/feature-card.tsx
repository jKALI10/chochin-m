import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Utensils } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card className="h-full transition-all duration-200 hover:shadow-md">
      <CardContent className="pt-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          {icon === "utensils" ? (
            <Utensils className="h-6 w-6 text-primary" />
          ) : (
            <Image
              src={`/placeholder.svg?height=24&width=24`}
              alt={`${title} icon`}
              width={24}
              height={24}
              className="h-6 w-6 text-primary"
            />
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

