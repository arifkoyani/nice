import { BackgroundImage, Center, Box } from "@mantine/core";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image"; // Using next/image for optimized images

export default function Recognition() {
  return (
    <Box className="w-full">
      <BackgroundImage
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
        radius="xs"
        className="pb-24 pt-12 flex flex-col items-center"
      >
        <Center p="md" className="flex flex-col h-screen">
          <span className="text-5xl text-white mb-10">
            Don’t take our word for it.
          </span>

          <div className="flex gap-10">
            <div className="relative w-96 h-[568px] bg-pink-600 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/one.jpg"
                alt="Inserted Image"
                className="absolute inset-0 w-full h-full object-cover"
                layout="fill" // Ensures the image covers the space correctly
                objectFit="cover" // Ensures image covers the area
                loading="lazy" // Optional: for lazy loading
              />
            </div>
            <div className="relative w-96 h-[568px] bg-pink-600 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/two.jpg"
                alt="Inserted Image"
                className="absolute inset-0 w-full h-full object-cover"
                layout="fill" 
                objectFit="cover"
                loading="lazy"
              />
            </div>
            <div className="relative w-96 h-[568px] bg-pink-600 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/three.png"
                alt="Inserted Image"
                className="absolute inset-0 w-full h-full object-cover"
                layout="fill" 
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </div>
        </Center>

        <div className="flex justify-center">
          <button className="group h-8 text-black mt-6 flex items-center gap-2 px-8 py-5 duration-500 bg-cyan-400 border-2 border-cyan-400 font-semibold rounded-full shadow-md hover:text-white hover:bg-[#47484c] transition-colors">
            <span className="font-semibold">Transform CX with AI</span>
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </BackgroundImage>
    </Box>
  );
}
