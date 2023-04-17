import "./App.scss";

import {
  About,
  Header,
  Testimonials,
  Footer,
  Skills,
  Work,
  GithubStats,
} from "./container";
import { Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <GithubStats />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
