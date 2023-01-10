import React from "react";
import {
	SiAdobephotoshop,
	SiAdobeaftereffects,
	SiAdobexd,
	SiAdobepremierepro,
	SiAdobeillustrator,
} from "react-icons/si";
import { ReactComponent as Maya } from "../Resources/maya.svg";
import { ReactComponent as Subs } from "../Resources/substance-painter.svg";
import { ReactComponent as Nuke } from "../Resources/nuke.svg";
import sh from "../Resources/sh.png";
import { FaArrowRight } from "react-icons/fa";
function Skills() {
	return (
		<div className="max-w-4xl mx-auto justify-center py-2 " id="tech">
			<p className="text-black text-2xl text-center md:text-4xl">
				Softwares I Use
			</p>
			<div className="flex flex-wrap justify-center pt-2">
				<Skill
					Icon={SiAdobeillustrator}
					name="Adobe Illustrator"
					color="db8b00"
				/>
				<Skill Icon={SiAdobephotoshop} name="Adobe Photoshop" color="29dcff" />
				<Skill
					Icon={SiAdobeaftereffects}
					name="Adobe After Effects"
					color="aa9532"
				/>
				<Skill Icon={SiAdobexd} name="Adobe XD" color="f06ef2" />
				<Skill
					Icon={SiAdobepremierepro}
					name="Adobe Premiere Pro"
					color="0000bd"
				/>

				<div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
					{" "}
					<Maya className="mx-auto text-4xl w-10 h-9" />
					<p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
						Maya{" "}
					</p>
				</div>
				<div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
					{" "}
					<Subs className="mx-auto text-4xl w-10 h-10" />
					<p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
						Substance Painter{" "}
					</p>
				</div>
				<div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
					{" "}
					<Nuke className="mx-auto text-4xl w-10 h-10" />
					<p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
						Nuke{" "}
					</p>
				</div>
				<div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
					{" "}
					<img src={sh} alt="" className="mx-auto text-4xl w-14 h-14" />
					<p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
						Fusion{" "}
					</p>
				</div>
			</div>

			<div className="flex justify-center">
				<a className="" href="https://resume.io/r/blgmBoLZr">
					<span className="mt-16 inline-block bg-blue-400 w-auto font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer ">
						<div className="flex flex-row  items-centers">
							<span className="mr-3 ">My Resume</span>
							<FaArrowRight color="white" className="m-auto" />
						</div>
					</span>
				</a>
			</div>

			<div className="flex justify-center">
				<a
					className=""
					href="https://chiragmordani1102.artstation.com/"
				>
					<span className="mt-16 inline-block bg-yellow-400 w-auto font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer ">
						<div className="flex flex-row  items-centers">
							<span className="mr-3 ">ArtStation</span>
							<FaArrowRight color="white" className="m-auto" />
						</div>
					</span>
				</a>
			</div>
		</div>
	);
}

function Skill({ Icon, name, color }) {
	return (
		<div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
			{" "}
			<Icon color={color} className="mx-auto text-4xl" />
			<p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
				{name}
			</p>
		</div>
	);
}

export default Skills;
