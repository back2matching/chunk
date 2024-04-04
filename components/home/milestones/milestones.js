// >> Modules
import styles from './milestones.module.scss';
import design from '@/styles/design_system.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';

import milestones1 from '@/public/milestones/milestones1.png';
import milestones2 from '@/public/milestones/milestones2.png';
import milestones3 from '@/public/milestones/milestones3.png';
import milestones4 from '@/public/milestones/milestones4.png';

import flower from '@/public/flower.svg';
import bgStripe1 from '@/public/bgStripe1.svg';
import bgStripe2 from '@/public/bgStripe2.svg';
import bgStripe3 from '@/public/bgStripe3.svg';

// >> Script
export default function Milestones(props) {
	return (
		<div className={styles.section} id="Roadmap">
			<div className={styles.flowers}></div>
			<div className={styles.flower1}>
				<Image
					src={flower}
					alt=""
					quality={99}
					priority={true}
					className="image"
				/>
			</div>
			<div className={styles.flower2}>
				<Image
					src={flower}
					alt=""
					quality={99}
					priority={true}
					className="image"
				/>
			</div>
			<div className={styles.flower3}>
				<Image
					src={flower}
					alt=""
					quality={99}
					priority={true}
					className="image"
				/>
			</div>
			<div className={styles.bgStripe1}>
				<Image
					src={bgStripe1}
					alt=""
					quality={99}
					priority={true}
					className="image"
				/>
			</div>
			<div className={styles.bgStripe2}>
				<Image
					src={bgStripe2}
					alt=""
					quality={99}
					priority={true}
					className="image"
				/>
			</div>
			<div className={styles.bgStripe3}>
				<Image
					src={bgStripe3}
					alt=""
					quality={99}
					priority={true}
					className="image"
				/>
			</div>

			<div className={styles.inside}>
				<Typography className={styles.title}>
					CHUNK’s Milestones
				</Typography>
				<div className={styles.milestones}>
					<div className={styles.oneMilestone} data-value="left">
						<div className={styles.img}>
							<Image
								src={milestones1}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.texts}>
							<Typography className={styles.pointTitle}>
								Seed Sprouting:
							</Typography>
							<Typography className={styles.pointDesc}>
								Project Launch.
							</Typography>
						</div>
					</div>
					<div className={styles.oneMilestone} data-value="right">
						<div className={styles.img}>
							<Image
								src={milestones2}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.texts}>
							<Typography className={styles.pointTitle}>
								First Harvest:
							</Typography>
							<Typography className={styles.pointDesc}>
								Community Building.
							</Typography>
						</div>
					</div>
					<div className={styles.oneMilestone} data-value="left">
						<div className={styles.img}>
							<Image
								src={milestones3}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.texts}>
							<Typography className={styles.pointTitle}>
								Autumn Reap:
							</Typography>
							<Typography className={styles.pointDesc}>
								Partnership Developments.
							</Typography>
						</div>
					</div>
					<div className={styles.oneMilestone} data-value="right">
						<div className={styles.img}>
							<Image
								src={milestones4}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.texts}>
							<Typography className={styles.pointTitle}>
								Winter Prep:
							</Typography>
							<Typography className={styles.pointDesc}>
								Platform Enhancements.
							</Typography>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
