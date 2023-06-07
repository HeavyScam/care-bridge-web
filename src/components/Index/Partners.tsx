import React, { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";

function Partners() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <div id="partners" className="mx-[10%] my-20">
      <h1 className="text-left text-2xl font-bold text-[#444BD3] my-10">
        Our Partners
      </h1>
      <Carousel
        mx="auto"
        withIndicators
        loop
        className="max-w-full"
        plugins={[autoplay.current]}
        nextControlIcon={<IconChevronRight size={32} color="#444BD3" />}
        previousControlIcon={<IconChevronLeft size={32} color="#444BD3" />}
      >
        <Carousel.Slide>
          <div className="mx-12 flex flex-row items-center justify-center px-5">
            <Image
              src="/akshayapatra.png"
              alt=""
              width={100}
              height={100}
              className="w-100 lg:w-200"
            />
            <p className="ml-4 hidden text-center md:text-left lg:inline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel
            </p>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="mx-12 flex flex-row items-center justify-center px-5">
            <Image
              src="/HelpAgeIndia.png"
              alt=""
              width={100}
              height={100}
              className="w-100 lg:w-200"
            />
            <p className="ml-4 hidden text-center md:text-left lg:inline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel
            </p>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="mx-12 flex flex-row items-center justify-center px-5">
            <Image
              src="/teachforindia.png"
              alt=""
              width={100}
              height={100}
              className="w-100 lg:w-200"
            />
            <p className="ml-4 hidden text-center md:text-left lg:inline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel
            </p>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}

export default Partners;
