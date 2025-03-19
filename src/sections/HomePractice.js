// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomePractice.module.scss";
import { useEffect, useRef } from "react";

// IMAGES //

// DATA //

/** HomePractice Section */
export default function HomePractice({ gsap, ScrollTrigger }) {
	const triggerRef = useRef(null);
	const drawRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: triggerRef.current,
				start: "top top",
				end: "+=1500",

				pin: true,
				pinSpacer: false,
				markers: false, // Removed markers for cleaner look
			},
		});

		// Get the length of the path
		const pathLength = drawRef.current.getTotalLength();

		// Set the initial stroke-dasharray and stroke-dashoffset
		gsap.set(drawRef.current, {
			strokeDasharray: pathLength,
			strokeDashoffset: pathLength,
		});

		// Animate the stroke-dashoffset to create the draw effect
		tl.to(drawRef.current, {
			strokeDashoffset: 0,
			duration: 1, // Adjust duration for desired speed
			ease: "linear",
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
						width="344"
						height="143"
						viewBox="0 0 344 143"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							ref={drawRef}
							d="M8 70C8.43064 71.7226 18.5445 60.6466 20.1111 59.5556C28.2519 53.886 37.1914 50.3667 46.9444 48.6111C79.8894 42.681 118.55 54.2033 146.889 70.4444C166.27 81.5517 182.316 97.5286 201.556 108.889C209.203 113.404 217.647 118.963 226.222 121.556C233.313 123.699 241.362 123 248.667 123C273.327 123 298.897 122.008 316.333 102.167C332.028 84.3076 341.773 58.6341 338.222 34.7222C335.225 14.5387 317.563 11.3759 300.222 8.77778C285.364 6.55164 270.612 6 255.611 6C244.634 6 233.489 5.69256 222.667 7.88889C165.189 19.5541 132.297 74.3077 99.7778 117.667C91.8183 128.279 84.6828 136.464 70.5556 137.222C50.4523 138.301 33.3197 131.914 18.2222 118.444C7.15894 108.574 7.00328 90.168 6 76.3333C5.26619 66.2145 5 56.1359 5 46"
							stroke="black"
							strokeWidth="10"
							strokeLinecap="round"
						/>
					</svg>
				</div>
			</div>
		</section>
	);
}
