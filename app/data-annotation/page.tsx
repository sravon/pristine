import Contact from "@/components/contact";
import Services from "@/components/data-annotation/services";
import Footer from "@/components/layout/footer";
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
