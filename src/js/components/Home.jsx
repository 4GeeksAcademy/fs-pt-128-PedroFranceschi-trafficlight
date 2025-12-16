import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [activeLight, setActiveLight] = useState("");

	// const glow = (color) => {
		
	// 	activeLight == color ? { 
	// 		boxShadow:`0 0 10px ${color},
	// 	 			   0 0 20px ${color},
	// 				   0 0 40px ${color}`,
	// 	} : {};

	// 	console.log(glow)
	// }

	return (
		<div className="mt-5">
			<div className="semaforo">
				<div
					id="green"
					// style={glow("green")}
					className={`luz ${activeLight === "green" ? "active-green" : ""}`}
					onClick={() => setActiveLight("green")}
				></div>

				<div
					id="yellow"
					// style={glow("yellow")}
					className={`luz ${activeLight === "yellow" ? "active-yellow" : ""}`}
					onClick={() => setActiveLight("yellow")}
				></div>

				<div
					id="red"
					// style={glow("red")}
					className={`luz ${activeLight === "red" ? "active-red" : ""}`}
					onClick={() => setActiveLight("red")}
				></div>
			</div>
		</div>
	);
};

export default Home;