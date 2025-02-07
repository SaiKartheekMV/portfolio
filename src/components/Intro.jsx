import './intro.css';
import bg from '../assets/bg.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {
  const [text] = useTypewriter({
    words: ['Web Dev', 'AI & Web3 Enthusiast', 'Life Long Pioneer'],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id='intro'>
      <div className="introContent" data-aos="fade-up">
        <span className='hello'>Hello,</span>
        
        <span className='introText'>
          I am <span className='introName'>Sai Kartheek</span><br />
          {text} <span className='cursor'><Cursor /></span>
        </span>
        <p className="introPara">
          I specialize in creating innovative solutions <br />
          with strong technical skills and a keen eye for design.
        </p>
      </div>
      {/* Ensure the background image path is correct */}
      <img src={bg} alt="Background" className='bg' data-aos="zoom-in" />
    </section>
  );
}

export default Intro;
