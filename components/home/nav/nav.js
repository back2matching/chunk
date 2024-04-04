// >> Modules
import styles from './nav.module.scss';
import design from '@/styles/design_system.module.scss';
import { Link } from 'react-scroll';
import Image from 'next/image';

import navImg from '@/public/navImg.png';

// >> Script
export default function Nav(props) {
	return (
		<div className={styles.section}>
			<div className={styles.topImg}>
				<Image
					src={navImg}
					alt=""
					quality={99}
					priority={true}
					className="image"
				/>
			</div>
			<div className={styles.inside}>
				<Link to="About" className={styles.oneCenter}>
					ABOUT
				</Link>
				<Link to="Economics" className={styles.oneCenter}>
					ECONOMICS
				</Link>
				<Link to="Roadmap" className={styles.oneCenter}>
					ROADMAP
				</Link>
			</div>
		</div>
	);
}
