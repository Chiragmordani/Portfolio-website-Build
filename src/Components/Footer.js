import React from "react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
	return (
		<div className="py-5 border-t-3/2">
			<div className="flex justify-center mt-4 ">
				<a
					className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-whatsapp-green hover:bg-whatsapp-green rounded-full hover:text-white transition-colors duration-300 "
					href="https://wa.me/+917002071245"
				>
					<FaWhatsapp className="" />
					<span className="sr-only">WhatsApp</span>
				</a>
				<a
					className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300 "
					href="https://www.instagram.com/fusion_model_factory/"
				>
					<FaInstagram className="" />
					<span className="sr-only"> Instagram</span>
				</a>
				<a
					className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300 "
					href="https://www.linkedin.com/in/chirag1102/"
				>
					<FaLinkedinIn className="" />
					<span className="sr-only"> LinkedIn</span>
				</a>
				<a
					className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300 "
					href="mailto:c.mordani2000@gmail.com"
				>
					<SiGmail className="" />
					<span className="sr-only">E-mail</span>
				</a>
			</div>
			<div className="flex justify-center mt-4 ">
				<p className="text-black mb-4">
					Made with{" "}
					<span className="mr-2" role="link" aria-label="coffee">
						☕
					</span>
					by{" "}
					<a
						href="https://www.linkedin.com/in/chirag1102/"
						className="text-blue-500 underline"
					>
						Chirag Mordani
					</a>
				</p>
			</div>
			<div className="flex justify-center mt-4 ">
				<p className="text-black mb-4">
					
				</p>
			</div>
		</div>
	);
}

export default Footer;
