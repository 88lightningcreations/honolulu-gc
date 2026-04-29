import AnimatedWhyChooseUs from "../components/AnimatedWhyChooseUs";
import Banner from "../components/Banner";
import BlogCarousel from "../components/BlogCarousel";
import CallToAction from "../components/CallToAction";
import CommitmentToQuality from "../components/CommitmentToQuality";
import CostEstimator from "../components/CostEstimator";
import InteractiveFAQ from "../components/InteractiveFAQ";
import InteractiveReviews from "../components/InteractiveReviews";
import OurServices from "../components/OurServices";

export default function Home() {
  return (
    <>
      <Banner>
        <CostEstimator />
      </Banner>
      <OurServices />
      <CommitmentToQuality />
      <AnimatedWhyChooseUs />
      <InteractiveReviews />
      <BlogCarousel />
      <InteractiveFAQ />
      <CallToAction />
    </>
  );
}
