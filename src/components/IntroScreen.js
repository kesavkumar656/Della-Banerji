// MODULES //
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

// STYLES //
import styles from "@/styles/components/IntroScreen.module.scss";

/** IntroScreen Component */
export default function IntroScreen({ onFinish }) {
	const [visible, setVisible] = useState(false);
	const [fadeOut, setFadeOut] = useState(false);
	const logoRef = useRef(null);
	const textRef = useRef(null);
	const containerRef = useRef(null);

	useEffect(() => {
		const timeline = gsap.timeline();

		// Step 1: Fade out the logo
		timeline.to(logoRef.current, {
			opacity: 0,
			delay: 1, // Start after 1s
			duration: 3,
			ease: "power2.out",
			onComplete: () => {
				if (logoRef.current) logoRef.current.style.display = "none";
				setVisible(true); // Set text visibility only after logo animation
			},
		});

		// Step 2: Fade in the text after the logo disappears
		timeline.fromTo(
			textRef.current,
			{ y: "100px", opacity: 0, visibility: "visible" },
			{ y: "0px", opacity: 1, duration: 2, ease: "power2.out" },
			"+=0.5" // Wait 0.5s after logo disappears before starting
		);

		// Step 3: Fade out the entire intro screen
		timeline.to(containerRef.current, {
			y: "-100%",
			opacity: 0,
			delay: 5, // Let the text stay for 3s before fading out
			duration: 1.5,
			ease: "power2.inOut",
			onComplete: () => {
				if (containerRef.current) containerRef.current.style.display = "none";
				onFinish(); // Call onFinish after animation
			},
		});
	}, [onFinish]);

	return (
		<div
			ref={containerRef}
			className={`${styles.intro} ${fadeOut ? styles.fadeOut : ""} bg_primary`}
		>
			<div className={styles.wrapper}>
				{/* Logo */}
				<div className={styles.logo} ref={logoRef} id="hide" style={{ opacity: 1 }}>
					<img  src="/img/logo.png" loading="lazy" />
				</div>

				{/* Text - Initially hidden */}
				<div
					ref={textRef}
					className={`${styles.textDiv} ${
						visible ? styles.show : styles.hide
					} color_white`}
					style={{ visibility: "hidden" }}
				>
					<p>Reimagining the path to success</p>
				</div>
			</div>
		</div>
	);
}
