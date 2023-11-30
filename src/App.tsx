import About from "./components/about/Index"
import BackTop from "./components/backTop/Index"
import Footer from "./components/footer/Index"
import Section1 from "./components/section1/Index"
import Section2 from "./components/section2/Index"
import Whatsapp from "./components/whatsapp/Index"

import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init();

  return (
    <>
      <main>
        <Section1 />
        <Section2 />
        <Whatsapp />
        <BackTop />
        <About />
      </main>

      <Footer />

    </>
  )
}

export default App
