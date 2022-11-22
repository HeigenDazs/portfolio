import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import ProfileImage from '../../assets/images/profile-image.jpg';

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
                        About Me
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

                <div className='bb'>
                    <div className='about-img'>
                        <div className='bb'></div>
                        <img src={ProfileImage} alt="" />
                        <div class="glitch__layers">
                            <div class="glitch__layer"></div>
                            <div class="glitch__layer"></div>
                            <div class="glitch__layer"></div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="lds-dual-ring"></div>
        </>
    )
}

export default About