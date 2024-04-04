// >> Modules
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { useEffect, useState } from 'react';

// >> Aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// >> Styles
import '@/styles/variables.scss';
import '@/styles/fonts.css';
import '@/styles/globals.scss';

// >> Script
function MyApp({ Component, pageProps }) {
	// >> Variables
	const [loaded, setLoaded] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		setTimeout(() => {
			setLoaded(true);
		}, 2000);
	}, [loaded]);

	useEffect(() => {
		Aos.init({ duration: 700, once: true });
	}, []);

	// >> Render
	return (
		<StyledEngineProvider injectFirst>
			<CssBaseline />

			<Component {...pageProps} />

			<div className="pageLoader" data-visible={!loaded}>
				<div className="loader">
					<div className="normal"></div>
				</div>
				<div className="loader">
					<div className="fill" data-loading={loading}></div>
				</div>
			</div>
		</StyledEngineProvider>
	);
}

export default MyApp;
