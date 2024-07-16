import { Header } from "@/components/about-us/header";
import Services from "@/components/about-us/services";
import Contact from "@/components/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}
