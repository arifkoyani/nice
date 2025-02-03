"use client";
import { Carousel } from '@mantine/carousel';
import { FiChevronRight, FiChevronLeft, FiPlay } from 'react-icons/fi';
import Image from 'next/image';

export default function Reviews() {
  return (
    <div className='bg-gray-100 flex items-center'>
      <div className='container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12'>
        {/* Text on the left side */}
        <div className='lg:w-1/2 space-y-6'>
          <h1 className='text-4xl lg:text-5xl font-bold'>Nice things people say</h1>
          <p className='text-lg text-gray-600 max-w-lg'>
            Our commitment to customer experiences has earned the trust of over 1,000,000 agents worldwide. Here&apos;s what some of them say about us.
          </p>
        </div>

        {/* Carousel on the right side */}
        <div className="lg:w-1/2 w-full">
          <Carousel
            height="400px"
            nextControlIcon={<FiChevronRight size={24} />}
            previousControlIcon={<FiChevronLeft size={24} />}
            styles={{
              control: {
                backgroundColor: 'white',
                color: 'black',
                border: 'none',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                '&:hover': { backgroundColor: '#f3f4f6' },
              },
              root: {
                width: '100%', // Ensure the carousel takes full width of the container
                height: '400px', // Fixed height for the carousel
              },
            }}
          >
            <Carousel.Slide>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UxjEJQvguDMqLofMjJOq2bXWZazrzJ.png"
                  alt="Testimonial"
                  className="w-full h-full object-cover"
                  layout="responsive"
                  width={500} // Define the width
                  height={500} // Define the height
                  loading="lazy" // Optional: lazy load the image
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                  <p className="text-white text-lg mb-4">
                    How Lumen goes beyond frictionless to provide a humanized, personal customer experience with NICE ContactEngine, for cost savings and optimum CX.
                  </p>
                  <button className="flex w-1/3 items-center text-white bg-transparent border border-white px-4 py-2 rounded hover:bg-white/20 transition-colors">
                    <FiPlay className="mr-2" />
                    Watch video
                  </button>
                </div>
              </div>
            </Carousel.Slide>
            {/* Add more slides with similar structure */}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
