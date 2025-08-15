import NavBar from "@/Components/NavBar";
import Image from "next/image";
import HeroImage from "@/Assets/MainImage.png"
import AboutSection from "@/Components/AboutSection";

export default function Home() {
  return (
    <div> 
      <NavBar/>

      <div className="flex justify-center">
      <Image className=" flexw-[80%] h-[500px]" src={HeroImage} alt="Photography Hero Image"/>
      </div>

      <AboutSection />
    </div>
  );
}
