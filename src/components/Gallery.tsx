import React, { useState } from 'react';
import { Camera, X, ZoomIn, Dumbbell, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GalleryItem } from '../types/gym';
import { SafeImage } from './SafeImage';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { key: 'all', label: 'All Equipment' },
    { key: 'freeweights', label: 'Free Weights' },
    { key: 'racks', label: 'Racks & Barbells' },
    { key: 'machines', label: 'Machines' },
    { key: 'cardio', label: 'Cardio Zone' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0B0C12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161822] border border-white/10 text-[#E5A93C] text-xs uppercase font-heading tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Facility Showcase</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
            EQUIPMENT & <span className="text-[#E5A93C]">TRAINING FLOOR</span>
          </h2>
          <div className="w-16 h-1 bg-[#E5A93C] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Take a visual tour of Success Fitness Center's training floor in Bole, Addis Ababa. Purpose-built iron, solid benches, and heavy resistance machines.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-lg font-heading text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#E5A93C] text-black font-bold shadow-lg shadow-[#E5A93C]/20'
                  : 'bg-[#141622] text-gray-300 hover:text-white hover:bg-[#1C1F2E] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#10121A] border border-white/10 hover:border-[#E5A93C]/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <SafeImage
                  src={item.imageUrl}
                  alt={item.title}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-85"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                {/* Zoom Icon indicator */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#08090C]/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-[#E5A93C]" />
                </div>

                {/* Details at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <span className="text-[10px] font-heading font-bold text-[#E5A93C] uppercase tracking-wider block mb-1">
                    Bole Training Floor
                  </span>
                  <h3 className="font-heading text-base font-bold text-white uppercase leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full rounded-2xl bg-[#10121A] border border-white/15 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 hover:bg-[#E5A93C] text-white hover:text-black transition-colors focus:outline-none"
                aria-label="Close Image Viewer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] w-full overflow-hidden bg-black flex items-center justify-center">
                <SafeImage
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  containerClassName="w-full h-full max-h-[75vh]"
                  className="w-full h-full max-h-[75vh] object-contain"
                />
              </div>

              <div className="p-6 bg-[#12141F] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-heading font-bold text-[#E5A93C] uppercase tracking-wider">
                    Success Fitness Center • Bole, Addis Ababa
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white uppercase mt-0.5">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    {selectedImage.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="px-5 py-2.5 rounded-lg bg-[#1D2030] hover:bg-[#E5A93C] text-white hover:text-black font-heading font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
