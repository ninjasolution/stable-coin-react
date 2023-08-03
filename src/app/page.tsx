
import PopularCaseCard from "./components/card/PopularCaseCard";
import BusdCard from "./components/home/BusdCard";
import LogoSlider from "./components/home/LogoSlider";
import FaqSection from "./components/home/FaqSection";
import MediaAssetsSection from "./components/home/Sections/MediaAssetsSection";
import ContactUsSection from "./components/home/Sections/ContactUsSection";
import AttestationSection from "./components/home/Sections/AttestationSection";
import ReserveSection from "./components/home/Sections/ReserveSection";
import WhyBusd from "./components/home/Sections/WhyBUSDSection";
import ActionCardSection from "./components/home/Sections/ActionCardSection";
import BreakTitleSection from "./components/home/Sections/BreakTitleSection";
import SectionOfTitles from "./components/home/Sections/SectionOfTitles";
import LandingSection from "./components/home/Sections/LandingSection";
import SideNav from "./components/Navbar/SideNav";
export default function Home() {
  
  return (
    <main className=" min-h-screen bg-yallow_50 text-black_100 ">
  
      <div>
       <LandingSection/>
        {/* Titles */}
        
        <SectionOfTitles/>

       <BreakTitleSection
       title="As of Jus 23,2023"
       />

     

        {/* Action Card Section */}
        <ActionCardSection/>
        {/* why Busd */}
        <WhyBusd
        title="Why BUSD"
        />

        {/* Reserve Breakdown Section */}
        
       <ReserveSection
       title={"Monthly BUSD Reserve Breakdown"}
       />
        
        <AttestationSection
        title="Attestation Report"
        />
        <FaqSection/>
        <PopularCaseCard />

           {/* LogoSlider */}
         <LogoSlider/>

        <BusdCard />

        <MediaAssetsSection
        title="Media Assets"
        description="Visit BUSD Brand Guide to download BUSD logos and other media assets."
        btnText="Visit the BUSD Brand Guide"
        />
        <ContactUsSection
        title="Contact Us"
        description="Disclaimer: BUSD is issued on Ethereum by Paxos and regulated by the NYDFS. Binance provides the pegged token service to lock BUSD on Ethereum and issues an equivalent amount of Binance-peg BUSD on other networks. Check out the proof of assets (proof of collateral for B-tokens) for more details. Please note that Binance-Peg BUSD is a Binance product. It is not issued by Paxos nor regulated yet by the NYDFS."
        btnText="Link"
        email="busd@binance.com"
        />
        
      </div>
    </main>
  );
}
