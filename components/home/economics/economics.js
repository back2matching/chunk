// >> Modules
import styles from './economics.module.scss';
import design from '@/styles/design_system.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';

import economics1 from '@/public/economics/economics1.png';
import economics2 from '@/public/economics/economics2.png';
import economics3 from '@/public/economics/economics3.png';
import economics4 from '@/public/economics/economics4.png';

// >> Script
export default function Economics(props) {
	return (
		<div className={styles.section} id="Economics">
			<div className={styles.flowers}></div>
			<div className={styles.video}>
				<video
					src="./economics.mp4"
					autoPlay
					loop
					muted
					playsInline
					className={styles.videoDiv}
				></video>
			</div>
			<div className={styles.inside}>
				<Typography className={styles.title}>
					Straight forward Garden Economics
				</Typography>
				<div className={styles.images}>
					<div className={styles.oneImg}>
						<Image
							src={economics1}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
						<Typography>100% Liquidity Burned</Typography>
					</div>
					<div className={styles.oneImg}>
						<Image
							src={economics2}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
						<Typography>Minting Revoked</Typography>
					</div>
					<div className={styles.oneImg}>
						<Image
							src={economics3}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
						<Typography>1 000 000 Supply</Typography>
					</div>
					<div className={styles.oneImg}>
						<Image
							src={economics4}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
						<Typography>Fair Launch</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}
