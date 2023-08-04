import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import React from 'react';
import BestsellerCard from './BestsellerCard';

const Bestsellers = ({ bestsellers }) => {
	return (
		<Box p={'2rem'} id="bestsellers">
			<Heading textAlign={'center'} p={'2rem'}>
				Best Sellers
			</Heading>
			<Flex
				direction={{
					base: 'column',
					md: 'row',
				}}
				gap={'2rem'}
				wrap={'wrap'}
				justify={'center'}
				align={'center'}
			>
				{bestsellers.map((bestseller) => (
						<BestsellerCard key={bestseller.rank} bestseller={bestseller} />
				))}
			</Flex>
		</Box>
	);
};

export default Bestsellers;
