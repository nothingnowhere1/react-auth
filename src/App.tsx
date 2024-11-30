import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authorization from './Authorization';
import Yep from './Yep';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path={'/'} Component={Authorization}/>
					<Route path={'yep'} Component={Yep}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
