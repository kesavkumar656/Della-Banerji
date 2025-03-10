// MODULES //
import gsap from "gsap";
// COMPONENTS //

// STYLES //
import styles from "@/styles/components/InnerBanner.module.scss";

// PLUGINS //

// IMAGES //
import DefaultBanner from "@/../public/img/banner/defaultDesktopBanner.jpg";
import DefaultBannerMob from "@/../public/img/banner/defaultMobileBanner.jpg";
import { useEffect, useRef } from "react";

// UTILS //

/** Inner Banner component */
function InnerBanner({
	desktopImage,
	bannerTitle,
	bannerDescription,
	mobileImage,
	gsap,
	ScrollTrigger,
}) {
	const ImgRef = useRef(null);
	const triggerRef = useRef(null);
	const TextAnimationref = useRef(null);
	const bannerText = useRef([]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: triggerRef.current,
				start: "top top",
				end: "bottom bottom",
				scrub: true,
				pin: true,
				markers: true,
				delay: 5,
			},
		});

		// Animate first set of spans
		tl;

		gsap.to(ImgRef.current, {
			scale: 1.2,
			ease: "power2.out",
			scrollTrigger: {
				trigger: triggerRef.current,
				start: "top top",
				// end: "+=1000",
				scrub: true,
			},
		});
		gsap.fromTo(
			bannerText.current,
			{ y: 100, duration: 2 },
			{ y: 0, duration: 2 },
			{
				scrollTrigger: {
					// scrub: true,
					trigger: triggerRef.current,
					start: "top center",
				},
			}
		);
		gsap.to(TextAnimationref.current, {
			y: 50,
			duration: 2,
			repeat: -1,
			yoyo: true,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: triggerRef.current,
				start: "top top",
			},
		});

		return () => {
			tl.kill(); // Cleanup on unmount
		};
	}, []);
	return (
		<div ref={triggerRef} className={`${styles.inner_banner_wrap} `}>
			{/* Banner Image */}
			<div className={`${styles.banner_image} next_image`}>
				<picture>
					<source
						srcSet={desktopImage ? desktopImage : DefaultBanner.src}
						media="(min-width:767px)"
					/>
					<img
						ref={ImgRef}
						src={mobileImage ? mobileImage : DefaultBannerMob.src}
						alt="mobileImage"
					/>
				</picture>
			</div>
			{/* Banner Content */}
			<div ref={bannerText} className={`${styles.banner_content}`}>
				<div className="container text_center  ">
					<div>
						<h1 className="text_300 color_white text_2xl">{bannerTitle}</h1>
						<p
							ref={TextAnimationref}
							className="text_300 text_uppercase color_white text_2xs "
						>
							{bannerDescription}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InnerBanner;
