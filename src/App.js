import "./App.css";
import React, { useEffect } from "react";
import Card from "./Components/Card";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import ContactMe from "./Components/ContactMe";
import aos from "aos";
import "aos/dist/aos.css";
function App() {
	useEffect(() => {
		aos.init({
			once: true,
		});
	}, []);
	return (
		<div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
			<div data-aos="fade-down" data-aos-duraion="1000">
				<Card />
			</div>

			<div data-aos="fade-up" data-aos-duraion="1000" data-aos-delay="500">
				<About />
			</div>

			<Skills />
			<ContactMe />
			<Footer />
		</div>
	);
}

export default App;
