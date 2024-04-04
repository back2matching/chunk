// >> Styles
import Head from 'next/head';

// >> Components
import Home from '@/components/home/home';

// >> Script
export default function Page(props) {
	// >> Render
	return (
		<>
			<Head>
				<title>$CHUNK</title>
			</Head>

			<div className="base">
				<Home />
			</div>
		</>
	);
}
