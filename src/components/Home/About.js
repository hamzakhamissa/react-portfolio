import { useEffect, useState } from 'react'
import {
  faCss3,
  faHtml5,
  faJava,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.scss'
import Headshot from '../../Assets/headshot.jpeg'
import Particle from '../Particle';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container-about-page">
        <Particle />
        <div className="text-zone">
          <h1 className='title'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="paragraphs">
          <p>
            I'm a very ambitious Computer Science student currently looking for
            a summer internship, with the opportuninity to work with the newest
            technologies and finding ways to challenge myself with all kinds of 
            learning by projects.
          </p>
          <p>
            I'm very confident, an advocate for leadership, and continous learning
            and is constant search for the next big opportuninity to better myself
            and my knowledge of the science
          </p>
          <p>
            If I were to give you a snippet of who I am, I will work in any field 
            that challenges me, I want to make the world better then I found in,
            with cracking some jokes along the way.
          </p>
          </div>
        </div>

        <div>
              <img src={Headshot} alt="Headshot" className="headshot" />
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#ffde57" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
