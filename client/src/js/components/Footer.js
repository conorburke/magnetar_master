import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'Center'
				}}
			>
				<span style={{ color: 'white' }}>
					Coming soon to the App Store and Google Play
				</span>
			</footer>
		);
	}
}

export default Footer;
