import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// ================= SERVICE CARD =================
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// ================= ABOUT =================
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.div
          variants={fadeIn(undefined, undefined, 0.1, 1)}
          className="mt-6 max-w-4xl"
        >
          <div className="text-secondary text-[17px] leading-[30px] space-y-4">
            <p>
              I am an aspiring <strong>Data Analyst</strong> building a strong
              foundation in data analysis through structured learning, hands-on
              projects, and leadership experiences.
            </p>

            <p>
              I work with{" "}
              <strong>Excel, SQL, Python, Power BI, and Statistics</strong> to
              explore data, identify patterns, and present insights clearly.
              While I am early in my professional journey, I focus on
              understanding the <strong>why</strong> behind the data — not just
              the tools.
            </p>

            <p>
              Alongside analytics, I bring leadership experience from student
              initiatives, where I have coordinated with teams, managed
              responsibilities, and communicated ideas effectively.
            </p>

            <p>
              I am actively seeking a{" "}
              <strong>Data Analyst Internship</strong> where I can learn,
              contribute, and grow with a data-driven team.
            </p>
          </div>
        </motion.div>

        {/* SERVICE CARDS */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
