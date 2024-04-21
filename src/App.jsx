import AccessSection from './components/AccessSection';
import Bottom from './components/BottomSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/FooterSection';
import HeroSection from './components/HeroSection';
import ReferencesSection from './components/ReferencesSection';
import SnippetsSection from './components/SnippetsSection';
import SuperchargeSection from './components/SuperchargeSection';

function App() {
  return (
    <>
      <HeroSection />
      <SnippetsSection />
      <FeaturesSection />
      <AccessSection />
      <SuperchargeSection />
      <ReferencesSection />
      <Bottom />
      <Footer />
    </>
  );
}

export default App;
