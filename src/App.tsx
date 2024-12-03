import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authorization from './Authorization';
import Yep from './Yep';
import Authorization2 from './Authorization2';
import { Blok1 } from './Blok1';
import { Blok2 } from './Blok2';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path={'/blok1'} Component={Blok1}/>
					<Route path={'/blok2'} Component={Blok2}/>
					<Route path={'/authorization'} Component={Authorization}/>
					<Route path={'/authorization2'} Component={Authorization2}/>
					<Route path={'yep'} Component={Yep}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
