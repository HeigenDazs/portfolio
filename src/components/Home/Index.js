import { useEffect, useState } from 'react';
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
                        <span>Hello World, I'm</span>
                        <p data-text="THANAPHON"> THANAPHON</p>
                        <span>Engineering Student</span>
                    </h1>
                    <h2>Study in Electronic Engineering Computer at KMUTNB</h2>
                    <hr />
                    <br />
                    <br />
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo></Logo>
            </div>
        </>
    )
}

export default Home