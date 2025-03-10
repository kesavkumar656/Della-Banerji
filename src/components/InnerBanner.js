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

	// useEffect(() => {
	// 	gsap.registerPlugin(ScrollTrigger);
	// 	const tl = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: triggerRef.current,
	// 			start: "top top",
	// 			end: "bottom bottom",
	// 			scrub: true,
	// 			pin: true, // Keep this for pinning
	// 			yoyo: true,
	// 			markers: true,

	// 			pinSpacer: true, // Ensure this is enabled (or just remove this line)
	// 		},
	// 	});

	// 	// Animate first set of spans
	// 	tl;

	// 	gsap.to(ImgRef.current, {
	// 		scale: 1.2,
	// 		ease: "power2.out",
	// 		scrollTrigger: {
	// 			trigger: triggerRef.current,
	// 			start: "top top",
	// 			end: "bottom bottom",
	// 			scrub: true,
	// 		},
	// 	});
	// 	gsap.fromTo(
	// 		bannerText.current,
	// 		{ y: 100, duration: 2 },
	// 		{ y: 0, duration: 2 },
	// 		{
	// 			scrollTrigger: {
	// 				delay: 5,
	// 				// scrub: true,
	// 				trigger: triggerRef.current,
	// 				start: "top center",
	// 			},
	// 		}
	// 	);
	// 	gsap.to(TextAnimationref.current, {
	// 		y: 50,
	// 		duration: 2,
	// 		repeat: -1,
	// 		yoyo: true,
	// 		ease: "power1.inOut",
	// 		scrollTrigger: {
	// 			trigger: triggerRef.current,
	// 			start: "top top",
	// 		},
	// 	});

	// 	return () => {
	// 		tl.kill(); // Cleanup on unmount
	// 	};
	// }, []);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Timeline for better control
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: triggerRef.current,
				start: "top top",
				end: "=+1000",
				scrub: 2, // Slower scrub for smoother scroll-based animation
				pin: true,
				markers: true,
				pinSpacer: true,
			},
		});

		// Image Zoom Animation
		gsap.to(ImgRef.current, {
			scale: 1.2,
			ease: "expo.out", // Smooth easing for natural movement
			scrollTrigger: {
				trigger: triggerRef.current,
				start: "top top",
				end: "bottom bottom",
				scrub: 2, // Smooth scrub speed
			},
		});

		// Text Fade-in Animation
		gsap.fromTo(
			bannerText.current,
			{ y: 100, opacity: 0 },
			{
				y: 0,
				delay: 4,
				opacity: 1,
				duration: 1.5,
				ease: "power3.out", // Strong ease-out for natural motion
				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top center",
				},
			}
		);

		// Text Bounce Effect
		gsap.to(TextAnimationref.current, {
			y: 30, // Reduced movement for subtle bounce
			duration: 1.5,
			repeat: -1,
			yoyo: true,
			ease: "power1.inOut", // Smooth looping effect
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
