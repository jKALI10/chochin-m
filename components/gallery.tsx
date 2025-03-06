"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { galleryImages } from "@/data/gallery-images"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  // Only show 4 images in the preview
  const previewImages = galleryImages.slice(0, 4)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {previewImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(image.src)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  )
}

