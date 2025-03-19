import styles from "@/styles/sections/HomePractice.module.scss";
import { useEffect, useRef } from "react";

/** HomePractice Section */
export default function HomePractice({ gsap, ScrollTrigger }) {
	const triggerRef = useRef(null);
	const drawRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const path = drawRef.current;
		if (!path) return;

		const pathLength = path.getTotalLength(); // Get the full path length

		// Set initial styles
		gsap.set(path, {
			strokeDasharray: pathLength,
			strokeDashoffset: pathLength,
		});

		// GSAP timeline with scroll trigger
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: triggerRef.current,
				start: "top center",
				end: "top 30%",
				scrub: 2,
				markers: false,
			},
		});

		tl.to(path, {
			strokeDashoffset: 0,
			duration: 3,
			ease: "power2.out",
		});

		return () => {
			tl.kill();
		};
	}, [gsap, ScrollTrigger]);

	return (
		<section ref={triggerRef} className={styles.HomePractice}>
			<div className="container">
				<div className={styles.wrapper}>
					<svg
						width="383"
						height="207"
						viewBox="0 0 383 207"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							ref={drawRef}
							d="M9.19299 156.07C-0.323663 148.456 10.3875 126.24 14.8941 118.145C21.2988 106.64 28.9903 96.8328 40.6731 90.3829C52.684 83.7519 78.5245 72.2781 92.231 77.9892C115.255 87.5825 130.903 111.575 152.465 124.342C171.678 135.718 187.561 153.678 204.394 168.34C239.107 198.573 304.669 188.776 339.486 163.63C370.48 141.245 377.287 119.849 377.287 83.5664C377.287 52.3742 358.103 28.8362 329.199 17.012C301.353 5.62025 262.221 3.40563 232.28 7.09698C208.296 10.0539 189.205 31.2725 178.491 51.2187C163.836 78.5036 154.114 101.465 148.003 131.53C144.584 148.352 147.057 182.81 130.28 193.995C115.612 203.773 96.3134 200.687 79.5894 200.687C72.8696 200.687 65.9896 199.958 59.7594 197.217C55.2631 195.239 52.9762 190.831 48.1093 189.533C34.754 185.971 15.8856 159.138 15.8856 144.915"
							stroke="black"
							strokeWidth="10"
							strokeLinecap="round"
						/>
					</svg>

					{/* <svg
						width="344"
						height="143"
						viewBox="0 0 344 143"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
						
							d="M8 70C8.43064 71.7226 18.5445 60.6466 20.1111 59.5556C28.2519 53.886 37.1914 50.3667 46.9444 48.6111C79.8894 42.681 118.55 54.2033 146.889 70.4444C166.27 81.5517 182.316 97.5286 201.556 108.889C209.203 113.404 217.647 118.963 226.222 121.556C233.313 123.699 241.362 123 248.667 123C273.327 123 298.897 122.008 316.333 102.167C332.028 84.3076 341.773 58.6341 338.222 34.7222C335.225 14.5387 317.563 11.3759 300.222 8.77778C285.364 6.55164 270.612 6 255.611 6C244.634 6 233.489 5.69256 222.667 7.88889C165.189 19.5541 132.297 74.3077 99.7778 117.667C91.8183 128.279 84.6828 136.464 70.5556 137.222C50.4523 138.301 33.3197 131.914 18.2222 118.444C7.15894 108.574 7.00328 90.168 6 76.3333C5.26619 66.2145 5 56.1359 5 46"
							stroke="black"
							strokeWidth="10"
							strokeLinecap="round"
						/>
					</svg> */}
				</div>
			</div>
		</section>
	);
}

// // MODULES //

// // COMPONENTS //

// // SECTIONS //

// // PLUGINS //

// // UTILS //

// // STYLES //
// import styles from "@/styles/sections/HomePractice.module.scss";
// import { useEffect, useRef } from "react";

// // IMAGES //

