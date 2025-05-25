import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { ClassNameProps } from "../../types";

export type SectionBackgroundProps = {
  bgImageUrl?: string;
};

export const Section = ({
  children,
  className,
  bgImageUrl,
}: PropsWithChildren<SectionBackgroundProps> & ClassNameProps) => {
  // const bgImage = imageUrl ? `bg-[url(${})]` : undefined;
  return (
    <section
      className={twMerge(`py-20  bg-center bg-cover bg-no-repeat `, className)}
      style={{
        backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : undefined,
      }}
    >
      {children}
    </section>
  );
};
// font-(family-name:--heading-font)
export const SectionTitle = ({
  children,
  className,
}: PropsWithChildren & ClassNameProps) => {
  return (
    <h2
      className={twMerge(
        "text-center mb-12 text-4xl relative font-heading   ",
        className
      )}
    >
      {children}
      <span className="block w-24 h-1 bg-(--accent) mx-auto mt-4"></span>
    </h2>
  );
};

export const SectionContainer = ({
  children,
  className,
}: PropsWithChildren & ClassNameProps) => {
  return (
    <div
      className={twMerge(
        "w-full max-w-6xl mx-auto grid-cols-1 px-5 grid gap-10 items-center  min-h-full",
        className
      )}
    >
      {children}
    </div>
  );
};
