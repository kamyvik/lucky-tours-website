import { useState } from "react";
import { Mail, Phone, User, Calendar, Users, MapPin, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner@2.0.3";

export function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tourType: "",
    destination: "",
    travelDate: "",
    numberOfPeople: "",
    message: "",
  });

  const tourTypes = [
    "Honeymoon Tours",
    "Family Tours",
    "College Tours",
    "School Tours",
    "International Tours",
    "Domestic Tours",
    "Custom Package",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    console.log("Form submitted:", formData);
    toast.success("Enquiry submitted successfully! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      tourType: "",
      destination: "",
      travelDate: "",
      numberOfPeople: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#A0004D] to-[#7A0039] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-white">Make an Enquiry</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Share your travel plans with us and our experts will create a
            personalized package for you
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-[#A0004D] to-[#C9005F] text-white p-8">
                <h2 className="text-white mb-2">Plan Your Dream Vacation</h2>
                <p className="text-white/90">
                  Fill in the details below and we'll get back to you within 24
                  hours
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#A0004D]" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-[#A0004D] focus:ring-[#A0004D]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#A0004D]" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-[#A0004D] focus:ring-[#A0004D]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#A0004D]" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-[#A0004D] focus:ring-[#A0004D]"
                    />
                  </div>

                  {/* Tour Type */}
                  <div className="space-y-2">
                    <Label htmlFor="tourType" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#A0004D]" />
                      Tour Type *
                    </Label>
                    <select
                      id="tourType"
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A0004D] focus:border-[#A0004D] bg-white"
                    >
                      <option value="">Select tour type</option>
                      {tourTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Destination */}
                  <div className="space-y-2">
                    <Label htmlFor="destination" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#A0004D]" />
                      Preferred Destination
                    </Label>
                    <Input
                      id="destination"
                      name="destination"
                      type="text"
                      placeholder="e.g., Maldives, Kerala, Dubai"
                      value={formData.destination}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-[#A0004D] focus:ring-[#A0004D]"
                    />
                  </div>

                  {/* Travel Date */}
                  <div className="space-y-2">
                    <Label htmlFor="travelDate" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#A0004D]" />
                      Preferred Travel Date
                    </Label>
                    <Input
                      id="travelDate"
                      name="travelDate"
                      type="date"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-[#A0004D] focus:ring-[#A0004D]"
                    />
                  </div>

                  {/* Number of People */}
                  <div className="space-y-2">
                    <Label htmlFor="numberOfPeople" className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#A0004D]" />
                      Number of Travelers
                    </Label>
                    <Input
                      id="numberOfPeople"
                      name="numberOfPeople"
                      type="number"
                      min="1"
                      placeholder="e.g., 2"
                      value={formData.numberOfPeople}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-[#A0004D] focus:ring-[#A0004D]"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="message" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#A0004D]" />
                      Additional Requirements / Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your travel preferences, budget, special requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-[#A0004D] focus:ring-[#A0004D]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full relative px-8 py-4 rounded-lg overflow-hidden group bg-gradient-to-r from-[#A0004D] to-[#C9005F] text-white backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="relative z-10">Submit Enquiry</span>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

                <p className="text-center text-gray-600 mt-6">
                  By submitting this form, you agree to our terms and conditions
                </p>
              </form>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A0004D] to-[#C9005F] flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">7867983892</p>
                <p className="text-gray-600">096292 26612</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A0004D] to-[#C9005F] flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2">Email Us</h3>
                <p className="text-gray-600">info@luckytours.com</p>
                <p className="text-gray-600">support@luckytours.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}