import { Calendar, Users, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TourCardProps {
  title: string;
  image: string;
  duration: string;
  groupSize: string;
  location: string;
  price: string;
  description: string;
  onEnquire: () => void;
}

export function TourCard({
  title,
  image,
  duration,
  groupSize,
  location,
  price,
  description,
  onEnquire,
}: TourCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-[#A0004D] text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        {/* Details */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4 text-[#A0004D]" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4 text-[#A0004D]" />
            <span className="text-sm">{groupSize}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4 text-[#A0004D]" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onEnquire}
          className="w-full relative px-6 py-3 rounded-lg overflow-hidden group/btn bg-gradient-to-r from-[#A0004D] to-[#C9005F] text-white backdrop-blur-md border border-white/20 shadow-md hover:shadow-lg transition-all duration-300"
        >
          <span className="relative z-10">Enquire Now</span>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
}