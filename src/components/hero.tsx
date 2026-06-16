import { motion } from "framer-motion";
import { SOCIALS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

const DataHeroVisual = () => (
  <div
    data-testid="data-hero-visual"
    className="pointer-events-none absolute right-[3%] top-[34%] z-[1] hidden h-[310px] w-[360px] xl:block 2xl:right-[6%] 2xl:top-[31%] 2xl:h-[420px] 2xl:w-[505px]"
  >
    <div
      className="absolute inset-0 rounded-2xl border border-[#915eff]/30 bg-[#0b1025]/85 p-4 shadow-[0_35px_90px_rgba(0,206,168,0.16)] 2xl:p-6"
      style={{
        transform: "perspective(900px) rotateY(-18deg) rotateX(8deg)",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-20 rounded-full bg-[#00cea8] 2xl:h-3 2xl:w-24" />
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#56ccf2] 2xl:h-3 2xl:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#915eff] 2xl:h-3 2xl:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#00cea8] 2xl:h-3 2xl:w-3" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-[1fr_1.15fr] gap-3 2xl:mt-8 2xl:gap-5">
        <div className="space-y-3 2xl:space-y-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 2xl:p-4">
            <div className="mb-3 h-2 w-16 rounded-full bg-white/20 2xl:mb-4 2xl:w-20" />
            <div className="flex h-16 items-end gap-2 2xl:h-28 2xl:gap-3">
              {[42, 68, 52, 88, 74].map((height, index) => (
                <div
                  key={height}
                  className={cn(
                    "w-6 rounded-t-md 2xl:w-8",
                    index % 2 === 0 ? "bg-[#56ccf2]" : "bg-[#915eff]"
                  )}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 2xl:p-4">
            <div className="mb-3 h-2 w-20 rounded-full bg-white/20 2xl:mb-4 2xl:w-24" />
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "h-3 rounded 2xl:h-5",
                    index % 3 === 0 ? "bg-[#00cea8]/80" : "bg-[#915eff]/70"
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative rounded-xl border border-white/10 bg-white/[0.04] p-3 2xl:p-5">
          <div className="absolute left-5 top-8 h-[170px] w-[2px] bg-gradient-to-b from-[#56ccf2] via-[#915eff] to-[#00cea8] 2xl:left-7 2xl:top-10 2xl:h-[245px]" />
          {[
            ["SQL", "Collect"],
            ["ETL", "Clean"],
            ["ML", "Predict"],
            ["BI", "Explain"],
          ].map(([label, detail], index) => (
            <div
              key={label}
              className="relative mb-3 ml-7 rounded-lg border border-[#915eff]/25 bg-[#151030] px-3 py-2 shadow-lg 2xl:mb-6 2xl:ml-9 2xl:px-4 2xl:py-3"
            >
              <span className="absolute -left-[34px] top-3 h-3.5 w-3.5 rounded-full bg-[#00cea8] shadow-[0_0_18px_rgba(0,206,168,0.8)] 2xl:-left-[43px] 2xl:top-4 2xl:h-4 2xl:w-4" />
              <p className="text-[13px] font-bold text-white 2xl:text-[15px]">{label}</p>
              <p className="text-[11px] text-secondary 2xl:text-[12px]">{detail}</p>
              {index < 3 && (
                <span className="absolute -bottom-5 left-6 h-5 w-[2px] bg-[#915eff]/70" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="absolute -bottom-6 right-6 h-16 w-16 rounded-full border border-[#00cea8]/50 bg-[#00cea8]/10 shadow-[0_0_45px_rgba(0,206,168,0.35)] 2xl:-bottom-8 2xl:right-8 2xl:h-24 2xl:w-24" />
    <div className="absolute -right-3 top-12 h-12 w-12 rounded-full border border-[#915eff]/60 bg-[#915eff]/20 shadow-[0_0_35px_rgba(145,94,255,0.35)] 2xl:-right-4 2xl:top-16 2xl:h-16 2xl:w-16" />
  </div>
);

export const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto overflow-hidden bg-primary"
      style={{ backgroundColor: "#050816" }}
    >
      {/* TEXT CONTENT */}
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10"
        )}
      >
        {/* Left line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text */}
        <div className="max-w-[720px] xl:max-w-[760px] 2xl:max-w-none">
          <h1 className={cn(styles.heroHeadText, "text-white")}>
            Hi, I'm <span className="text-[#915eff]">Manav Doshi</span>
          </h1>

          <p className={cn(styles.heroSubText, "mt-2 max-w-[720px] text-white-100 xl:max-w-[760px] 2xl:max-w-[920px]")}>
            Building data-driven solutions using{" "}
            <br className="hidden 2xl:block" />
            SQL, Python, Machine Learning, and Business Intelligence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-[#915eff] px-6 py-3 text-white font-semibold hover:bg-[#7a4de8] transition"
            >
              View Projects
            </a>

            <a
              href="/Manav_Doshi_Resume copy.pdf"
              download="Manav_Doshi_Resume copy.pdf"
              className="rounded-lg border border-[#915eff] px-6 py-3 text-white font-semibold hover:bg-[#915eff]/20 transition"
            >
              Download Resume
            </a>

            <div className="flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-lg border border-[#915eff] bg-[#151030]/70 transition hover:bg-[#915eff]/20"
                >
                  <img
                    src={social.icon}
                    alt=""
                    className="h-5 w-5 object-contain"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DataHeroVisual />

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};
