import { DeleteIcon, StarIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Flex,
	HStack,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const MyReads = () => {
	const [myReads, setMyReads] = useState([]);
	useEffect(() => {
		fetch(' http://localhost:3000/books')
			.then((res) => res.json())
			.then((data) => setMyReads(data));
	}, [myReads]);

	function removeBook(id) {
		fetch(`http://localhost:3000/books/${id}`, {
			method: 'DELETE',
		});
	}
	return (
		<>
			<Heading p={'1rem 2rem'} textAlign={'center'}>
				My Favorite Reads
			</Heading>
			<Flex wrap={'wrap'} gap={'2rem'} p={'2rem'} justify={'center'}>
				{myReads.map((book) => (
					<Box key={book.ISBN}>
						<Flex
							h={'40px'}
							w={'40px'}
							// bg={'yellow.300'}
							// mb={'-10px'}
							zIndex={10}
						>
							<StarIcon color={'yellow.300'} mb={'-50px'} />
						</Flex>
						<Image src={book.image} h={'500px'} />
						<HStack>
							<Text py={'0.5rem'} fontWeight={'bold'} fontFamily={'bodyFont'}>
								{'Price: '}
								{book.price.currency} {book.price.value}
							</Text>
						</HStack>
						<Text w={'300px'} px={'1rem'} fontFamily={'bodyFont'}>
							{book.summary.substring(0, 200)}...
						</Text>
						<Button
							w={'100%'}
							mt={'1rem'}
							colorScheme="red"
							onClick={() => removeBook(book.id)}
							rightIcon={<DeleteIcon />}
						>
							{' '}
							REMOVE FROM FAVORITES
						</Button>
					</Box>
				))}
			</Flex>
		</>
	);
};

export default MyReads;
