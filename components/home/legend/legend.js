// >> Modules
import styles from './legend.module.scss';
import design from '@/styles/design_system.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';

import board from '@/public/board.png';
import legend1 from '@/public/legend1.png';
import legend2 from '@/public/legend2.png';
import legend3 from '@/public/legend3.png';

// >> Script
export default function Legend(props) {
	return (
		<div className={styles.section} id="About">
			<div className={styles.flowers}></div>
			<div className={styles.inside}>
				<div className={styles.board}>
					<Image
						src={board}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<Typography className={styles.title}>
					The Legend of CHUNK
				</Typography>
				<Typography className={styles.desc}>
					Dive into the tale of Chuck, the daring garden explorer, and
					how his fearless spirit mirrors the adventurous investor’s
					path in the cryptocurrency world.
				</Typography>
				<div className={styles.images}>
					<div className={styles.left}>
						<Image
							src={legend1}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
						<Typography>Wanted</Typography>
					</div>
					<div className={styles.center}>
						<Image
							src={legend2}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
						<Typography>Fruit Thief</Typography>
					</div>
					<div className={styles.right}>
						<Image
							src={legend3}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
						<Typography>Reward 50$</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}
