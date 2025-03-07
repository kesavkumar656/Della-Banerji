// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import InnerBanner from "@/components/InnerBanner";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

// IMAGES //
import DesktopBanner from "@/../public/img/Home/DesktopBanner.jpg";
import HomeAbout from "@/sections/HomeAbout";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import HomeReflection from "@/sections/HomeReflection";
import { useState } from "react";
import IntroScreen from "@/components/IntroScreen";
// DATA //

/** Home Page */
export default function HomePage() {
	const [showIntro, setShowIntro] = useState(true);
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Home"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.HomePage} `}>
				{showIntro && <IntroScreen onFinish={() => setShowIntro(false)} />}
				<InnerBanner
					gsap={gsap}
					ScrollTrigger={ScrollTrigger}
					desktopImage={DesktopBanner.src}
					bannerTitle={
						<>
							Towards a career
							<br /> that speaks to your soul
						</>
					}
					bannerDescription={"Scroll Down"}
				/>
				<HomeAbout gsap={gsap} ScrollTrigger={ScrollTrigger} />
				<HomeReflection gsap={gsap} ScrollTrigger={ScrollTrigger} />
			</main>

			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
