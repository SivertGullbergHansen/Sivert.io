import { staggerTime, topSmall } from "@/animations/Animations";
import BackButton from "@/components/BackButton";
import ChildrenWrapper from "@/components/ChildrenWrapper";
import ParentWrapper from "@/components/ParentWrapper";
import { ProjectCard } from "@/components/ProjectCard";
import ThemeSwitch from "@/components/ThemeSwitcher";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function about() {
  return (
    <>
      <Head>
        <title>Sivert Gullberg Hansen - Projects</title>
      </Head>
      <ThemeSwitch />
      <main className="py-16 px-4 overflow-hidden lg:py-12 flex flex-col place-items-center">
        <ParentWrapper
          delayChildren={0}
          staggerChildren={staggerTime}
          className="prose lg:prose-xl max-w-6xl h-screen"
        >
          <motion.h1 variants={topSmall}>Projects</motion.h1>
          <div className="grid grid-cols-3 gap-6">
          <ChildrenWrapper variants={topSmall}>
            <ProjectCard type="Bachelor Thesis" link="swdg" title="Sustainable Web Design Guidelines" image="/project_1.jpg" />
            <ProjectCard type="Personal" link="gryt" title="Gryt" image="/project_2.jpg" />
            <ProjectCard type="School Assignment" link="oc" title="Office Coffee" image="/project_3.jpg" />
            <ProjectCard type="Personal" link="temai" title="TemAI" image="/project_4.jpg" />
            <ProjectCard type="School Assignment" link="em" title="Exam Matcher" image="/project_5.jpg" />
          </ChildrenWrapper>
          </div>
          <BackButton />
        </ParentWrapper>
      </main>
    </>
  );
}
