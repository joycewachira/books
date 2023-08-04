import React, { useEffect, useState } from 'react';
import NavBar from './components/nav/Navbar';
import {
	Route,
	Router,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import { baseURL } from './constants';
import BestsellerPage from './pages/BestsellerPage';
import MyReads from './pages/MyReads';

const App = () => {
	useEffect(() => {
		fetch(baseURL)
			.then((res) => res.json())
			.then((data) => setBestSellers(data.results.books));
	}, []);

	const [bestsellers, setBestSellers] = useState([]);
	const [search, setSearch] = useState('');

	// console.log(bestsellers);

	const filteredBestSellers = bestsellers.filter((bestseller) =>
		bestseller.title.toLowerCase().includes(search.toLowerCase())
	);

	// console.log(filteredBestSellers);

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={<RootLayout search={search} setSearch={setSearch} />}
			>
				<Route index element={<Home bestsellers={filteredBestSellers} />} />
				<Route path="books/:id" element={<BestsellerPage />} />
				<Route path="my_reads" element={<MyReads />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
};

export default App;
