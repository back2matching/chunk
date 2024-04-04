// >> Modules
import styles from './footer.module.scss';
import design from '@/styles/design_system.module.scss';
import { Typography } from '@mui/material';

// >> Script
export default function Footer(props) {
	return (
		<div className={styles.section}>
			<div className={styles.flowers}></div>
			<div className={styles.inside}>
				<Typography className={styles.left}>
					$CHUNK: A playful shitcoin adventure. No real value, just
					pure groundhog chaos. Dig in at your own risk!
				</Typography>
				{/* <div className={styles.right}>
					<a
						href="https://google.com"
						target="_blank"
						className={styles.oneRight}
					>
						Terms And Conditions
					</a>
					<a
						href="https://google.com"
						target="_blank"
						className={styles.oneRight}
					>
						Privacy Policy
					</a>
				</div> */}
			</div>
		</div>
	);
}
