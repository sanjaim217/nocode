import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const AchievementCard = ({ Achievement }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#111522",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={Achievement.date}
      iconStyle={{ background: Achievement.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={Achievement.icon}
            alt={Achievement.company_name}
            className="object-contain rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[#8eadff] text-[24px] font-bold">
          {Array.isArray(Achievement.title)
            ? Achievement.title.map((t, i) => <div key={i}>{t}</div>)
            : Achievement.title}
        </h3>
        {/* <p
          className="text-white text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {Achievement.company_name}
        </p> */}
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {Achievement.points.map((point, index) => (
          <li
            key={`Achievement-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
            {Achievement.credential && Achievement.credential[index] && (
              <div className="my-2">
                <a
                  href={Achievement.credential[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200"
                >
                  View Credential
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Achievement = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have Achieved so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Achievements.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={`Achievement-${index}`}
              Achievement={achievement}
            />
          ))}
        </VerticalTimeline>
      </div>
      
      <span id="skills"></span>
    </>
  );
};

export default SectionWrapper(Achievement, "achievements");
