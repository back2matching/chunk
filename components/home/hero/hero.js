// >> Modules
import styles from './hero.module.scss';
import design from '@/styles/design_system.module.scss';

// >> Script
export default function Hero(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<h1 className={styles.title}>$CHUNK</h1>
			</div>
		</div>
	);
}
