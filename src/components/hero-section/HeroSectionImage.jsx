import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const HeroSectionImage = () => {
	return (
		<Image
			flex={1}
			src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
			h={{ base: '100px', lg: '100%' }}
			p={{
				base: '10px',
				lg: 0,
			}}
		/>
	);
};

export default HeroSectionImage;
