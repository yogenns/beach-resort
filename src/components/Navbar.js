import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { FaAlingRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach Resort" />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlingRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <LinkTo to="/">Home</LinkTo>
                        </li>
                        <li>
                            <LinkTo to="/rooms">Rooms</LinkTo>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
