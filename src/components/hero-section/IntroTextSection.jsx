import { ArrowDownIcon } from '@chakra-ui/icons';
import { Button, Heading, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const IntroTextSection = () => {
	return (
		<VStack flex={1}>
			<Heading
				fontFamily={'h1Font'}
				w={'min-content'}
				size={'4xl'}
				p={'2rem'}
				textAlign={'center'}
			>
				BOOKS FOR ALL{' '}
			</Heading>

			<Text
				p={'2rem'}
				fontFamily={'bodyFont'}
				fontSize={'1.25rem'}
				lineHeight={8}
				textAlign={{
					base: 'center',
					md: 'left',
				}}
			>
				Regular reading allows you to better formulate your own thoughts.
				<br />
				<Link textDecor={'underline'} href="#bestsellers">
					Not sure what to read next
				</Link>
				? <br />
				Explore the catalog below and read the reviews from respected book
				reviewers.
			</Text>

			<Link href="#bestsellers">
				<Button
					rightIcon={<ArrowDownIcon />}
					bg="#5d5991"
					color="#ccc"
					_hover={{ bg: '#e4d3e3', color: '#333' }}
				>
					{' '}
					Explore Now
				</Button>
			</Link>
		</VStack>
	);
};

export default IntroTextSection;
