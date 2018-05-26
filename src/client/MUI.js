import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';

export default class MUI extends React.Component {
	render() {
		return (
			<div>
				<Appbar/>
				<Container>
					<Button color="primary">button</Button>
				</Container>
			</div>
		);
	}
}

// ReactDOM.render(<MUI />, document.getElementById('example'));