import React from "react";
import { Helmet } from "react-helmet";

import Countries from "../../components/Countries";
function Home() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Get a Quote</title>
			</Helmet>
			<div className="container bg-gray-100 shadow p-10 w-full">
				<form>
					<Countries />
				</form>
			</div>
		</div>
	);
}

export default Home;
