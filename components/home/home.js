// >> Modules
import styles from './home.module.scss';

import Nav from './nav/nav';
import Hero from './hero/hero';
import Legend from './legend/legend';
import Economics from './economics/economics';
import Milestones from './milestones/milestones';
import ChunkIt from './chunkIt/chunkIt';
import Footer from './footer/footer';

// >> Script
export default function Home() {
	return (
		<div className={styles.page}>
			<div className={styles.heroBg} id="Home">
				<Nav />
				<video
					src="./heroBg.mp4"
					autoPlay
					loop
					muted
					playsInline
					className={styles.videoDiv}
				></video>

				<Hero />
			</div>

			<Legend />
			<Economics />
			<Milestones />
			<ChunkIt />
			<Footer />
		</div>
	);
}
