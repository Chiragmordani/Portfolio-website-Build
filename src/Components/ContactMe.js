import React from "react";
import { FaArrowRight } from "react-icons/fa";
function ContactMe() {
	return (
		<div className="max-w-lg  w-full text-center pt-24 pb-10 m-auto ">
			<h1 className="text-2xl md:text-4xl hover:tooltip">
				Interested in Working Together?
			</h1>
			<a className="" href="mailto:c.mordani2000@gmail.com">
				<span className="mt-6 inline-block bg-black w-auto font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer ">
					<div className="flex flex-row  items-centers">
						<span className="mr-3 ">Get in Touch</span>
						<FaArrowRight color="white" className="m-auto" />
					</div>
				</span>
			</a>
		</div>
	);
}

export default ContactMe;
