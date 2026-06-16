import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { RESEARCH } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type ResearchCardProps = (typeof RESEARCH)[number] & {
  index: number;
};

const ResearchCard = ({
  index,
  name,
  description,
  tags,
  image,
  links,
}: ResearchCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 35,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className="relative w-full h-[220px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[22px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-[24px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={cn(tag.color, "text-[14px]")}>
              #{tag.name}
            </p>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={`${name}-${link.label}`}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-lg bg-[#915eff] px-4 py-2 text-[13px] font-semibold text-white hover:bg-[#7a4de8] transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export const Research = () => {
  return (
    <SectionWrapper idName="research">
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Academic Work</p>
          <h2 className={styles.sectionHeadText}>Research.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn(undefined, undefined, 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Research projects where I combine analytics thinking with IoT,
            automation, and practical problem solving. These projects show how I
            approach real-world systems, collect useful data, and turn technical
            ideas into measurable outcomes.
          </motion.p>
        </div>

        <div className="mt-20 flex flex-wrap gap-7">
          {RESEARCH.map((research, i) => (
            <ResearchCard key={research.name} index={i} {...research} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
