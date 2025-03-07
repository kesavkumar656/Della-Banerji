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
	const content3Ref = useRef(null);
	const triggerRef = useRef(null);
	const spansRef1 = useRef([]);
	const spansRef2 = useRef([]);
	const spansRef3 = useRef([]);

	useEffect(() => {
		if (typeof window !== "undefined" && gsap && ScrollTrigger) {
			const isDesktop = window.innerWidth > 1199;

			if (isDesktop) {
				gsap.registerPlugin(ScrollTrigger);

				// Pin the entire section
				ScrollTrigger.create({
					trigger: triggerRef.current,
					start: "top top",
					end: "+=1000", // Adjust this value based on animation duration
					pin: true,
					scrub: 1,
					markers: true, // Remove after testing
				});

				// Animate first set of spans
				gsap.fromTo(
					spansRef1.current,
					{ opacity: 0, y: 20 },
					{
						opacity: 1,
						y: 0,
						stagger: 0.5,
						ease: "power2.out",
						scrollTrigger: {
							trigger: triggerRef.current,
							start: "top 80%",
							end: "top 50%",
							toggleActions: "play none none none",
						},
					}
				);

				// Animate second set of spans
				gsap.fromTo(
					spansRef2.current,
					{ opacity: 0, y: 20 },
					{
						opacity: 1,
						y: 0,
						stagger: 0.5,
						ease: "power2.out",
						scrollTrigger: {
							trigger: triggerRef.current,
							start: "top 60%",
							end: "top 30%",
							toggleActions: "play none none none",
						},
					}
				);

				// Animate third set of spans
				gsap.fromTo(
					spansRef3.current,
					{ opacity: 0, y: 20 },
					{
						opacity: 1,
						y: 0,
						stagger: 0.5,
						ease: "power2.out",
						scrollTrigger: {
							trigger: triggerRef.current,
							start: "top 40%",
							end: "top 20%",
							toggleActions: "play none none none",
						},
					}
				);

				// Animate contentDiv separately
				gsap.fromTo(
					content3Ref.current,
					{ y: 0, opacity: 1 },
					{
						y: -100,
						opacity: 1,
						duration: 1,
						ease: "power2.out",
						scrollTrigger: {
							trigger: triggerRef.current,
							start: "top center",
							end: "bottom bottom",
							scrub: true,
						},
					}
				);
			}
		}
	}, [gsap, ScrollTrigger]);

	return (
		<section className={`${styles.HomeAbout} section_spacing`}>
			<div className="container">
				<div className={styles.Wrapper} ref={triggerRef} id="wrapper">
					<div className={styles.ImageDiv}>
						<img src={img1.src} alt="Home About" loading="lazy" />
						<img
							className={styles.lines}
							src={Lines.src}
							alt="Circle Lines"
							loading="lazy"
						/>
					</div>
					<div ref={content3Ref} className={styles.contentDiv}>
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
							navigating career transitions. Career success entails more than just
							ascending the corporate hierarchy - it includes finding joy and genuine
							satisfaction in what you do.
							<br />
							For more than 20 years, Della Banerji has collaborated with executives
							and organizations, focusing on career advancement and professional
							growth. She specializes in guiding individuals to refine their career
							paths, aligning them with their personal values. Leveraging executive
							coaching training from INSEAD and an MA from Cambridge University, Della
							catalyses transformative change, offering coaching to executives
							navigating career transitions.
						</p>
						<p>Most people do not take the time to think strategically .</p>
						<h2 className={`${styles.hiddenTxt} text_lg color_primary`}>
							{[
								"Most",
								"people",
								"do",
								"not",
								"take",
								"the",
								"time",
								"to",
								"time",
							].map((word, index) => (
								<span key={index} ref={(el) => (spansRef1.current[index] = el)}>
									{word}{" "}
								</span>
							))}{" "}
						</h2>
						<h2 className={`${styles.hiddenTxt} text_lg color_primary`}>
							{" "}
							{["think", "strategically", "about", "themselves", "or", "their"].map(
								(word, index) => (
									<span key={index} ref={(el) => (spansRef2.current[index] = el)}>
										{word}{" "}
									</span>
								)
							)}
						</h2>
						<h2 className={`${styles.hiddenTxt} text_lg color_primary`}>
							{["think", "strategically", "about", "themselves", "or", "their"].map(
								(word, index) => (
									<span key={index} ref={(el) => (spansRef3.current[index] = el)}>
										{word}
									</span>
								)
							)}
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
}
