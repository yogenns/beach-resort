import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import { Link } from "react-router-dom"
import Services from '../components/Services'
export default function Home() {
    return (
        <>
            <Hero hero="defaultHero" >
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to='/rooms' className="btn-primary" >
                        our rooms
                </Link>
                </Banner>
            </Hero>
            <Services />
        </>
    )
}
