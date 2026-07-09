import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github, preview } from "../assets";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
  live_site_link?: string;
  live_site_label?: string;
  demo_video_link?: string;
};

// Project Card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
  live_site_label = "Project Demo",
  demo_video_link,
}: ProjectCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-4 rounded-2xl w-full min-h-[auto] flex flex-col sm:w-[360px] sm:min-h-[620px] sm:p-5"
    >
      <div className="relative h-[200px] w-full sm:h-[230px]">
        {/* Work image */}
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Live Site */}
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          {live_site_link && (
            <button
              type="button"
              onClick={() =>
                window.open(live_site_link, "_blank", "noreferrer")
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              aria-label={`Open ${name} live site`}
              title="Live Site"
            >
              <img
                src={preview}
                alt=""
                className="w-2/3 h-2/3 object-contain"
              />
            </button>
          )}

          {/* Github */}
          <button
            type="button"
            onClick={() =>
              window.open(source_code_link, "_blank", "noreferrer")
            }
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2"
            aria-label={`Open ${name} GitHub repository`}
            title="Github"
          >
            <img
              src={github}
              alt=""
              className="w-1/2 h-1/2 object-contain"
            />
          </button>
        </div>
      </div>

      {/* Work Info */}
      <div className="mt-5 flex-1">
        <h3 className="text-white font-bold text-[22px] leading-[30px] sm:text-[24px] sm:leading-[32px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] leading-[23px] sm:leading-[24px]">
          {description}
        </p>
      </div>

      {/* Work Tag */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
            #{tag.name}
          </p>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-6 max-[420px]:flex-col">
        {live_site_link && (
          <button
            type="button"
            onClick={() => window.open(live_site_link, "_blank", "noreferrer")}
            className="w-fit rounded-lg border border-[#915eff]/60 bg-[#915eff]/20 px-4 py-2 text-[13px] font-semibold text-white transition hover:border-[#915eff] hover:bg-[#915eff]/35 max-[420px]:w-full"
            aria-label={`Open ${name} ${live_site_label}`}
          >
            {live_site_label}
          </button>
        )}

        {demo_video_link && (
          <button
            type="button"
            onClick={() => window.open(demo_video_link, "_blank", "noreferrer")}
            className="w-fit rounded-lg border border-[#f8d47a]/40 bg-gradient-to-r from-[#f8d47a]/20 via-[#915eff]/20 to-[#56ccf2]/10 px-4 py-2 text-[13px] font-semibold text-[#f8d47a] transition hover:border-[#f8d47a]/80 hover:bg-[#f8d47a]/20 max-[420px]:w-full"
            aria-label={`Open ${name} demo video`}
          >
            Demo Video
          </button>
        )}
      </div>
    </Tilt>
  </motion.div>
);

// Works
export const Works = () => {
  return (
    <SectionWrapper idName="projects">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        {/* About */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn(undefined, undefined, 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        {/* Project Card */}
        <div className="mt-12 flex flex-wrap gap-6 sm:mt-20 sm:gap-7">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} {...project} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
