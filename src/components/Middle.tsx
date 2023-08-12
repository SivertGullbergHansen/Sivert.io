import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { bottom, right } from "@/animations/Animations";
import Link from "next/link";
import ChildrenWrapper from "./ChildrenWrapper";
import ParentWrapper from "./ParentWrapper";

import sivert from "./IMG_0147.JPG";

export default function Middle() {
  return (
    <ParentWrapper
      delayChildren={0}
      staggerChildren={0.1}
      className="sm:order-2 flex flex-col gap-12 items-center"
    >
      <motion.div
        layout
        className="cursor-grab active:cursor-grabbing
    md:w-[333px] md:max-w-[333px] md:min-w-[333px] md:h-[512px] w-[256px] max-w-[256px] min-w-[256px] h-[420px]
    "
        drag
        dragConstraints={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        dragElastic={0.5}
        dragTransition={{ bounceDamping: 20, bounceStiffness: 500 }}
        variants={bottom}
        transition={{ type: "spring", duration: 1 }}
      >
        <Image
          src={sivert}
          placeholder="blur"
          width={512}
          height={512}
          priority
          alt="Portrait photograph of Sivert"
          className="w-full h-full pointer-events-none rounded-full border-solid border-black border-2 object-cover"
        />
      </motion.div>
      <div className="flex flex-row w-0 justify-center gap-6 font-bold text-xl">
        <ChildrenWrapper variants={right}>
          <Link scroll={false} href="/about" className="btn btn-outline">
            About
          </Link>
          <Link scroll={false} href="/projects" className="btn btn-outline">
            Projects
          </Link>
          <Link
            scroll={false}
            href="https://blog.sivert.io"
            className="btn btn-outline"
          >
            Blog
          </Link>
        </ChildrenWrapper>
      </div>
    </ParentWrapper>
  );
}
