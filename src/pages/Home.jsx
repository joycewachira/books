import React from 'react'
import HeroSection from '../components/hero-section/HeroSection'
import Bestsellers from '../components/bestsellers-section/Bestsellers'

const Home = ({ bestsellers }) => {
	return (
		<div>
			<HeroSection />
			<Bestsellers bestsellers={ bestsellers} />
		</div>
	)
}

export default Home