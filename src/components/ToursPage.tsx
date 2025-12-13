import { useState } from "react";
import { TourCard } from "./TourCard";
import { Search, Filter } from "lucide-react";

interface ToursPageProps {
  onNavigate: (page: string) => void;
}

export function ToursPage({ onNavigate }: ToursPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Tours" },
    { id: "honeymoon", name: "Honeymoon Tours" },
    { id: "family", name: "Family Tours" },
    { id: "college", name: "College Tours" },
    { id: "school", name: "School Tours" },
    { id: "international", name: "International Tours" },
    { id: "domestic", name: "Domestic Tours" },
  ];

  const tours = [
    {
      id: 1,
      category: "honeymoon",
      title: "Romantic Maldives Escape",
      image: "https://images.unsplash.com/photo-1759442057261-55d3d2007bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leW1vb24lMjBkZXN0aW5hdGlvbiUyMHN1bnNldHxlbnwxfHx8fDE3NjMwMzc3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "5D/4N",
      groupSize: "2 Pax",
      location: "Maldives",
      price: "From ₹85,000",
      description: "Experience paradise with your loved one in this exclusive honeymoon package.",
    },
    {
      id: 2,
      category: "honeymoon",
      title: "Swiss Romance",
      image: "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2Mjk4MzYyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "7D/6N",
      groupSize: "2 Pax",
      location: "Switzerland",
      price: "From ₹1,50,000",
      description: "Explore the romantic landscapes of Switzerland with your partner.",
    },
    {
      id: 3,
      category: "family",
      title: "Kerala Family Adventure",
      image: "https://images.unsplash.com/photo-1485216983937-749292830fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB2YWNhdGlvbiUyMHRyYXZlbHxlbnwxfHx8fDE3NjMwMzQ2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "6D/5N",
      groupSize: "4-6 Pax",
      location: "Kerala",
      price: "From ₹45,000",
      description: "Explore God's Own Country with your family, featuring houseboats and beaches.",
    },
    {
      id: 4,
      category: "family",
      title: "Rajasthan Heritage Tour",
      image: "https://images.unsplash.com/photo-1612106268642-a14ba058aa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHRvdXJpc3QlMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NjMwMzc3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "8D/7N",
      groupSize: "4-8 Pax",
      location: "Rajasthan",
      price: "From ₹55,000",
      description: "Discover the royal heritage and culture of Rajasthan with your loved ones.",
    },
    {
      id: 5,
      category: "college",
      title: "Manali Adventure Trek",
      image: "https://images.unsplash.com/photo-1556560984-88d514ef5c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZnJpZW5kcyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjMwMzc3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "4D/3N",
      groupSize: "15-20 Pax",
      location: "Manali",
      price: "From ₹12,000",
      description: "Perfect college trip with adventure activities and camping.",
    },
    {
      id: 6,
      category: "college",
      title: "Goa Beach Party",
      image: "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2Mjk4MzYyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "3D/2N",
      groupSize: "10-15 Pax",
      location: "Goa",
      price: "From ₹8,000",
      description: "Beach fun, water sports, and nightlife in Goa.",
    },
    {
      id: 7,
      category: "school",
      title: "Educational Delhi Tour",
      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjB0cmlwJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzMDM3Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "5D/4N",
      groupSize: "30-40 Pax",
      location: "Delhi",
      price: "From ₹10,000",
      description: "Visit historical monuments and learn about India's rich heritage.",
    },
    {
      id: 8,
      category: "school",
      title: "Science City Exploration",
      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjB0cmlwJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzMDM3Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "2D/1N",
      groupSize: "40-50 Pax",
      location: "Bangalore",
      price: "From ₹6,000",
      description: "Interactive learning experience at various science museums.",
    },
    {
      id: 9,
      category: "international",
      title: "European Delight",
      image: "https://images.unsplash.com/photo-1722602985673-4137f4730dd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwbGFuZG1hcmslMjB0cmF2ZWx8ZW58MXx8fHwxNzYzMDM3Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "10D/9N",
      groupSize: "4-6 Pax",
      location: "Europe",
      price: "From ₹2,00,000",
      description: "Visit multiple European countries in one spectacular journey.",
    },
    {
      id: 10,
      category: "international",
      title: "Dubai Extravaganza",
      image: "https://images.unsplash.com/photo-1722602985673-4137f4730dd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwbGFuZG1hcmslMjB0cmF2ZWx8ZW58MXx8fHwxNzYzMDM3Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "5D/4N",
      groupSize: "2-4 Pax",
      location: "Dubai",
      price: "From ₹65,000",
      description: "Experience luxury and adventure in the city of dreams.",
    },
    {
      id: 11,
      category: "domestic",
      title: "Kashmir Paradise",
      image: "https://images.unsplash.com/photo-1713959989861-2425c95e9777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHRyYXZlbHxlbnwxfHx8fDE3NjMwMzI3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "7D/6N",
      groupSize: "4-6 Pax",
      location: "Kashmir",
      price: "From ₹48,000",
      description: "Explore the breathtaking beauty of Heaven on Earth.",
    },
    {
      id: 12,
      category: "domestic",
      title: "Andaman Island Escape",
      image: "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2Mjk4MzYyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "6D/5N",
      groupSize: "2-4 Pax",
      location: "Andaman",
      price: "From ₹42,000",
      description: "Pristine beaches, crystal clear waters, and water sports.",
    },
  ];

  const filteredTours = tours.filter((tour) => {
    const matchesCategory =
      selectedCategory === "all" || tour.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#A0004D] to-[#7A0039] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-4 text-white">Explore Our Tours</h1>
          <p className="text-center text-xl text-white/90 mb-8">
            Find your perfect adventure from our wide range of tour packages
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations, tours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/95 backdrop-blur-md border border-white/20 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-[#A0004D]" />
              <h3>Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-[#A0004D] to-[#C9005F] text-white backdrop-blur-md border border-white/20 shadow-lg"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-[#A0004D] hover:text-[#A0004D]"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tours Grid */}
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <TourCard
                  key={tour.id}
                  {...tour}
                  onEnquire={() => onNavigate("enquiry")}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-600 text-xl">
                No tours found matching your criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}