"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Clock, MapPin, Phone } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function ReservationPage() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    time: "",
    specialRequests: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user selects
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.guests) newErrors.guests = "Number of guests is required"
    if (!formData.time) newErrors.time = "Time is required"
    if (!date) newErrors.date = "Date is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real app, you would send the form data to your backend here
      console.log("Form submitted:", { ...formData, date })
      setSubmitted(true)

      // Reset form after submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        guests: "",
        time: "",
        specialRequests: "",
      })
      setDate(undefined)

      // Show success message for 3 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <>
      <PageHeader title="Make a Reservation" description="Book your table at CHOCHINCHICKEN" />

      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Reserve Your Table</h2>
              <p className="text-muted-foreground mb-8">
                Experience the unique fusion of Cochin and Ethiopian flavors. Book your table now to avoid
                disappointment.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="text-muted-foreground">Bole Road, Near Millennium Hall, Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Opening Hours</h3>
                    <p className="text-muted-foreground">Monday - Sunday: 11:00 AM - 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Contact</h3>
                    <p className="text-muted-foreground">+251 11 234 5678</p>
                    <p className="text-muted-foreground">info@chochinchicken.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Reservation Policy</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Reservations are recommended, especially for dinner and weekends.</li>
                  <li>• We hold reservations for 15 minutes past the reserved time.</li>
                  <li>• For parties of 6 or more, please call us directly at +251 11 234 5678.</li>
                  <li>• Special requests are accommodated based on availability.</li>
                </ul>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Make a Reservation</h3>

                {submitted ? (
                  <div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">Thank you!</strong>
                    <span className="block sm:inline">
                      {" "}
                      Your reservation request has been received. We'll contact you shortly to confirm.
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+251 ..."
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground",
                                errors.date && "border-red-500",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                        {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label>Time</Label>
                        <Select value={formData.time} onValueChange={(value) => handleSelectChange("time", value)}>
                          <SelectTrigger className={errors.time ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                            <SelectItem value="12:00">12:00 PM</SelectItem>
                            <SelectItem value="13:00">1:00 PM</SelectItem>
                            <SelectItem value="14:00">2:00 PM</SelectItem>
                            <SelectItem value="18:00">6:00 PM</SelectItem>
                            <SelectItem value="19:00">7:00 PM</SelectItem>
                            <SelectItem value="20:00">8:00 PM</SelectItem>
                            <SelectItem value="21:00">9:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.time && <p className="text-red-500 text-xs">{errors.time}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Select value={formData.guests} onValueChange={(value) => handleSelectChange("guests", value)}>
                        <SelectTrigger className={errors.guests ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select number" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Person</SelectItem>
                          <SelectItem value="2">2 People</SelectItem>
                          <SelectItem value="3">3 People</SelectItem>
                          <SelectItem value="4">4 People</SelectItem>
                          <SelectItem value="5">5 People</SelectItem>
                          <SelectItem value="6">6 People</SelectItem>
                          <SelectItem value="7+">7+ People</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.guests && <p className="text-red-500 text-xs">{errors.guests}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialRequests">Special Requests</Label>
                      <Input
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        placeholder="Any special requests or dietary requirements"
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Reserve Now
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

