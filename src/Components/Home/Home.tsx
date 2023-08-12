import React, { useState, useEffect } from 'react';
import S_alpha from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './Home.css';
import AnimateText from '../AnimateText/AnimateText';
import Loader from 'react-loaders';
import Logo from '../Logo/Logo';

const Home: React.FC = () => {
  const [letterClass, setLetterClass] = useState<string>('text-animate');

  const nameArray: string[] = ['a', 'r', 't', 'h', 'a', 'k'];
  const jobArray: string[] = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];


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
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'</span>
            <span className={`${letterClass} _16`}>m</span>
            <img src={S_alpha} alt="S-logo" />
            <AnimateText letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimateText letterClass={letterClass} strArray={jobArray} idx={22} />
          </h1>
          <h2>MERN Developer / Competitive Programmer</h2>
          <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default Home;
