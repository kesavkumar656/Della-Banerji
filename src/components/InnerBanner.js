// MODULES //

// COMPONENTS //

// STYLES //
import styles from "@/styles/components/InnerBanner.module.scss";

// PLUGINS //

// IMAGES //
import DefaultBanner from "@/../public/img/banner/defaultDesktopBanner.jpg";
import DefaultBannerMob from "@/../public/img/banner/defaultMobileBanner.jpg";

// UTILS //

/** Inner Banner component */
function InnerBanner({
	desktopImage,
	bannerTitle,
	bannerDescription,
	mobileImage,
}) {
	return (
		<div className={`${styles.inner_banner_wrap} `}>
			{/* Banner Image */}
			<div className={`${styles.banner_image} next_image`}>
				<picture>
					<source
						srcSet={desktopImage ? desktopImage : DefaultBanner.src}
						media="(min-width:767px)"
					/>
					<img
						src={mobileImage ? mobileImage : DefaultBannerMob.src}
						alt="mobileImage"
					/>
				</picture>
			</div>
			{/* Banner Content */}
			<div className={`${styles.banner_content}`}>
				<div className="container text_center  ">
					<h1 className="text_300 color_white text_2xl">{bannerTitle}</h1>
					<p className="text_300 text_uppercase color_white text_2xs ">
						{bannerDescription}
					</p>
				</div>
			</div>
		</div>
	);
}

export default InnerBanner;
