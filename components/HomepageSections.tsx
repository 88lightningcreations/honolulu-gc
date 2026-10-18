'use client';

import dynamic from 'next/dynamic';
import LazyLoad from '@/components/LazyLoad';
import { faqs } from '@/app/lib/homepage-faqs';

// All heavy components are dynamically imported here, inside the client boundary
const AnimatedWhyChooseUs = dynamic(() => import("../components/AnimatedWhyChooseUs"));
const BlogCarousel = dynamic(() => import("../components/BlogCarousel"));
const CallToAction = dynamic(() => import("../components/CallToAction"));
const CommitmentToQuality = dynamic(() => import("../components/CommitmentToQuality"));
const InteractiveFAQ = dynamic(() => import("../components/InteractiveFAQ"));
const InteractiveReviews = dynamic(() => import("../components/InteractiveReviews"));
const OurServices = dynamic(() => import("../components/OurServices"));
const NowHiring = dynamic(() => import("../app/homepage/NowHiring"));
const BusinessForSale = dynamic(() => import("../components/BusinessForSale"));

export default function HomepageSections() {
  return (
    <>
      <LazyLoad><OurServices /></LazyLoad>
      <LazyLoad><CommitmentToQuality /></LazyLoad>
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
