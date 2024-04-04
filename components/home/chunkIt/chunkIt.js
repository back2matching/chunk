// >> Modules
import styles from './chunkIt.module.scss';
import design from '@/styles/design_system.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';

import twitter from '@/public/twitter.png';
import telegram from '@/public/telegram.png';

// >> Script
export default function ChunkIt(props) {
	return (
		<div className={styles.section} id="Chunk It">
			<div className={styles.flowers}></div>

			<div className={styles.inside}>
				<Typography className={styles.title}>$CHUNK IT!</Typography>
			</div>

			<div className={styles.socials}>
				<a
					className={styles.oneSocial}
					href="https://twitter.com/ChunkOnSolana"
					target="_blank"
				>
					<Image
						src={twitter}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</a>
				<a
					className={styles.oneSocial}
					href="https://t.me/ChunkOnSolana"
					target="_blank"
				>
					<Image
						src={telegram}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</a>
			</div>
		</div>
	);
}
