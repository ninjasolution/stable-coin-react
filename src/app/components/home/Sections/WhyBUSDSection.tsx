import * as React from 'react';
import HeadingTitle from '../../typography/HeadingTitle';
import ContentCard from '../../card/ContentCard';

export interface IWhyBusdProps {
    title:string
}

export default function WhyBusd (props: IWhyBusdProps) {
  return (
    <>
      <section className="my-5  md:mx-10 ">
          <div className="flex flex-col sm:gap-20 mt-5 space-y-4">
            <div className="sm:px-10 px-4 ">
              <HeadingTitle title={props.title} />
            </div>

            <ContentCard
              title="Upholding High Standards that Build Trust"
              description="BUSD is fully regulated by a primary prudential regulator - the New York State Department of Financial Services (NYDFS), offering the highest level of consumer protection. All reserves are held 100% in cash and cash equivalents; hence customer funds are always available for 1:1 redemption."
              image="/section_side.png"
              button={"Learn more"}
            />

            <ContentCard
              title="Fully Segregated Assets"
              description="With fully segregated bankruptcy-remote accounts, assets held in custody would be returned to their rightful owners even if the custodial trust became insolvent."
              image="/content1.png"
              imageOrderClass="sm:order-2"
              button={"Learn more"}
            />

            <ContentCard
              title="Mass Adoption"
              description="BUSD is available on over 30 exchanges and has many popular use cases. Explore BUSD’s mass adoption and access your funds 24/7 with this blockchain-based solution for payment."
              image="/content2.png"
              button={"Learn more"}
            />
          </div>
        </section>
    </>
  );
}
