import React from "react";
import { bottomSmall, delayTime, leftSmall, staggerTime, topSmall } from "@/animations/Animations";
import ChildrenWrapper from "./ChildrenWrapper";
import ParentWrapper from "./ParentWrapper";

function DetailElement({
  children,
  titleText,
}: {
  children: any;
  titleText: string;
}) {
  return (
    <div className="flex flex-col">
      <ChildrenWrapper  variants={leftSmall}>
        <h2 className="text-md">{titleText}</h2>
      </ChildrenWrapper>
      <ChildrenWrapper className="text-2xl font-bold" variants={leftSmall}>
        {children}
      </ChildrenWrapper>
    </div>
  );
}

function SocialLink({ titleText, href }: { titleText: string; href: string }) {
  return (
    <ChildrenWrapper  variants={leftSmall}>
      <a className="text-md link" target="_blank" href={href}>
        {titleText}
      </a>
    </ChildrenWrapper>
  );
}

export default function Left({ width }: { width: number }) {
  return (
    <ParentWrapper
      delayChildren={delayTime}
      staggerChildren={staggerTime}
      className="flex flex-col gap-8 sm:order-1 order-2  sm:pt-12"
      style={{ width: width }}>
      <div className={`flex flex-col gap-2 text-left`}>
        <ChildrenWrapper  variants={leftSmall}>
          <h1 className="font-bold text-3xl">Education</h1>
        </ChildrenWrapper>
        <DetailElement titleText="2023 - B.Sc. ">
          <p>Web</p><p>Development</p>
        </DetailElement>
      </div>
      <div className={`flex flex-col gap-2 text-left`}>
        <ChildrenWrapper variants={leftSmall}>
          <h1 className="font-bold text-3xl">Links</h1>
        </ChildrenWrapper>
        <SocialLink
          titleText="Linkedin"
          href="https://www.linkedin.com/in/sivertgullberghansen"
        />
        <SocialLink
          titleText="GitHub"
          href="https://github.com/SivertGullbergHansen"
        />
        <SocialLink
          titleText="ORCID"
          href="https://orcid.org/0000-0001-7555-2983"
        />
        <SocialLink titleText="Blog" href="https://blog.sivert.xyz" />
      </div>
    </ParentWrapper>
  );
}
