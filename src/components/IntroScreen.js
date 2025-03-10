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

		// Logo Animation - Faster fade out
		timeline.to(logoRef.current, {
			delay: 1,
			opacity: 0,
			duration: 1, // Reduced to 1 second for faster transition
			onComplete: () => {
				if (logoRef.current) logoRef.current.style.display = "none";
				setVisible(true);
			},
		});

		// Text Animation - Appears quicker
		timeline.fromTo(
			textRef.current,
			{ y: "100px", opacity: 0, visibility: "visible" },
			{ y: "0px", opacity: 1, duration: 0.8 } // Faster text reveal
		);

		// Container Exit Animation - Faster movement
		timeline.to(containerRef.current, {
			y: "-100%",
			opacity: 0,
			delay: 0.5, // Slight delay for timing balance
			duration: 1.2, // Faster exit animation
			ease: "power2.inOut",
			onComplete: () => {
				if (containerRef.current) containerRef.current.style.display = "none";
				onFinish();
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
					<img src="/img/logo.png" loading="lazy" />
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
