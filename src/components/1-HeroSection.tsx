import { twMerge } from "tailwind-merge";
import { WeddingData } from "../types/wedding";
import { Section, SectionBackgroundProps } from "./ui";

interface Props extends SectionBackgroundProps {
  weddingData: WeddingData;
}

export default function HeroSection({ bgImageUrl }: Props) {
  return (
    <Section
      bgImageUrl={bgImageUrl}
      className="flex justify-center items-center text-center text-accent h-screen "
    >
      <div className="relative h-fit w-full  shadow inset-shadow-sm  p-22 bg-(--secondary)/20 bg-cover bg-center bg-no-repeat backdrop-blur-[1px] ">
        <div className="relative py-0   h-full ml-auto mr-auto w-fit  z-20 flex flex-col justify-center items-center gap-6  ">
          <h1 className="text-7xl font-body    text-(--accent) font-bold  w-min md:w-auto ">
            Alex & Mary
          </h1>
          {/* <p className="text-3xl font-heading   ">
            {`${date.day}.${date.month}.${date.year}`}
          </p> */}
          <img
            src="/icon-4.png"
            className="w-auto h-12 sepia invert opacity-50"
            alt=""
          />
        </div>
        <img
          src="/mary.png"
          alt="Главное изображение"
          className={twMerge(
            "absolute  object-cover z-10 ",
            "w-[20vh] h-auto  left-3 -top-[16vh] "
          )}
          // className="w-full h-auto md:w-auto md:h-full rounded-full opacity-90 max-w-none"
        />
      </div>
      <img
        src="/alex.png"
        alt="Главное изображение"
        className={twMerge(
          "absolute  object-cover  z-10",
          "w-[22vh] h-auto  right-0 bottom-0 "
        )}
        // className="w-full h-auto md:w-auto md:h-full rounded-full opacity-90 max-w-none"
      />
    </Section>
  );
}
