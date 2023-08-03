import * as React from "react";
import HeadingTitle from "../components/typography/HeadingTitle";
import ContentCard from "../components/card/ContentCard";

export interface IWorkingAtSectionProps {}

export default function WorkingAtSection(props: IWorkingAtSectionProps) {
  return (
    <div className="flex flex-col   justify-center py-16 space-y-10 sm:px-10">
      {/* <h1 className=" text-start text-[50px] mb-10 ">Our Mission</h1> */}

      <div className="px-10">
        <HeadingTitle
          title="Working with Regulators"
          noLink={true}
          className="md:hidden lg:block"
        />
      </div>
      <ContentCard
        title="Working with Regulators"
        description="With fully segregated bankruptcy-remote accounts, assets held in custody would be returned to their rightful owners even if the custodial trust became insolvent."
        image="/content1.png"
        imageOrderClass="float-left"
        button="User Protection"
        titleClass="hidden md:block lg:hidden"
      />
    </div>
  );
}
