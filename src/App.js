import { useRef } from "react";
import Aboutme from "./sections/Aboutme";
import Contactform from "./sections/Contactform";
import Footer from "./sections/Footer";
import Header from "./sections/header";
import Mywork from "./sections/Mywork";
import QNA from "./sections/QNA";

function App() {
  let workRef = useRef(null);
  let contactRef = useRef(null);

  const executeScrollOnWork = () => workRef.current.scrollIntoView();
  const executeScrollOnContact = () => contactRef.current.scrollIntoView();

  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (/Android/.test(ua)) {
      return "android";
    }
    return "desktop";
  };
  return (
    <div className="App">
      <Header
        getDeviceType={getDeviceType}
        workRef={workRef}
        contactRef={contactRef}
        executeScrollOnWork={executeScrollOnWork}
        executeScrollOnContact={executeScrollOnContact}
      ></Header>
      <Aboutme
        executeScrollOnWork={executeScrollOnWork}
        executeScrollOnContact={executeScrollOnContact}
      ></Aboutme>

      <Mywork workRef={workRef}></Mywork>
      <QNA></QNA>
      <Contactform contactRef={contactRef}></Contactform>
      <Footer></Footer>
    </div>
  );
}

export default App;
