import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import Navigation from "./components/navigation";
import Banner from "./components/banner";
import Profile from "./components/profile";
import Footer from "./components/footer";
import Header from "./components/header";
import Portfolio from "./components/portfolio";
function App() {
    useEffect(() =>{
        Aos.init()
    }, [])
    return(
    <div>
        <Header/>
        <Banner/>
        <Profile/>
        <Portfolio/>
        <Footer/>
        <Navigation/>
    </div>
    )
}

export default App;
