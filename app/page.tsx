
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
      <InteractiveFAQ />
      <BusinessForSale />
      <CallToAction />
    </>
  );
}
