import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import IntroSection from './IntroTextSection';
import HeroSectionImage from './HeroSectionImage';

const HeroSection = () => {
	return (
		<Flex
			h={'100dvh'}
			direction={{
				base: 'column-reverse',
				lg: 'row',
			}}
			align={'center'}
			justify={'space-between'}
		>
			<IntroSection />
			<HeroSectionImage />
		</Flex>
	);
};

export default HeroSection;