// // DATA //

// /** HomePractice Section */
// export default function HomePractice({ gsap, ScrollTrigger }) {
// 	const triggerRef = useRef(null);
// 	const drawRef = useRef(null);

// 	useEffect(() => {
// 		gsap.registerPlugin(ScrollTrigger);

// 		const tl = gsap.timeline({
// 			scrollTrigger: {
// 				trigger: triggerRef.current,
// 				start: "top top",
// 				end: "+=1500",

// 				pin: true,
// 				pinSpacer: false,
// 				markers: false, // Removed markers for cleaner look
// 			},
// 		});

// 		// Get the length of the path
// 		// const pathLength = drawRef.current.getTotalLength();

// 		// Set the initial stroke-dasharray and stroke-dashoffset
// 		gsap.set(drawRef.current, {
// 			strokeDasharray: 0,
// 			strokeDashoffset: 500,
// 		});

// 		// Animate the stroke-dashoffset to create the draw effect
// 		tl.to(drawRef.current, {
// 			strokeDashoffset: 0,
// 			duration: 1, // Adjust duration for desired speed
// 			ease: "linear",
// 		});

// 		return () => {
// 			tl.kill();
// 		};
// 	}, [gsap, ScrollTrigger]);

// 	return (
// 		<section ref={triggerRef} className={styles.HomePractice}>
// 			<div className="container">
// 				<div className={styles.wrapper}>
// 					{/* <svg
// 						width="344"
// 						height="143"
// 						viewBox="0 0 344 143"
// 						fill="none"
// 						xmlns="http://www.w3.org/2000/svg"
// 					>
// 						<path
// 							ref={drawRef}
// 							d="M8 70C8.43064 71.7226 18.5445 60.6466 20.1111 59.5556C28.2519 53.886 37.1914 50.3667 46.9444 48.6111C79.8894 42.681 118.55 54.2033 146.889 70.4444C166.27 81.5517 182.316 97.5286 201.556 108.889C209.203 113.404 217.647 118.963 226.222 121.556C233.313 123.699 241.362 123 248.667 123C273.327 123 298.897 122.008 316.333 102.167C332.028 84.3076 341.773 58.6341 338.222 34.7222C335.225 14.5387 317.563 11.3759 300.222 8.77778C285.364 6.55164 270.612 6 255.611 6C244.634 6 233.489 5.69256 222.667 7.88889C165.189 19.5541 132.297 74.3077 99.7778 117.667C91.8183 128.279 84.6828 136.464 70.5556 137.222C50.4523 138.301 33.3197 131.914 18.2222 118.444C7.15894 108.574 7.00328 90.168 6 76.3333C5.26619 66.2145 5 56.1359 5 46"
// 							stroke="black"
// 							strokeWidth="10"
// 							strokeLinecap="round"
// 						/>
// 					</svg> */}
// 					{/* <svg
// 						width="194"
// 						height="192"
// 						viewBox="0 0 194 192"
// 						fill="none"
// 						xmlns="http://www.w3.org/2000/svg"
// 					>
// 						<path
// 							ref={drawRef}
// 							d="M1 1C3.66667 50 9.4 149.6 11 156C13 164 11 -42 86 132C146 271.2 133 132 119 45C127 96.3333 153 190.4 193 156"
// 							stroke="black"
// 						/>
// 					</svg> */}

