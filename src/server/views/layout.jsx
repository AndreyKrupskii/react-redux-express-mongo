import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';

import config from './../../config';

class Layout extends Component {
	render() {
		return (
			<html>
				<head>
					<title>React app</title>
					<link rel="stylesheet" href={config.build.css}/>
					<meta charSet="utf-8" />
				</head>
				<body>
					<section id="app"></section>
				</body>
				<script type="application/javascript" src={config.build.js}></script>
			</html>
		)
	}
}

export default ReactDOMServer.renderToStaticMarkup(<Layout />);