import { BallCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

const TECH_CATEGORIES = [
  "Core Data",
  "Data Visualization",
  "Machine Learning",
  "Backend / AI",
  "Tools",
] as const;

// Technologies
export const Tech = () => {
  return (
    <SectionWrapper idName="tech">
      <div className="flex flex-col gap-12">
        {TECH_CATEGORIES.map((category) => {
          const technologies = TECHNOLOGIES.filter(
            (technology) => technology.category === category
          );

          return (
            <div key={category}>
              <h3 className="text-white text-[22px] font-bold text-center mb-7">
                {category}
              </h3>

              <div className="flex flex-row flex-wrap justify-center gap-x-10 gap-y-12">
                {technologies.map((technology) => (
                  <div
                    className="flex w-28 flex-col items-center gap-3"
                    key={technology.name}
                  >
                    <div className="h-24 w-24 sm:h-28 sm:w-28">
                      <BallCanvas icon={technology.icon} />
                    </div>
                    <p className="text-secondary text-[14px] font-medium text-center leading-5">
                      {technology.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
