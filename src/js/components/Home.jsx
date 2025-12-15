import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [activeLight, setActiveLight] = useState("verde");

	const glow = (color) => {
		activeLight == color ? { 
			boxShadow:`0 0 10px ${color},
		 			   0 0 20px ${color},
					   0 0 40px ${color}`,
		} : {};
	}

	return (
		<div className="mt-5">
			<div className="semaforo">
				<div
					id="verde"
					style={glow("green")}
					className={`luz ${activeLight === "verde" ? "active" : ""}`}
					onClick={() => setActiveLight("verde")}
				></div>

				<div
					id="amarillo"
					style={glow("yellow")}
					className={`luz ${activeLight === "amarillo" ? "active" : ""}`}
					onClick={() => setActiveLight("amarillo")}
				></div>

				<div
					id="rojo"
					style={glow("red")}
					className={`luz ${activeLight === "rojo" ? "active" : ""}`}
					onClick={() => setActiveLight("rojo")}
				></div>
			</div>
		</div>
	);
};

export default Home;