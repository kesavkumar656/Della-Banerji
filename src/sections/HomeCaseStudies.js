// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeCaseStudies.module.scss";
import { useEffect, useRef } from "react";

// IMAGES //

// DATA //

/** HomeCaseStudies Section */
export default function HomeCaseStudies({ gsap, ScrollTrigger }) {
	const content3Ref = useRef(null);
	const triggerRef = useRef(null);
	const LineOneRef = useRef(null);
	const LineTwoRef = useRef(null);
	const LineThreeRef = useRef(null);
	const LineFourRef = useRef(null);
	const LineOneBTNRef = useRef(null);
	const LineTwoBTNRef = useRef(null);
	const LineThreeBTNRef = useRef(null);
	const LineFourBTNRef = useRef(null);
	const LineSVGRef = useRef(null);
	const TextRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: triggerRef.current,
				start: "top top",
				end: "+=1500",
				scrub: 2,
				pin: true,
				pinSpacer: false,
				markers: true,
			},
		});

		gsap.set(LineSVGRef.current, {
			// opacity: 0,
			position: "absolute",
			left: "50%",
			bottom: "50%",
			xPercent: -50,
			yPercent: 61,
		});

		tl
			.to(LineSVGRef.current, {
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: "power2.out",
			})

			.to(LineSVGRef.current, {
				opacity: 0,
				y: 100,
				duration: 0.6,
				ease: "power2.in",
			});

		tl
			.to(LineOneRef.current, {
				x: -200,
				y: -100,
				width: "100px",
				height: "100px",
				opacity: 1,
				ease: "power2.out",
			})
			.to(LineTwoRef.current, {
				x: -50,
				y: -300,
				width: "100px",
				height: "100px",
				opacity: 1,
				ease: "power2.out",
			})
			.to(LineThreeRef.current, {
				x: 50,
				y: -300,
				width: "100px",
				height: "100px",
				opacity: 1,
				ease: "power2.out",
			})
			.to(LineFourRef.current, {
				x: 200,
				y: -100,
				width: "100px",
				height: "100px",
				opacity: 1,
				ease: "power2.out",
			})
			.fromTo(
				TextRef.current,
				{ opacity: 0, y: 100 },
				{
					opacity: 1,
					y: 0,
					ease: "power3.out",
					duration: 1,
				}
			)
			.to(LineOneBTNRef.current, {
				rotate: 0,
				opacity: 1,
				delay: 2,
			})
			.to(LineTwoBTNRef.current, { opacity: 1, delay: 1, rotate: 0 })
			.to(LineThreeBTNRef.current, { opacity: 1, delay: 1, rotate: 0 })
			.to(LineFourBTNRef.current, { opacity: 1, delay: 1, rotate: 0 });

		gsap.to(content3Ref.current, {
			y: -200,
			ease: "power2.out",
			scrollTrigger: {
				trigger: triggerRef.current,
				start: "top top",
				end: "+=1100",
				scrub: true,
			},
		});

		return () => {
			tl.kill();
		};
	}, []);

	return (
		<section
			ref={triggerRef}
			className={`${styles.HomeCaseStudies} section_spacing`}
		>
			<div className="container">
				<div className={styles.wrapper}>
					<img
						ref={LineSVGRef}
						className={styles.SVG}
						src="/img/Home/LinesSVG.svg"
						loading="lazy"
					/>
					<div>
						<div className={styles.LineOne} ref={LineOneRef}>
							<div className={styles.Line1BTN} ref={LineOneBTNRef}>
								<img src="/img/Home/sun.svg" loading="lazy" />
							</div>
						</div>
					</div>

					<div>
						<div className={styles.LineTwo} ref={LineTwoRef}>
							<div className={styles.Line2BTN} ref={LineTwoBTNRef}>
								<img src="/img/Home/nav.svg" loading="lazy" />
							</div>
						</div>
					</div>

					<div>
						<div className={styles.LineThree} ref={LineThreeRef}>
							<div className={styles.Line3BTN} ref={LineThreeBTNRef}>
								<img src="/img/Home/chair.svg" loading="lazy" />
							</div>
						</div>
					</div>

					<div>
						<div className={styles.LineFour} ref={LineFourRef}>
							<div className={styles.Line4BTN} ref={LineFourBTNRef}>
								<img src="/img/Home/people.svg" loading="lazy" />
							</div>
						</div>
					</div>

					<div className={styles.ButtonDiv}></div>
					<div className={styles.AbsoluteDiv}>
						<div className={styles.RelativeDiv}>
							<div ref={TextRef}>
								<h1 className="color_primary text_300 text_2xl">
									Stories of real success
								</h1>
								<p className="text_reg color_text text_300">
									{
										"Explore the stories of those who've navigated similar journeys before you, offering insights and inspiration for your own path."
									}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
