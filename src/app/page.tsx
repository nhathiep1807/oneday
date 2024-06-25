import AboutUs from "@components/components/homepage/AboutUs";
import Benefit from "@components/components/homepage/Benefit";
import BookAppointment from "@components/components/homepage/BookAppointment";
import HeadHunting from "@components/components/homepage/HeadHunting";
import IntroSection from "@components/components/homepage/IntroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <IntroSection />
      <AboutUs />
      <Benefit />
      <HeadHunting />
      <BookAppointment />
    </div>
  );
}
