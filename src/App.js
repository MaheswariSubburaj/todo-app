import { React } from 'react';
import './App.scss';
import TextBox from './components/textbox';
import context from './core/context.js';

const App = () => {
	// eslint-disable-next-line no-console
	console.log(context.state);

	return <div className="App">
		<div>{ TextBox() }</div>
	</div>;
};

export default App;
