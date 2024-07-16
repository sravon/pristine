import Contact from "@/components/contact";
import Footer from "@/components/layout/footer";
import { Annotation } from "@/components/testing/annotation";
import { Header } from "@/components/testing/header";

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
