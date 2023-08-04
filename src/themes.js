import { extendTheme } from '@chakra-ui/react';
import '@fontsource/bevan';

export const themes = extendTheme({
	fonts: {
		h1Font: `'Bevan', cursive`,
		bodyFont: `'Poppins', sans-serif`,
	},
	colors: {
		background: '	#f2f5ef',
	},
});
