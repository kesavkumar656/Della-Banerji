// MODULES //
import { useEffect, useRef } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeKeyExpertise.module.scss";

// IMAGES //

// DATA //

/** HomeKeyExpertise Section */
export default function HomeKeyExpertise({ gsap, ScrollTrigger }) {
	const ContentDivRef = useRef(null);
	const triggerRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: triggerRef.current,
				start: "top top",
				end: "+=1000",
				scrub: true,
				pin: true,
				pinSpacer: false,
				markers: true,
			},
		});

		// Animate first set of spans
		tl;

		gsap.to(ContentDivRef.current, {
			y: -1000,
			ease: "power2.out",
			scrollTrigger: {
				trigger: triggerRef.current,
				start: "top top",
				end: "+=2000",
				scrub: true,
			},
		});
		return () => {
			tl.kill(); // Cleanup on unmount
		};
	}, []);

	return (
		<section
			ref={triggerRef}
			className={`${styles.HomeKeyExpertise} section_spacing`}
		>
			<div className="container-fluid">
				<div className={styles.wrapper}>
					{" "}
					<div className={styles.ImgDiv}>
						<img src="/img/Home/Img1.png" loading="lazy" />
					</div>
					<div ref={ContentDivRef} className={styles.ContentWrapper}>
						<div className={`${styles.section_tag} color_primary`}>Key Expertise</div>
						<h1 className="color_primary text_2xl text_300">
							Uniquely personalized advisory every step of the way
						</h1>
						<div className={styles.ContentDiv}>
							<img src="/img/Home/Icon1.png" loading="lazy" />
							<p className="color_primary text_reg text_400">
								Specialization in Career Transitions
							</p>
							<p>
								Our commitment is to offer personalised support to help you thrive in
								your career transition. Our distinctive approach sets us apart, catering
								to individuals dedicated to achieving success. With years of expertise,
								Della is your trusted partner.
							</p>
						</div>
						<div className={styles.ContentDiv}>
							<img src="/img/Home/Icon1.png" loading="lazy" />
							<p className="color_primary text_reg text_400">
								Specialization in Career Transitions
							</p>
							<p>
								Our commitment is to offer personalised support to help you thrive in
								your career transition. Our distinctive approach sets us apart, catering
								to individuals dedicated to achieving success. With years of expertise,
								Della is your trusted partner.
							</p>
						</div>
						<div className={styles.ContentDiv}>
							<img src="/img/Home/Icon1.png" loading="lazy" />
							<p className="color_primary text_reg text_400">
								Specialization in Career Transitions
							</p>
							<p>
								Our commitment is to offer personalised support to help you thrive in
								your career transition. Our distinctive approach sets us apart, catering
								to individuals dedicated to achieving success. With years of expertise,
								Della is your trusted partner.
							</p>
						</div>
						<div className={styles.ContentDiv}>
							<img src="/img/Home/Icon1.png" loading="lazy" />
							<p className="color_primary text_reg text_400">
								Specialization in Career Transitions
							</p>
							<p>
								Our commitment is to offer personalised support to help you thrive in
								your career transition. Our distinctive approach sets us apart, catering
								to individuals dedicated to achieving success. With years of expertise,
								Della is your trusted partner.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
