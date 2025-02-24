import { useEffect, useRef, useGSAP } from "react";

// STYLES //
import styles from "@/styles/sections/HomeAbout.module.scss";

// IMAGES //
import img1 from "@/../public/img/Home/HomeAbout.png";
import Lines from "@/../public/img/Home/CircleLines.png";

/** HomeAbout Section */
export default function HomeAbout({ gsap, ScrollTrigger }) {
	const contentRef = useRef(null);
	useEffect(() => {
		if (gsap && ScrollTrigger) {
			gsap.from(contentRef.current, {
				// opacity: 0,
				y: 100,
				duration: 4,
				ease: "power3.out",
				scrollTrigger: {
					trigger: contentRef.current,
					start: "top 80%",
					toggleActions: "play reverse",
				},
			});
		}
	}, [gsap, ScrollTrigger]);

	return (
		<section className={`${styles.HomeAbout} section_spacing`}>
			<div className="container">
				<div className={styles.Wrapper}>
					<div className={styles.ImageDiv}>
						<img src={img1.src} loading="lazy" />
						<img className={styles.lines} src={Lines.src} loading="lazy" />
					</div>
					<div ref={contentRef} className={styles.contentDiv}>
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
						<p className="text_lg color_primary">
							Most people do not take the time to think strategically about themselves
							or their career. This type of reflection pays huge dividends
							psychologically, personally, and professionally.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
