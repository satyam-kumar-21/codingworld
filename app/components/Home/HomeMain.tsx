import Hero from "./Hero"
import YTSection from "./YTSection"
import CompanyScroll from "./CompanyScroll"
import Compare from "./Compare"
import Impact from "./Impact"
import NoteSureCourse from "./NoteSureCourse"
import Testinomials from "./Testinomials"
import YoutubeCourse from "./YoutubeCourse"
import FAQ from "./FAQ"
import TransformJourney from "./TransformJourney"
import CodingWorldText from "./CodingWorldText"

const HomeMain = () => {
  return (
   <>
   <Hero />
  <div className="defer-render"><YTSection /></div>
  <div className="defer-render"><CompanyScroll /></div>
  <div className="defer-render"><Impact /></div>
  <div className="defer-render"><NoteSureCourse /></div>
  <div className="defer-render"><Testinomials /></div>



  <div className="defer-render"><YoutubeCourse /></div>

  
  <div className="defer-render"><Compare /></div>
   <div className="defer-render"><FAQ /></div>

   <div className="defer-render"><TransformJourney /></div>

   <div className="defer-render"><CodingWorldText /></div>
   
   </>
  );
};

export default HomeMain;