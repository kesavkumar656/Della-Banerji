// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
// UTILS //

// STYLES //
import styles from "@/styles/components/IntroScreen.module.scss";

// IMAGES //

// DATA //

/** IntroScreen Component */
export default function IntroScreen({ onFinish }) {
	const [visible, setVisible] = useState(false);
	const [fadeOut, setFadeOut] = useState(false);
	useEffect(() => {
		setTimeout(() => setVisible(true), 6000);
	}, []);

	useEffect(() => {
		setTimeout(() => setFadeOut(true), 6000);
		setTimeout(onFinish, 1000000);
	}, [onFinish]);

	const logoRef = useRef(null);
	const ContainerRef = useRef(null);

	useEffect(() => {
		if (!visible) {
			gsap.to(logoRef.current, {
				opacity: 0,
				// Shrinks slightly while fading out
				// Slight rotation effect
				delay: 1,
				duration: 3,
				ease: "power2.out",
				onComplete: () => {
					if (logoRef.current) {
						logoRef.current.style.display = "none"; // Hide after animation
					}
				},
			});
			gsap.to(ContainerRef.current, {
				y: "-100%", // Moves up
				opacity: 0,
				delay: 5,
				duration: 1.5,
				ease: "power2.inOut",
				onComplete: () => {
					if (ContainerRef.current) {
						ContainerRef.current.style.display = "none";
					}
				},
			});
			gsap.to("#text", {
				y: "-100px",
				opacity: 1,
				delay: 0.5,
				duration: 3,
			});
		}
	}, [visible]);

	return (
		<div
			ref={ContainerRef}
			className={`${styles.intro} ${fadeOut ? styles.fadeOut : ""} bg_primary`}
		>
			<div className={styles.wrapper}>
				<div className={styles.logo} ref={logoRef} id="hide" style={{ opacity: 1 }}>
					<img src="/img/logo.png" loading="lazy" />
				</div>
				<div
					id="text"
					className={`${styles.textDiv} ${visible ? styles.show : styles.hide}`}
				>
					<p>Reimagening the path to success</p>
				</div>
			</div>
		</div>
	);
}
