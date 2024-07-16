import { Annotation } from "@/components/annotation";
import Contact from "@/components/contact";
import Services from "@/components/data-security/services";
import Footer from "@/components/layout/footer";
import { Header } from "@/components/header";
import Nav from "@/components/layout/nav";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}
