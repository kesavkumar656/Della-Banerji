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
	const CenterDiv = useRef(null);
	const content1Ref = useRef(null);
	const content2Ref = useRef(null);
	const content3Ref = useRef(null);
	const triggerRef = useRef(null);

	// useEffect(() => {
	// 	if (typeof window !== "undefined" && gsap && ScrollTrigger) {
	// 		const isDesktop = window.innerWidth > 1199;
	// 		const mainTl = gsap.timeline();

	// 		if (isDesktop) {
	// 			gsap.registerPlugin(ScrollTrigger);

	// 			mainTl
	// 				.fromTo(
	// 					"#LeftT",
	// 					{ opacity: 0, y: 100 }, // Start from below
	// 					{ opacity: 1, y: 0, duration: 1 },
	// 					"first"
	// 				)
	// 				.fromTo(
	// 					"#LeftB",
	// 					{ opacity: 0, y: 100 }, // Start from below
	// 					{ opacity: 1, y: 0, duration: 1 },
	// 					"second"
	// 				)
	// 				.fromTo(
	// 					"#RightT",
	// 					{ opacity: 0, y: 100 }, // Start from below
	// 					{ opacity: 1, y: 0, duration: 1 },
	// 					"third"
	// 				)
	// 				.fromTo(
	// 					"#RightB",
	// 					{ opacity: 0, y: 100 }, // Start from below
	// 					{ opacity: 1, y: 0, duration: 1 },
	// 					"fourth"
	// 				)
	// 				.fromTo(
	// 					"#CenterDiv",
	// 					{ opacity: 0, y: 50 }, // Start from below
	// 					{ opacity: 1, y: 0, duration: 1 },
	// 					{
	// 						opacity: 0.5,
	// 					},
	// 					"fourth"
	// 				);

	// 			ScrollTrigger.create({
	// 				animation: mainTl,
	// 				trigger: triggerRef.current,
	// 				start: "top center",
	// 				end: "bottom bottom",
	// 				scrub: 1,
	// 				// pin: true, // Keeps the section fixed
	// 				markers: true, // Remove in production
	// 			});
	// 		}
	// 	}
	// }, [gsap, ScrollTrigger]);
	///sdasd
	useEffect(() => {
		if (typeof window !== "undefined" && gsap && ScrollTrigger) {
			const isDesktop = window.innerWidth > 1199;
			const mainTl = gsap.timeline();

			if (isDesktop) {
				gsap.registerPlugin(ScrollTrigger);

				mainTl
					.fromTo(
						"#LeftT, #LeftB",
						{ opacity: 0, y: 100 },
						{ opacity: 1, y: 0, duration: 1, stagger: 0.3 }
					)
					.fromTo(
						"#RightB, #RightT",
						{ opacity: 0, y: 100 },
						{ opacity: 1, y: 0, duration: 1, stagger: 0.3 }
					)
					.fromTo(CenterDiv.current, {}, { opacity: 1 });

				ScrollTrigger.create({
					animation: mainTl,
					trigger: triggerRef.current,
					start: "top bottom",
					end: "bottom top", // Enough distance for a full forward animation
					scrub: 1,
					// pin: true,
					markers: true, // remove in production
					toggleActions: "play none none reverse",
				});
			}
		}
	}, [gsap, ScrollTrigger]);

	return (
		<section className={`${styles.HomeReflection} section_spacing`}>
			<div className="container">
				<div className={styles.wrapper} ref={triggerRef}>
					<div className={styles.centerDiv} id="CenterDiv" ref={CenterDiv}>
						<h1>The road from reflection to transformation</h1>
						<p>
							At the heart of Della’s transformative career coaching lies a fusion of
							empathy, analytical insight, and strategic foresight. With a deep
							understanding of organisational structures, roles, human psychology and
							systemic patterns, she embarks on a journey of collaboration with you to
							start your career transformation. This process involves self-discovery,
							skill development and strategic planning. It can be about changing jobs
							but it can also be about transforming yourself in your current position
							in order to grow and move up in an organisation.
						</p>
					</div>
					<div className={`${styles.LeftTop} ${styles.floatingDiv}`}>
						<div id="LeftT">
							<h2 className="text_lg text_400 color_white">Reflection Phase</h2>
							<p className="text_300 text_xs color_white">
								Understanding your professional identity involves delving into your
								personal motivators and barriers. Together, we will explore how you
								perceive your role, how others perceive you and the ways your values
								affect your professional journey.
							</p>
						</div>
					</div>
					<div className={`${styles.LeftBottom} ${styles.floatingDiv}`}>
						<div id="LeftB">
							<h2 className="text_lg text_400 color_white">Reflection Phase</h2>
							<p className="text_300 text_xs color_white">
								The strategy phase revolves around testing out these hypothetical roles
								and professions in order to build a framework and formulate a plan for
								implementation of your thoughts and ideas. Actual roles and
								organisations are discussed to provide practical examples of alternative
								career paths or roles. This may lead us to revise your resume or
								brainstorm specific applications as part of the overall plan, all of
								which fosters meaningful discussions, and deepens reflection.
							</p>
						</div>
					</div>

					<div className={`${styles.RightTop} ${styles.floatingDiv}`}>
						<div id="RightT">
							<h2 className="text_lg text_400 color_white">Reflection Phase</h2>
							<p className="text_300 text_xs color_white">
								During the exploration phase, those ideas, concepts, and aspirations are
								brainstormed. Building on the insights gained from self-reflection,
								further potential paths to success emerge and are explored, by examining
								hypothetical versions of new professional identities and narrowing them
								down to a preferred few to be examined in detail.
							</p>
						</div>
					</div>
					<div className={`${styles.RightBottom} ${styles.floatingDiv}`}>
						<div id="RightB">
							<h2 className="text_lg text_400 color_white">Reflection Phase</h2>
							<p className="text_300 text_xs color_white">
								As you transition from one role to another or one career to the next,
								ongoing reflection remains crucial. Transitioning to a new career
								demands a mindset shift, which we navigate together. This phase, though
								sometimes difficult and lengthy, can yield transformational insights. We
								will experiment, reflect, and refine together, ensuring alignment with
								your aspirations at every step. You will define and create new networks,
								build confidence in your new role and know what success looks like.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
