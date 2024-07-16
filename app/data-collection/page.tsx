import { Header } from "@/components/data-collection/header";
import Contact from "@/components/contact";
import { Annotation } from "@/components/data-collection/annotation";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Annotation/>
      <Contact/>
      <Footer/>
    </div>
  );
}
