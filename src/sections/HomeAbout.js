"use client"; // Required for Next.js App Router

import { useEffect, useRef } from "react";

// STYLES //
import styles from "@/styles/sections/HomeAbout.module.scss";

// IMAGES //
import Image from "next/image";
import img1 from "@/../public/img/Home/HomeAbout.png";
import Lines from "@/../public/img/Home/CircleLines.png";

/** HomeAbout Section */
export default function HomeAbout({ gsap, ScrollTrigger }) {
	const content1Ref = useRef(null);
	const content2Ref = useRef(null);
	const content3Ref = useRef(null);
	const triggerRef = useRef(null);

	useEffect(() => {
		if (typeof window !== "undefined" && gsap && ScrollTrigger) {
			const isDesktop = window.innerWidth > 1199;
			const mainTl = gsap.timeline();

			if (isDesktop) {
				gsap.registerPlugin(ScrollTrigger);

				// Define animation timeline
				mainTl
					.from(
						"#Path_1, #Path_2, #Path_3, #Path_4, #Path_5, #Path_6",
						{
							opacity: 0,
						},
						"first"
					)
					.to(triggerRef.current, { y: 0 }, { y: -500 })
					.to("#Path_1", { opacity: 1 }, "second")
					.to("#Path_2", { opacity: 1 }, "third")
					.to("#Path_3", { opacity: 1 }, "forth")
					.to("#Path_4", { opacity: 1 }, "fifth")
					.to("#Path_5", { opacity: 1 }, "sixth")
					// .to("#Path_3, #Path_4", { opacity: 0.15 }, "second")
					// .fromTo(

					// 	{ x: 100, opacity: 0 },
					// 	{ x: 0, opacity: 1 },
					// 	"second"
					// )
					.to("#Path_5", { opacity: 1 }, "third")
					// .to("#Path_5, #Path_4", { opacity: 0.15 }, "third")
					.fromTo(
						content3Ref.current,
						{ x: 100, opacity: 0 },
						{ x: 0, opacity: 1 },
						"third"
					);
				gsap.to(triggerRef.current, {
					y: -100, // Adjust this value for more/less movement
					opacity: 1,
					scrollTrigger: {
						trigger: triggerRef.current,
						start: "top 80%", // When to start the animation
						end: "top 30%", // When to stop the animation
						scrub: true, // Smooth scrolling effect
						marker: true,
					},
				});
				// Initialize ScrollTrigger
				ScrollTrigger.create({
					animation: mainTl,
					trigger: triggerRef.current,
					start: "10px",
					toggleActions: "play none none none",
					end: "+=50px",
					duration: 2,
					// scrub: true,
					// pin: true,
					marker: true,
				});
			}
		}
	}, [gsap, ScrollTrigger]);

	return (
		<section className={`${styles.HomeAbout} section_spacing`}>
			<div className="container">
				<div className={styles.Wrapper} id="wrapper">
					<div className={styles.ImageDiv}>
						<Image src={img1} alt="Home About" loading="lazy" />
						<Image
							className={styles.lines}
							src={Lines}
							alt="Circle Lines"
							loading="lazy"
						/>
					</div>
					<div className={styles.contentDiv} ref={triggerRef}>
						<p className={`${styles.section_tag} color_primary text_300`}>
							About Della Banerji
						</p>
						<h1 className="text_2xl color_primary text_300">
							Let’s navigate the right career shift for you
						</h1>
						<p className="text_reg color_text text_300">
							Career success entails more than just ascending the corporate hierarchy -
							it includes finding joy and genuine satisfaction in what you do.
							<br />
							For more than 20 years, Della Banerji has collaborated with executives
							and organizations, focusing on career advancement and professional
							growth. She specializes in guiding individuals to refine their career
							paths, aligning them with their personal values. Leveraging executive
							coaching training from INSEAD and an MA from Cambridge University, Della
							catalyses transformative change, offering coaching to executives
							navigating career transitions.
						</p>
						<h2 className={`${styles.hiddenTxt} text_lg color_primary`}>
							<span id="Path_1">Most people</span>
							<span id="Path_2">do not take the time to think</span>
							<span id="Path_3">strategically about themselves</span>
							<span id="Path_4">
								or their career. This type of reflection pays huge dividends
							</span>
							<span id="Path_5">psychologically, personally, and professionally.</span>
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
}
