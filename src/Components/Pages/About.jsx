import React from "react";
import { Timeline } from "../utilities/Timeline";

import CompanyLogo from "../../assets/about/Company2024/logo.png";
import tyss01 from "../../assets/about/Company2024/tyss01.png";
import tyss02 from "../../assets/about/Company2024/tyss02.png";
import elp from "../../assets/about/Company2024/elp.png";
import qsp from "../../assets/about/Company2024/qsp.png";

import studyNotion from "../../assets/Projects/FullStack/studyNotion.png";
import cara from "../../assets/Projects/React/cara.png";
import countryGuide from "../../assets/Projects/React/countryGuide.png";
import GoToTop from "../utilities/GoToTop";

const About = () => {
  let firstJob = [
    {
      src: CompanyLogo,
      alt: "Company Logo",
    },
    {
      src: tyss01,
      alt: "startup template",
    },
    {
      src: tyss02,
      alt: "startup template",
    },
    {
      src: elp,
      alt: "startup template",
    },
  ];

  let internship = [
    {
      src: qsp,
      alt: "internship Company : qspider",
    },
    {
      src: studyNotion,
      alt: "full stack project : study Notion",
    },
    {
      src: cara,
      alt: "Cara Clothing website",
    },
    {
      src: countryGuide,
      alt: "country guide website",
    },
  ];

  let projectNames = [
    {
      href: "https://www.elp.qspider.com",
      name: "StudyNotion - Ed tech platform",
    },
    {
      href: "https://www.elp.qspider.com",
      name: "Cara Clothing Website",
    },
    {
      href: "https://www.elp.qspider.com",
      name: "Country Guide",
    },
    {
      href: "https://www.elp.qspider.com",
      name: "Razor pay website",
    },
    {
      href: "https://www.elp.qspider.com",
      name: " Discord server website",
    },
    {
      href: "https://www.elp.qspider.com",
      name: " Traveling Agency Landing page",
    },
  ];

  const data = [
    {
      title: "First Job",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-lg text-neutral-200 ">
            Joined
            <a
              href="https://www.testyantraglobal.com/"
              className="border-b px-1"
            >
              TestYantra Pvt. Ltd.
            </a>
            as an <span className="border-b">Associate Software Engineer</span>
            on September 9th 2024, marking the start of my professional journey.
          </p>
          <ul className="text-sm flex flex-col gap-3 mb-4">
            <li>
              ✅ Improve Frontend Skills and built multiple components of client
              projects by utilizing them that are handled by our team.
            </li>
            <li>
              ✅ Work on
              <a
                href="https://www.elp.qspider.com"
                className="bg-secondary px-2 py-1/2 border-b rounded-2xl inline-block mx-2 "
              >
                ELP Qspider
              </a>
              Website that is a Platform like a leetcode for a web developer.
            </li>
            <li>
              ✅ Mostly Work with React, Tailwind, JavaScript , TypeScript and
              Firebase and motion
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            {firstJob.map((val) => {
              return (
                <img
                  key={val.src}
                  src={val.src}
                  alt={val.alt}
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-contain bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              );
            })}
          </div>
        </div>
      ),
    },
    {
      title: "Internship",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-lg text-neutral-200">
            I Join my 6 months long Internship and Training Program in
            <a
              href="https://www.qspiders.com"
              target="_blank"
              className="bg-secondary px-2 py-1/2 border-b rounded-2xl inline-block mx-1"
            >
              Qspider
            </a>
            Noida - Feb to Aug 2024
          </p>
          <ul className="text-sm flex flex-col gap-3 mb-4">
            <li>
              ✅ Improve Mern Stack web development Skills and built multiple
              Projects by utilizing HTML, CSS, TailwindCSS, JavaScript, React
              JS, Node Js, Express JS and MongoDb.
            </li>
            <li className="flex flex-wrap gap-y-3">
              ✅ Projects Like
              {projectNames.map((val) => {
                return (
                  <a
                    key={val.href}
                    href={val.href}
                    className="bg-secondary px-2 py-1/2 border-b rounded-2xl inline-block mx-2 "
                  >
                    {val.name}
                  </a>
                );
              })}
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            {internship.map((val) => {
              return (
                <img
                  key={val.src}
                  src={val.src}
                  alt={val.alt}
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-56"
                />
              );
            })}
          </div>
        </div>
      ),
    },

    {
      title: "B.Tech",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal md:text-lg text-neutral-200">
            I pursued my B.Tech in Computer Science and Engineering (2020–2024)
            from Aligarh College of Engineering and Technology (ACET), Aligarh,
            Uttar Pradesh.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip flex cursor-none">
      <GoToTop />
      <Timeline data={data} />
    </div>
  );
};

export default About;
