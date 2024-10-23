"use client";
import Brain from "../components/brains";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { profile } from "@/asset/index";
import ExperienceItem from "../components/Experience";

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef<HTMLDivElement>(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY SECTION */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src={profile}
              alt="Profile Image"
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p className="text-lg">
              I am a highly motivated full-stack developer and medical doctor
              with experience in web development, networking, and medical
              consultation. I have led development teams in various sectors and
              am currently focused on global fintech solutions. I am passionate
              about empowering youth across Africa.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Always eager to collaborate on innovative projects. Let`s connect
              and build solutions that make a difference!
            </span>
            <svg
              width="150"
              height="160"
              viewBox="0 0 461 227"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M220.154 57.9697C214.691 40.6696 206.422 5.17144 183.845 2.16119C169.659 0.269696 157.712 2.37517 148.208 13.5078C137.999 25.4671 132.844 36.9538 142.157 50.4053C155.237 69.2989 161.889 91.959 171.91 112.602C183.844 137.186 192.922 168.086 192.922 195.642C192.922 208.453 191.937 215.117 179.895 221.361C150.767 236.464 128.615 205.804 108.957 190.515C95.3976 179.968 86.5628 177.396 87.0205 160.005C87.7843 130.982 132.187 117.317 154.428 113.61C169.49 111.1 179.434 112.336 192.586 119.662C201.953 124.879 210.446 126.093 220.658 129.075C234.76 133.193 248.859 137.251 263.019 141.178C270.933 143.373 285.505 151.9 293.949 148.406C300.409 145.733 298.61 122.506 298.74 117.308C299.018 106.194 298.824 95.0584 298.824 83.9408C298.824 63.2913 303.464 125.604 299.58 145.885C299.129 148.24 298.387 157.869 294.117 155.971C289.679 153.998 287.107 147.605 285.04 143.7C280.141 134.446 275.602 124.992 270.92 115.627C267.107 108.002 262.88 100.406 259.825 92.4298C258.907 90.0312 257.976 82.3809 257.976 84.9494C257.976 94.0493 259.226 102.208 261.002 111.089C261.957 115.862 264.028 130.245 264.028 125.377C264.028 118.321 260.24 111.841 256.799 105.878C255.97 104.44 249.959 94.9878 247.386 95.7917C241.627 97.5914 246.718 138.954 247.05 144.708C247.425 151.215 248.899 157.889 248.899 164.376C248.899 166.816 247.645 159.659 246.966 157.316C243.386 144.966 239.385 132.741 235.451 120.502C230.863 106.227 228.187 88.3891 219.566 75.7881C214.305 68.0992 216.004 87.3435 216.12 88.2273C218.567 106.993 227.066 125.285 227.718 144.204C227.726 144.436 228.006 149.743 227.046 148.911C219.53 142.397 212.523 134.4 205.866 127.058C195.902 116.069 187.527 103.905 176.617 93.7746C173.706 91.0714 182.502 119.328 183.677 122.015C187.922 131.726 193.435 140.487 189.224 123.528C186.444 112.329 173.739 80.1654 176.281 91.4212C179.26 104.614 208.684 153.799 214.943 118.821C215.384 116.355 217.932 102.478 214.943 101.255C207.567 98.2374 194.091 102.02 187.291 103.608C158.772 110.268 132.253 123.158 105.932 135.631C83.2237 146.392 60.7456 157.95 37.2635 166.981C27.8472 170.603 18.2417 173.857 8.09853 174.378C-7.68678 175.187 11.1737 160.218 15.4108 156.643C33.4081 141.458 54.2227 134.28 77.1868 129.748C121.326 121.036 166.801 121.874 211.497 124.452C259.365 127.214 306.693 134.624 354.464 138.236C383.529 140.435 412.515 140.204 441.623 139.749C452.237 139.583 471.252 142.894 449.187 135.043C393.238 115.134 337.171 96.2129 284.62 68.2237C280.966 66.2779 257.494 50.0464 253.437 54.1035C250.125 57.4158 253.078 68.1446 253.942 71.2494C258.814 88.756 269.029 104.174 278.148 119.662C285.156 131.564 291.806 143.671 298.992 155.466C301.925 160.282 298.387 157.498 296.134 155.971C292.764 153.686 289.438 151.866 285.88 149.919C285.438 149.677 280.002 145.357 279.829 145.549C278.513 147.011 295.561 172.554 298.824 175.302C301.02 177.152 300.018 169.579 299.664 166.729C298.625 158.351 297.024 150.035 295.798 141.682C292.11 116.558 323.658 156.621 323.03 156.307"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* SKILLS SECTION */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILLS LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
          </div>

          {/* EXPERIENCE SECTION */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
            >
              {/* EXPERIENCE LIST ITEM */}
              <ExperienceItem
                title="Senior JavaScript Engineer"
                description="Led web development projects, offering expertise in JavaScript frameworks."
                date="2024 - Present"
                company="Apple"
                isRightAligned={false}
              />
              <ExperienceItem
                title="Senior React Developer"
                description="I spearheaded React-based application development, leveraging advanced skills."
                date="2019 - 2024"
                company="Microsoft"
                isRightAligned={true} // Right-aligned
              />
              <ExperienceItem
                title="Freelancer"
                description="I provided web solutions, applying a range of technologies to address client requirements."
                date="2010 - 2019"
                company="Self-Employed"
                isRightAligned={false}
              />
            </motion.div>
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
