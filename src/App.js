import Aboutme from "./sections/Aboutme";
import Contactform from "./sections/Contactform";
import Footer from "./sections/Footer";
import Header from "./sections/header";
import Mywork from "./sections/Mywork";
import QNA from "./sections/QNA";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Aboutme></Aboutme>

      <Mywork></Mywork>
      <QNA></QNA>
      <Contactform></Contactform>
      <Footer></Footer>
    </div>
  );
}

export default App;
