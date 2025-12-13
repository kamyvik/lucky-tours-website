import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export function ContactPage() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#A0004D] to-[#7A0039] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-white">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We're here to help you plan your perfect journey. Reach out to us
            anytime!
          </p>
        </div>
      </section>

      {/* Contact Information & Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="mb-8">Get in Touch</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A0004D] to-[#C9005F] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2">Our Office</h3>
                      <p className="text-gray-600">
                        Velusamy Complex, 10.C,
                        <br />
                        Opp. to Kongunadu College,
                        <br />
                        Pallakattu Thottam, Gounder Mills,
                        <br />
                        Coimbatore, Tamil Nadu 641029
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A0004D] to-[#C9005F] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2">Phone Numbers</h3>
                      <p className="text-gray-600 mb-1">
                        <a
                          href="tel:7867983892"
                          className="hover:text-[#A0004D] transition-colors"
                        >
                          7867983892
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a
                          href="tel:09629226612"
                          className="hover:text-[#A0004D] transition-colors"
                        >
                          096292 26612
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A0004D] to-[#C9005F] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2">Email Address</h3>
                      <p className="text-gray-600 mb-1">
                        <a
                          href="mailto:info@luckytours.com"
                          className="hover:text-[#A0004D] transition-colors"
                        >
                          info@luckytours.com
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a
                          href="mailto:support@luckytours.com"
                          className="hover:text-[#A0004D] transition-colors"
                        >
                          support@luckytours.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A0004D] to-[#C9005F] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2">Working Hours</h3>
                      <p className="text-gray-600 mb-1">
                        Monday - Saturday: 9:00 AM - 7:00 PM
                      </p>
                      <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/lucky_tours_cbe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A0004D] to-[#C9005F] flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://www.facebook.com/lucky_tours_cbe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A0004D] to-[#C9005F] flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://twitter.com/lucky_tours_cbe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A0004D] to-[#C9005F] flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Twitter className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div>
              <h2 className="mb-8">Find Us on Map</h2>
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 h-[700px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3073!2d77.0186!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjUiTiA3N8KwMDEnMDcuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lucky Tours Location"
                ></iframe>
              </div>

              {/* Directions */}
              <div className="bg-gradient-to-r from-[#A0004D] to-[#C9005F] text-white p-6 rounded-2xl mt-6">
                <h3 className="text-white mb-3">Directions</h3>
                <p className="text-white/90">
                  We are located opposite to Kongunadu College at Gounder Mills,
                  Coimbatore. Easily accessible by public transport and has ample
                  parking space for visitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Ready to Plan Your Trip?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit our office or send us an enquiry online. Our travel experts are
            ready to help you create the perfect itinerary.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative px-8 py-4 rounded-lg overflow-hidden group bg-gradient-to-r from-[#A0004D] to-[#C9005F] text-white backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="relative z-10">Make an Enquiry</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>
    </div>
  );
}