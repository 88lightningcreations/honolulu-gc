'use client';

import dynamic from 'next/dynamic';
import LazyLoad from '@/components/LazyLoad';
import { faqs } from '@/app/lib/homepage-faqs';
import OurServices from "../components/OurServices";
import CommitmentToQuality from "../components/CommitmentToQuality";

// All heavy components are dynamically imported here, inside the client boundary
const AnimatedWhyChooseUs = dynamic(() => import("../components/AnimatedWhyChooseUs"));
const BlogCarousel = dynamic(() => import("../components/BlogCarousel"));
const CallToAction = dynamic(() => import("../components/CallToAction"));
const InteractiveFAQ = dynamic(() => import("../components/InteractiveFAQ"));
const InteractiveReviews = dynamic(() => import("../components/InteractiveReviews"));
const NowHiring = dynamic(() => import("../app/homepage/NowHiring"));
const BusinessForSale = dynamic(() => import("../components/BusinessForSale"));

export default function HomepageSections() {
  return (
    <>
      <OurServices />
      <CommitmentToQuality />
      <LazyLoad><NowHiring /></LazyLoad>
      <LazyLoad><AnimatedWhyChooseUs /></LazyLoad>
      <LazyLoad><InteractiveReviews /></LazyLoad>
      <LazyLoad><BlogCarousel /></LazyLoad>
      <LazyLoad><InteractiveFAQ faqs={faqs} /></LazyLoad>
      <LazyLoad><BusinessForSale /></LazyLoad>
      <LazyLoad><CallToAction /></LazyLoad>
    </>
  );
}
