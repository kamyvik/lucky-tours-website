import { TourCard } from "./TourCard";
import { Star, Award, Users, Headphones } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredTours = [
    {
      id: 1,
      title: "Romantic Maldives Escape",
      image: "https://images.unsplash.com/photo-1759442057261-55d3d2007bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leW1vb24lMjBkZXN0aW5hdGlvbiUyMHN1bnNldHxlbnwxfHx8fDE3NjMwMzc3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "5D/4N",
      groupSize: "2 Pax",
      location: "Maldives",
      price: "From ₹85,000",
      description: "Experience paradise with your loved one in this exclusive honeymoon package to the Maldives.",
    },
    {
      id: 2,
      title: "Kerala Family Adventure",
      image: "https://images.unsplash.com/photo-1485216983937-749292830fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB2YWNhdGlvbiUyMHRyYXZlbHxlbnwxfHx8fDE3NjMwMzQ2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "6D/5N",
      groupSize: "4-6 Pax",
      location: "Kerala",
      price: "From ₹45,000",
      description: "Explore God's Own Country with your family, featuring houseboats, hill stations, and beaches.",
    },
    {
      id: 3,
      title: "Manali Adventure Trek",
      image: "https://images.unsplash.com/photo-1556560984-88d514ef5c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZnJpZW5kcyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjMwMzc3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "4D/3N",
      groupSize: "15-20 Pax",
      location: "Manali",
      price: "From ₹12,000",
      description: "Perfect college trip with adventure activities, camping, and memories that last a lifetime.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "15+ Years Experience",
      description: "Trusted by thousands of happy travelers",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Best Price Guarantee",
      description: "Get the best deals on all tours",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Professional and experienced tour guides",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "We're here whenever you need us",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2Mjk4MzYyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6 text-white">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Create unforgettable memories with Lucky Tours - Your trusted travel
            partner
          </p>
          <button
            onClick={() => onNavigate("tours")}
            className="relative px-8 py-4 text-lg rounded-lg overflow-hidden group bg-gradient-to-r from-[#A0004D] to-[#C9005F] text-white backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span className="relative z-10">Explore Tours</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Tour Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of the most popular destinations
              and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <TourCard
                key={tour.id}
                {...tour}
                onEnquire={() => onNavigate("enquiry")}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("tours")}
              className="relative px-8 py-4 rounded-lg overflow-hidden group bg-gradient-to-r from-[#A0004D] to-[#C9005F] text-white backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10">View All Tours</span>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Lucky Tours</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to making your travel dreams come true with
              exceptional service and unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#A0004D] to-[#C9005F] text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#A0004D] to-[#7A0039] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today and let our experts help you plan the perfect trip
          </p>
          <button
            onClick={() => onNavigate("enquiry")}
            className="relative px-8 py-4 rounded-lg overflow-hidden group bg-white text-[#A0004D] backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-[#A0004D]/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>
    </div>
  );
}