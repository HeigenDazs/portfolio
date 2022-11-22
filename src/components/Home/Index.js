import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-t.png';
import AnimatedLetters from '../AnimatedLetters';
import './Index.scss';
import Logo from './Logo';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['h', 'a', 'n', 'p', 'h', 'o', 'n']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div class="lds-dual-ring"></div>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <div className='gdiv' title='&nbsp;&nbsp;Hello World, I m'>&nbsp;&nbsp;Hello World, I'm</div>
                        <p data-text="THANAPHON">THANAPHON</p>
                        <div className='gdiv' title='Engineering Student'>Engineering Student</div>
                    </h1>
                    <br />
                    <br />
                    <h2>Study in Electronic Engineering Computer at KMUTNB</h2>
                    <hr />
                    <br />
                    <br />
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Link to="/about" className='flat-button'>ABOUT ME</Link>
                </div>
                <Logo></Logo>
            </div>
        </>
    )
}

export default Home