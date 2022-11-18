import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-t.png';
import AnimatedLetters from '../AnimatedLetters';
import './Index.scss';
import Logo from './Logo';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['h', 'a', 'n', 'p', 'h', 'o', 'n']
    const jobArray = ['w', 'e', 'b',' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer"></img>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}> </AnimatedLetters>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}> </AnimatedLetters>
                </h1>
                <h2>Study in Electronic Engineering Computer at KMUTNB</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo></Logo>
        </div>
    )
}

export default Home