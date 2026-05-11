import AnimatedWhyChooseUs from "../components/AnimatedWhyChooseUs";
import Banner from "../components/Banner";
import BlogCarousel from "../components/BlogCarousel";
import BusinessForSale from "../components/BusinessForSale";
import CallToAction from "../components/CallToAction";
import CommitmentToQuality from "../components/CommitmentToQuality";
import InteractiveFAQ from "../components/InteractiveFAQ";
import InteractiveReviews from "../components/InteractiveReviews";
import JobPosting from "../components/JobPosting";
import OurServices from "../components/OurServices";

export default function Home() {
  return (
    <>
      <Banner />
      <OurServices />
      <CommitmentToQuality />
      <JobPosting />
      <AnimatedWhyChooseUs />
      <InteractiveReviews />
      <BlogCarousel />
      <InteractiveFAQ />
      <BusinessForSale />
      <CallToAction />
    </>
  );
}
