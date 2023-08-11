import { useEffect, useState } from 'react'
import {faCss3, faHtml5, faJsSquare, faLinux, faReact, faSass,} 
from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimateText from '../AnimateText/AnimateText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.css'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimateText
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p  style={{ textAlign: 'justify' }}>
                        I'm a passionate individual experienced in competitive programming and adept at solving intricate problems. As a MERN (MongoDB, Express, React, Node.js) developer, I craft seamless digital solutions that seamlessly merge functionality and user-centric design. My skills stem from a blend of analytical thinking honed through competitive programming and a knack for creating immersive web experiences. I'm driven by innovation and continuously strive to learn and excel in the dynamic realm of software development.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        I'm quiet confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        If I need to define myself in one sentence that would be a great learner, a sports fanatic,
                        photography enthusiast, and tech-obsessed.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faSass} color="#1E3050" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" style={{ transform: 'rotate(-90deg)' }} />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#0094FF" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faLinux} color="#000" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" active={true}/>
        </>
    )
}

export default About