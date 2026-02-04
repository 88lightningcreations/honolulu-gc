import Banner from '../components/Banner';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import RecentWork from '../components/RecentWork';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <WhyChooseUs />
      <RecentWork />
      <Reviews />
      <FAQ />
    </main>
  );
}
