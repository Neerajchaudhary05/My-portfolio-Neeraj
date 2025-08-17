
import NavbarMain from './Components/navbar/NavbarMain';
import HeroMain from './Components/HeroSection/HeroMain';
import HeroGradient from './Components/HeroSection/HeroGradient';
import { SubHeroSection } from './Components/HeroSection/SubHeroSection';
import AboutMeMain from './Components/About Me Section/AboutMeMain';
import HelperSection from './Components/HelperSection';
import SkillsMain from './Components/SkillsSection/SkillsMain';
import { SubSkills } from './Components/SkillsSection/SubSkills';
import { ExperienceMain } from './Components/Experience Section/ExperienceMain';
import { Projectmain } from './Components/Project Section/Projectmain';
import { ContactMeMain } from './Components/Contact Me Section/ContactMeMain';
import { FooterMain } from './Components/Footer/FooterMain';



function App() {

  return (
    <main className='font-monospace'>
      <NavbarMain/>
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <Projectmain />
      <ContactMeMain />
      <FooterMain />
      {/* <HelperSection /> */}
    </main>
  )
}

export default App
