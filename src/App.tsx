import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authorization from './Authorization';
import Yep from './Yep';
import Authorization2 from './Authorization2';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path={'/'} Component={Authorization2}/>
					<Route path={'yep'} Component={Yep}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
