import React from 'react';
import './App.css';
import { splitIntoWord } from './01-tests/01';
import { User } from './06-callback/06';
import { ManComponent } from './07-destructuring/07';


function App() {
	return <div className='App'>
		<User />
		{/* <ManComponent/> */}
	</div>;
}

export default App;