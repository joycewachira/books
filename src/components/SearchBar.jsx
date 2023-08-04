import { FormControl, Input } from '@chakra-ui/react';
import React from 'react';

const SearchBar = ({ search, setSearch }) => {
	return (
		<Input
			value={search}
			onChange={(e) => setSearch(e.target.value)}
			placeholder="search books"
			maxW={'200px'}
		/>
	);
};

export default SearchBar;
