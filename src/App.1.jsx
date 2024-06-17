import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Mission } from "./Components/Mission";
import { History } from "./Components/History";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

export function App() {

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/Mission" element={<Mission />} />
              <Route path="/History" element={<History />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />


            </Route>
          </Routes>
        </BrowserRouter>


      </div>
      <div>
        <Footer />
      </div>

    </>
  );
}
