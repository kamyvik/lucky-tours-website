import { Target, Eye, Heart, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description:
        "Your satisfaction and safety are our top priorities in everything we do.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quality Service",
      description:
        "We deliver exceptional experiences with attention to every detail.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Best Value",
      description:
        "Competitive pricing without compromising on quality or experience.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparency",
      description:
        "Clear communication and honest dealings in all our interactions.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1713959989861-2425c95e9777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHRyYXZlbHxlbnwxfHx8fDE3NjMwMzI3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About us background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">About Lucky Tours</h1>
          <p className="text-xl text-white/90">
            Creating Memories Since 2008
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Lucky Tours began its journey in 2008 with a simple mission: to
                  make travel accessible, affordable, and unforgettable for
                  everyone. What started as a small travel agency in Coimbatore
                  has now grown into one of the most trusted names in the travel
                  industry.
                </p>
                <p>
                  Over the years, we've helped thousands of families, couples,
                  students, and adventure seekers explore the beauty of India and
                  destinations around the world. Our commitment to excellence and
                  customer satisfaction has been the cornerstone of our success.
                </p>
                <p>
                  Today, Lucky Tours offers a comprehensive range of tour
                  packages, from romantic honeymoon getaways to thrilling college
                  trips, educational school tours to memorable family vacations.
                  Each journey is crafted with care, ensuring that every traveler
                  returns with a heart full of memories.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1612106268642-a14ba058aa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHRvdXJpc3QlMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NjMwMzc3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Travel destination"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A0004D] to-[#C9005F] flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide exceptional travel experiences that inspire, educate,
                and create lasting memories. We strive to offer personalized
                service, competitive pricing, and seamless travel arrangements
                that exceed our customers' expectations. Our mission is to make
                every journey a celebration of discovery and joy.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A0004D] to-[#C9005F] flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become the most trusted and preferred travel partner in South
                India, known for our commitment to quality, innovation, and
                customer satisfaction. We envision a future where every traveler
                chooses Lucky Tours for their dream vacations, confident in our
                ability to deliver extraordinary experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#A0004D] to-[#C9005F] text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#A0004D] to-[#7A0039] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2 text-white">15+</div>
              <p className="text-white/80">Years of Experience</p>
            </div>
            <div>
              <div className="text-5xl mb-2 text-white">10,000+</div>
              <p className="text-white/80">Happy Travelers</p>
            </div>
            <div>
              <div className="text-5xl mb-2 text-white">500+</div>
              <p className="text-white/80">Destinations</p>
            </div>
            <div>
              <div className="text-5xl mb-2 text-white">100%</div>
              <p className="text-white/80">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}