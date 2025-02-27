// MODULES //
import { useEffect, useRef } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeReflection.module.scss";

// IMAGES //

// DATA //

/** HomeReflection Section */
export default function HomeReflection({ gsap, ScrollTrigger }) {
	const triggerRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Timeline for sequential animations
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: triggerRef.current,
				start: "top top",
				end: "+=3000",
				scrub: true,
				pin: true, // Pins only the wrapper
				pinSpacer: false,
			},
		});

		tl
			.fromTo(
				"#LeftT",
				{ opacity: 0, y: 100 },
				{ opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
				{ x: 100, duration: 1.5, ease: "power2.out" }
			)
			.fromTo(
				"#LeftB",
				{ opacity: 0, y: 100 },
				{ opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
				"+=0.5",
				{ x: 100, duration: 1.5, ease: "power2.out" }
			) // Adds a slight delay
			.fromTo(
				"#RightT",
				{ opacity: 0, y: 100 },
				{ opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
				"+=0.5",
				{ x: 100, duration: 1.5, ease: "power2.out" }
			)
			.fromTo(
				"#RightB",
				{ opacity: 0, y: 100 },
				{ opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
				"+=0.5",
				{ x: 100, duration: 1.5, ease: "power2.out" }
			);

		return () => {
			tl.kill(); // Cleanup on unmount
		};
	}, []);

	return (
		<section
			ref={triggerRef}
			className={`${styles.HomeReflection} section_spacing`}
		>
			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.centerDiv} id="CenterDiv">
						<h1>The road from reflection to transformation</h1>
						<p>
							At the heart of Della’s transformative career coaching lies a fusion of
							empathy, analytical insight, and strategic foresight...
						</p>
					</div>
					<div className={`${styles.LeftTop} ${styles.floatingDiv}`}>
						<div id="LeftT">
							<h2 className="text_lg text_400 color_white">Reflection Phase</h2>
							<p className="text_300 text_xs color_white">
								Understanding your professional identity involves delving into your
								personal motivators and barriers...
							</p>
						</div>
					</div>
					<div className={`${styles.LeftBottom} ${styles.floatingDiv}`}>
						<div id="LeftB">
							<h2 className="text_lg text_400 color_white">Strategy Phase</h2>
							<p className="text_300 text_xs color_white">
								The strategy phase revolves around testing out these hypothetical
								roles...
							</p>
						</div>
					</div>

					<div className={`${styles.RightTop} ${styles.floatingDiv}`}>
						<div id="RightT">
							<h2 className="text_lg text_400 color_white">Exploration Phase</h2>
							<p className="text_300 text_xs color_white">
								During the exploration phase, those ideas, concepts, and aspirations...
							</p>
						</div>
					</div>
					<div className={`${styles.RightBottom} ${styles.floatingDiv}`}>
						<div id="RightB">
							<h2 className="text_lg text_400 color_white">Transition Phase</h2>
							<p className="text_300 text_xs color_white">
								As you transition from one role to another, ongoing reflection remains
								crucial...
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
