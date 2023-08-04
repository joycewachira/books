import {
	ChevronDownIcon,
	ChevronRightIcon,
	ChevronUpIcon,
	StarIcon,
} from '@chakra-ui/icons';
import {
	Box,
	Button,
	Flex,
	HStack,
	Image,
	Link,
	Text,
	VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BestsellerCard = ({ bestseller }) => {
	console.log(bestseller);

	const [clicked, setClicked] = useState(false);

	const change =
		bestseller.rank > bestseller.rank_last_week &&
		bestseller.rank_last_week > 0 ? (
			<HStack>
				<ChevronDownIcon color={'red.400'} />{' '}
				<Text>{bestseller.rank - bestseller.rank_last_week}</Text>
			</HStack>
		) : bestseller.rank < bestseller.rank_last_week ? (
			<HStack>
				<ChevronUpIcon color={'green.500'} />
				<Text>{bestseller.rank_last_week - bestseller.rank}</Text>
			</HStack>
		) : bestseller.rank_last_week < 1 ? (
			<Text
				bg={'green.400'}
				color={'whiteAlpha.700'}
				p={'8px'}
				borderRadius={'8px'}
			>
				NEW
			</Text>
		) : (
			'-'
		);
	return (
		<VStack
			maxW={{
				base: '100%',
				md: '350px',
			}}
			h={{ base: '750px', md: '800px' }}
			fontFamily={'bodyFont'}
			border={'1px solid #4f3a5f'}
			p={'1rem'}
			justify={'space-around'}
		>
			<Flex
				h={'40px'}
				bg={'yellow.500'}
				w={'40px'}
				alignSelf={'flex-end'}
				mb={'-30px'}
				zIndex={3}
				justifyContent={'center'}
				align={'center'}
			>
				<Text>#{bestseller.rank}</Text>
			</Flex>
			<Image src={bestseller.book_image} />

			<Flex
				h={'40px'}
				// bg={'yellow.500'}
				w={'40px'}
				alignSelf={'flex-end'}
				mt={'-50px'}
				zIndex={3}
				justifyContent={'center'}
				align={'center'}
			>
				<StarIcon
					fontSize={'2rem'}
					color={clicked ? 'black' : 'yellow.400'}
					onClick={() => setClicked(!clicked)}
				/>
			</Flex>

			<Text p={'1rem'}>
				{' '}
				{bestseller.description}
			</Text>
			<Box fontSize={'1.2rem'}>{change}</Box>
			<Link as={NavLink} to={`/books/${bestseller.isbns[0].isbn13}`}>
				<Button
					rightIcon={<ChevronRightIcon />}
					bg="#5d5991"
					color="#fff"
					_hover={{ bg: '#e4d3e3', color: '#333' }}
				>
					SEE MORE
				</Button>
			</Link>
		</VStack>
	);
};

export default BestsellerCard;
