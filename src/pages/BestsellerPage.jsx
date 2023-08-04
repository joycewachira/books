import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../constants';
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Link,
	Text,
} from '@chakra-ui/react';

const BestsellerPage = () => {
	const { id } = useParams();
	const [book, setBook] = useState('');

	useEffect(() => {
		fetch(
			`https://api.nytimes.com/svc/books/v3/reviews.json?isbn=${id}&api-key=${API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				setBook(data.results[0]);
				console.log(data.results[0]);
			});
	}, []);

	return (
		<Flex h={'100vh'} align={'center'} direction={'column'} p={'3rem'}>
			<Heading textAlign={"center"} p={"1rem"}>{book.book_title}</Heading>
			<Heading as={"h2"} size={"md"}>{book.byline}</Heading>
			<Text
				fontFamily={'bodyFont'}
				w={'60%'}
				mx={'auto'}
				p={'1rem'}
				textAlign={'center'}
			>
				{book.summary}
			</Text>
			<Link href={book.url}>
				<Button colorScheme='whatsapp' my={"1rem"}>Read the New York Times review here</Button>
			</Link>
		</Flex>
	);
};

export default BestsellerPage;
