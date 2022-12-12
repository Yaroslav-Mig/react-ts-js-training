import React from 'react';
import './App.css';

import { User } from './06-callback/06';
import DeepCopy from './10-deep clone obj/10_1';


function App() {
	return <div className='App'>
		<User />
		<DeepCopy/>
	</div>;
}

export default App;