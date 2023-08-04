export const NAV_ITEMS = [
	{
		label: 'Home',
		href: '/',
		children: [
			{
				label: 'About Us',
				subLabel: 'Read our story',
				href: '#',
			},
		],
	},
	{
		label: 'My Books',
		href: 'my_reads',
	},
	{
		label: 'Categories',
		children: [
			{
				label: 'Horror',
				subLabel: 'Scary much?',
				href: '#',
			},
			{
				label: 'Romance',
				subLabel: 'Love lives here',
				href: '#',
			},
			{
				label: 'Comedy',
				subLabel: 'Hahaha',
				href: '#',
			},
		],
	},
];

export const API_KEY = 'B2pGg93Y3Vp0SWAz3tNNVui7W2TWKHfx';

export const baseURL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`;

let bookId;

export const individualBook = `https://api.nytimes.com/svc/books/v3/reviews/${bookId}.json?api-key=${API_KEY}`;