// 					<svg
// 						ref={drawRef}
// 						width="493"
// 						height="248"
// 						viewBox="0 0 493 248"
// 						fill="none"
// 						xmlns="http://www.w3.org/2000/svg"
// 					>
// 						<g id="Group 7">
// 							<path
// 								id="Vector 3"
// 								d="M74 5C75.2754 10.7392 75.3463 16.6651 76.5556 22.4444C82.5655 51.1684 91.581 79.1285 97.1667 108C105.782 152.532 111.085 198.046 117 243"
// 								stroke="black"
// 								stroke-width="10"
// 								stroke-linecap="round"
// 							/>
// 							<path
// 								id="Vector 4"
// 								d="M5 45C10.7993 43.7791 16.1632 41.6421 21.7778 39.7778C41.3336 33.284 61.3435 27.7317 81.4444 23.2222C115.969 15.4769 151.514 11.2033 186.889 11C196.259 10.9461 205.63 11 215 11C217.16 11 219.851 10.6414 222 11.2222C226.134 12.3395 227.221 17.5125 227 21.2222C226.238 33.9844 207.46 40.7654 198.111 45.2222C178.229 54.7001 158.081 65.9451 136.667 71.5555C118.474 76.3218 99.1932 75 80.5556 75C75.8837 75 67.7936 73.4709 64 76"
// 								stroke="black"
// 								stroke-width="10"
// 								stroke-linecap="round"
// 							/>
// 							<path
// 								id="Vector 5"
// 								d="M184 119C181.359 141.78 188.389 163.428 202.333 181.556C209.163 190.434 220.728 175.905 223.556 170.667C228.046 162.347 230.174 150.105 231.333 140.833C232.406 132.249 232 106.238 232 114.889C232 134.288 237.36 160.15 253 173.556C256.796 176.809 263.599 166.318 265 164.333C271.762 154.753 274.988 142.604 275.778 131C276.774 116.356 275.618 100.022 267.556 87.4445C263.924 81.78 261.115 78.7987 261 87.7778C260.945 92.0789 259.791 98.4833 265.556 98.9445C272.475 99.498 279.184 97.1552 284.778 93.2222C286.191 92.2287 289.257 88.701 291.222 90.6667C292.912 92.3567 294.424 97.0118 295 98.7778C297.659 106.938 299.622 115.341 302.111 123.556C307.521 141.409 315.115 158.346 321 176"
// 								stroke="black"
// 								stroke-width="10"
// 								stroke-linecap="round"
// 							/>
// 							<path
// 								id="Vector 6"
// 								d="M335 99C335.791 138.148 353.358 172.973 359.778 211.222C360.293 214.295 364.881 235.378 362.333 221C358.812 201.13 351.95 181.404 346.889 161.889C341.692 141.85 334.581 122.079 331 101.667C329.985 95.8827 328.058 88.7306 329.222 82.7778C330.496 76.2675 338.201 76.8766 343.444 77C360.442 77.4 371.234 98.8083 372.556 113.556C372.799 116.266 371.618 156.266 365.222 152.778C362.983 151.557 361.096 150.96 358.778 149.444C357.701 148.741 355.892 149.551 355 148.778C353.055 147.092 357.257 140.609 358 139"
// 								stroke="black"
// 								stroke-width="10"
// 								stroke-linecap="round"
// 							/>
// 							<path
// 								id="Vector 7"
// 								d="M404 95C396.458 99.6413 390.57 125.443 405 124C410.708 123.429 411.697 113.015 412.556 108.778C413.632 103.465 413.533 97.8443 408 96"
// 								stroke="black"
// 								stroke-width="10"
// 								stroke-linecap="round"
// 							/>
// 							<path
// 								id="Vector 8"
// 								d="M441 70C426.29 70 445.298 86.5855 447.889 89.5C450.89 92.8762 448.464 98.7854 445.333 100.944C440.535 104.254 434.658 105 429 105"
// 								stroke="black"
// 								stroke-width="10"
// 								stroke-linecap="round"
// 							/>
// 							<path
// 								id="Vector 9"
// 								d="M460 89C465.812 89 466.722 85.2216 467.944 79.7222C468.412 77.6184 468.82 69.6302 464.667 75.4444C462.447 78.5524 463.265 89.634 467.056 91.0556C473.887 93.6172 480.68 93 488 93"
// 								stroke="black"
// 								stroke-width="10"
// 								stroke-linecap="round"
// 							/>
// 						</g>
// 					</svg>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
