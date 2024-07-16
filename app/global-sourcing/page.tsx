import Contact from "@/components/contact";
import Footer from "@/components/layout/footer";
import Services from "@/components/global-sourcng/services";
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
