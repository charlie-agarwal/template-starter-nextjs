import { AccordionComponent } from "@/components/homepage/accordion-component";
// import BlogSample from "@/components/homepage/blog-samples";
import HeroSection from "@/components/homepage/hero-section";
// import MarketingCards from "@/components/homepage/marketing-cards";
import Pricing from "@/components/homepage/pricing";
// import SideBySide from "@/components/homepage/side-by-side";
import Features from "@/components/homepage/feature";
import HowItWorks from "@/components/homepage/how-it-works";
import CallToAction from "@/components/homepage/call-to-action";
import PageWrapper from "@/components/wrapper/page-wrapper";
import config from "@/config";

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center items-center w-full mt-[1rem] p-3">
        <HeroSection />
      </div>
      <div className="flex my-[8rem] w-full justify-center items-center">
        {/* <SideBySide /> */}
        <Features />
      </div>
      <div className="flex flex-col p-2 w-full justify-center items-center">
        {/* <MarketingCards /> */}
        <HowItWorks />
      </div>
      <div className="flex flex-col p-2 w-full justify-center items-center">
        {/* <BlogSample /> */}
        <CallToAction />
      </div>
      {(config.auth.enabled && config.payments.enabled) && <div>
        <Pricing />
      </div>}
      {/* <div className="flex justify-center items-center w-full my-[8rem]">
        <AccordionComponent />
      </div> */}
    </PageWrapper>
  );
}
