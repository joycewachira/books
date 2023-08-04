import React from 'react';
import Navbar from '../components/nav/Navbar';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const RootLayout = ({ search, setSearch }) => {
	return (
		<Box bg={'background'}>
			<Navbar search={search} setSearch={setSearch} />
			<Outlet />
		</Box>
	);
};

export default RootLayout;
