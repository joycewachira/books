import {
	Box,
	Flex,
	Text,
	IconButton,
	Collapse,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	HStack,
	Spacer,
} from '@chakra-ui/react';

import { PiBooks } from 'react-icons/pi';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import SearchBar from '../SearchBar';

export default function NavBar({ search, setSearch }) {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box>
			<Flex
				bg={useColorModeValue('white', 'gray.800')}
				color={useColorModeValue('gray.600', 'white')}
				minH={'60px'}
				minW={'100vw'}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}
				justify={'space-between'}
			>
				<Flex
					flex={{ base: 1, md: 'auto' }}
					mx={{ base: -2 }}
					display={{ base: 'flex', md: 'none' }}
					justify={{ base: 'space-between', md: 'flex-end' }}
					minW={'100vw'}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
					<SearchBar search={search} setSearch={setSearch} />
				</Flex>
				<Flex
					flex={{ base: 1 }}
					justify={{ base: 'center', md: 'start' }}
					w={'100vw'}
					// bg={'yellow'}
				>
					<Flex
						display={{ base: 'none', md: 'flex' }}
						mx={40}
						w={'100vw'}
						// bg={'red'}
						justify={'space-between'}
					>
						<HStack>
							<PiBooks size={'2rem'} />
							<DesktopNav />
						</HStack>

						<SearchBar search={search} setSearch={setSearch} />
					</Flex>
				</Flex>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
}
