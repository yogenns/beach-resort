import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
export default function Rooms() {
    return (
        <Hero hero="roomsHero" >
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">
                    return Home
                 </Link>
            </Banner>
        </Hero>

    )
}
