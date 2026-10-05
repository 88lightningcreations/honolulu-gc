
import AnimatedWhyChooseUs from "../components/AnimatedWhyChooseUs";
import Banner from "../components/Banner";
import BlogCarousel from "../components/BlogCarousel";
import CallToAction from "../components/CallToAction";
import CommitmentToQuality from "../components/CommitmentToQuality";
import InteractiveFAQ from "../components/InteractiveFAQ";
import InteractiveReviews from "../components/InteractiveReviews";
import OurServices from "../components/OurServices";
import NowHiring from "./homepage/NowHiring";
import BusinessForSale from "../components/BusinessForSale";
import { faqs } from '@/app/lib/homepage-faqs';

export default function Home() {
  return (
    <>
      <Banner />
      <OurServices />
      <CommitmentToQuality />
      <NowHiring />
      <AnimatedWhyChooseUs />
      <InteractiveReviews />
      <BlogCarousel />
      <InteractiveFAQ faqs={faqs} />
      <BusinessForSale />
      <CallToAction />
    </>
  );
}
