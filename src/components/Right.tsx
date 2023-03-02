import React from "react";
import {
  bottomSmall,
  delayTime,
  right,
  rightSmall,
  staggerTime,
  topSmall,
} from "@/animations/Animations";
import ParentWrapper from "./ParentWrapper";
import ChildrenWrapper from "./ChildrenWrapper";

function DetailElement({
  children,
  titleText,
}: {
  children: any;
  titleText: string;
}) {
  return (
    <div className="flex flex-col">
      <ChildrenWrapper variants={rightSmall}>
        <h2 className="text-md">{titleText}</h2>
      </ChildrenWrapper>
      <ChildrenWrapper  variants={rightSmall}>
        <h3 className="text-2xl font-bold">{children}</h3>
      </ChildrenWrapper>
    </div>
  );
}

function getAge(dateString: string) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default function Right({ width }: { width: number }) {
  return (
    <ParentWrapper
      delayChildren={delayTime}
      staggerChildren={staggerTime}
      className="flex flex-col gap-2 sm:text-right sm:pt-12 order-1 sm:order-3"
      style={{ width: width }}
    >
      <ChildrenWrapper variants={rightSmall}>
        <h1 className="font-bold text-3xl">Details</h1>
      </ChildrenWrapper>
      <div className="flex flex-col gap-8">
        <DetailElement titleText="Age">{getAge("1998/06/05")}</DetailElement>
        <DetailElement titleText="Nationality">Norwegian</DetailElement>
        <DetailElement titleText="Years of Experience">
          {getAge("2021/08/01")}
        </DetailElement>
      </div>
    </ParentWrapper>
  );
}
