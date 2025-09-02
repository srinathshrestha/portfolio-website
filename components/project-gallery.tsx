"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

interface ProjectGalleryImage {
  url: string;
  caption?: string;
}

interface ProjectGalleryProps {
  images: ProjectGalleryImage[];
  title?: string;
}

export function ProjectGallery({
  images,
  title = "Project Gallery",
}: ProjectGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <>
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold">{title}</h2>

        {/* Main Swiper Gallery */}
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-cyan-400",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-cyan-500",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
            className="project-gallery-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="group relative cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  {/* Container with natural aspect ratio */}
                  <div className="relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900/50">
                    <div className="relative w-full min-h-[300px] max-h-[500px]">
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.caption || `Gallery image ${index + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300 rounded-lg"
                        style={{ maxHeight: "500px" }}
                      />
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-md">
                        Click to enlarge
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  {image.caption && (
                    <p className="mt-2 text-sm text-zinc-400 text-center">
                      {image.caption}
                    </p>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center mt-4 gap-2">
            <Button
              variant="outline"
              size="sm"
              className="swiper-button-prev-custom border-zinc-800 hover:bg-zinc-800"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="swiper-button-next-custom border-zinc-800 hover:bg-zinc-800"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-7xl w-full h-full max-h-[95vh] p-0 bg-black/95 border-zinc-800">
          {selectedImageIndex !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Navigation Buttons */}
              {selectedImageIndex > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              )}

              {selectedImageIndex < images.length - 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              )}

              {/* Main Image */}
              <div className="relative w-full h-full p-8">
                <Image
                  src={images[selectedImageIndex].url || "/placeholder.svg"}
                  alt={
                    images[selectedImageIndex].caption ||
                    `Gallery image ${selectedImageIndex + 1}`
                  }
                  fill
                  className="object-contain"
                />
              </div>

              {/* Caption */}
              {images[selectedImageIndex].caption && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-md">
                  <p className="text-sm text-center">
                    {images[selectedImageIndex].caption}
                  </p>
                </div>
              )}

              {/* Image Counter */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-md">
                <span className="text-sm">
                  {selectedImageIndex + 1} / {images.length}
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .project-gallery-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 1rem;
        }

        .project-gallery-swiper .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          opacity: 0.5 !important;
        }

        .project-gallery-swiper .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
}
