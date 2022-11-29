import React from "react";
import instagramSvg from "../../assets/instagramSvg.svg";
import facebookSvg from "../../assets/facebookSvg.svg";
import twitterSvg from "../../assets/twitterSvg.svg";

function About() {
  document.title = "Fruits | About";
  return (
    <div className="flex flex-col lg:w-1/2 lg:mx-auto p-10 ">
      <div className="">
        <h1 className="font-bold text-xl">
          We aim to create a Victoria where everyone can enjoy better health and
          wellbeing.
        </h1>
        <br />
        <p className="text-base">
          The Victorian Health Promotion Foundation (VicHealth) is a pioneer in
          health promotion - the process of enabling people to increase control
          over and improve their health. Our primary focus is promoting good
          health and preventing chronic disease. We create and fund world-class
          interventions. We conduct vital research to advance Victoria's
          population health. We produce and support public campaigns to promote
          a healthier Victoria. We provide transformational expertise and
          insights to government. Of all the things we do, above all we seek to
          make health gains among Victorians by pre-empting and targeting
          improvements in health across our population, fostered within the
          day-to-day spaces where people spend their time, and with benefits to
          be enjoyed by all.
        </p>
      </div>

      <div>
        <h1 className="font-bold text-xl mt-5"> Strategic imperatives </h1>
        <br />
        <p>
          VicHealth's Action Agenda for Health Promotion focuses on five
          strategic imperatives with associated goals and three-year priorities.
        </p>
        <ul className="list-disc list-inside">
          <li className="my-2">spromoting healthy eating</li>
          <li className="my-2">sencouraging regular physical activity</li>
          <li className="my-2">spreventing tobacco use</li>
          <li className="my-2">spreventing harm from alcohol</li>
          <li className="my-2">simproving mental wellbeing</li>
        </ul>
      </div>

      <div>
        <h1 className="font-bold text-xl mt-5">
          Stakeholder engagement framework{" "}
        </h1>
        <br />
        <p>
          Strong working relationships with stakeholders are vital to ensure
          VicHealth can help Victorians live healthier, happier lives and that
          together we can support stakeholders to achieve our shared health
          promotion aims. VicHealth's Stakeholder Engagement Framework guides
          how we work with stakeholders, to both deliver on the VicHealth Action
          Agenda for Health Promotion, and support the health promotion goals of
          our partners. The Framework outlines our commitment to open,
          collaborative, inclusive, respectful and meaningful engagement with
          our stakeholders. These key principles will guide our work and ensure
          we cultivate consistent, strong and effective relationships. A range
          of stakeholder feedback has informed and enhanced this Framework and
          our approach. To ensure we are delivering effectively against the
          Framework, we will be routinely reviewing our progress against the
          principles and objectives outlined.
        </p>
      </div>

      <div>
        <h1 className="font-bold text-xl mt-5"> Our overarching priorities</h1>
        <br />
        <p>
          Pinpointing and preventing the negative influences of ill health, and
          championing the positive influences on good health, is central and
          exclusive to our work. Our priorities support government objectives
          and relevant aspects of the Victorian Department of Health’s Public
          Health and Wellbeing Plan.
        </p>

        <ul className="list-disc list-inside">
          <li className="my-3">
            <strong>
              Our role as an independent statutory authority with multipartisan
              support
            </strong>
            We advise governments and complement and contribute to the efforts
            of various government portfolios.
          </li>
          <li className="my-3">
            <strong> A comprehensive, inclusive approach to health </strong> We
            focus on creating the conditions in which good health can flourish
            -from better public policy and healthy urban environments to more
            inclusive and respectful communities.
          </li>
          <li className="my-3">
            <strong>Our innovation </strong> We are able to take and absorb
            risks in ways that governments cannot. Our work is underpinned by
            robust evidence, and is integrated with evaluation, practice and
            dissemination.
          </li>
          <li className="my-3">
            <strong>Our partnerships </strong> We work in partnership with
            governments, organisations, communities and individuals in a broad
            range of sectors, including sport, recreation, community, urban
            planning, research, transport, local government, education, arts and
            business. We have a legislative mandate to allocate at least 30% of
            our appropriation to sports organisations.
          </li>
        </ul>
      </div>
      <br />

      <div className="flex flex-col lg:flex-row justify-between gap-4 m-auto cursor-pointer">
        <div className="flex w-52 h-10 border-2 border-sky-700">
          <div className="flex m-auto">
            <img className="h-6 mx-2" src={facebookSvg} />
            <span>Share on Facebook</span>
          </div>
        </div>
        <div className="flex w-52 h-10 border-2 border-red-500 cursor-pointer">
          <div className="flex m-auto">
            <img className="h-6  mx-2" src={instagramSvg} />
            <span>Share on Instagram</span>
          </div>
        </div>
        <div className="flex w-52 h-10 border-2 border-sky-500 cursor-pointer">
          <div className="flex m-auto">
            <img className="h-6  mx-2" src={twitterSvg} />
            <span>Share on Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
