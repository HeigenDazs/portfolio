import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}>

                        </AnimatedLetters>
                    </h1>
                    <p>
                        Hello
                    </p>
                    <p>
                        Nice to meet you
                    </p>
                    <p>
                        Thank you
                    </p>
                </div>
            </div>
            <div class="lds-dual-ring"></div>
        </>
    )
}

export default About