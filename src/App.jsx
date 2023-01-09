import { Routes, Route } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Samples from "./pages/samples/Samples"

const App = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/samples" element={<Samples />} />
            </Routes>
            <Footer />
        </div>
    )
};

export default App;