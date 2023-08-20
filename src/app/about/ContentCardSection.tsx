import * as React from "react";
import ContentCard from "../components/card/ContentCard";

export interface IContentCardSectionProps {}

export default function ContentCardSection(props: IContentCardSectionProps) {
  return (
    <>
      <div className="flex  justify-center py-10 sm:py-24">
        <ContentCard
          title="Working with Regulators"
          description="With fully segregated bankruptcy-remote accounts, assets held in custody would be returned to their rightful owners even if the custodial trust became insolvent."
          image="/content1.png"
          imageOrderClass="order-1"
          button="User Protection"
          imageFloat="left" // Float the image to the left on small devices
        />
      </div>
      <div className="flex  justify-center py-24">
        <ContentCard
          title="Working with Regulators"
          description="With fully segregated bankruptcy-remote accounts, assets held in custody would be returned to their rightful owners even if the custodial trust became insolvent."
          image="/section_side.png"
          imageOrderClass="order-1"
          button="User Protection"
        />
      </div>
    </>
  );
}
