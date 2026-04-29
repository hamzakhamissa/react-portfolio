import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.scss'
import Interviewing from "../../Assets/speak org (1).png"

const Contact = () => {
  const [setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("service_addtuaj","template_rnqs12r", form.current, 'uJjE5DLnalo5tNvvR')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container-contact-page">
        <div className="text-zone">
          <h1 className='title'>
            Contact me
          </h1>
          <p>
            Interested in connecting? Feel free to fill out the form below to get
            in contact with me, I am currently pursuing summer 2024 internships, 
            fun side-projects that come my way, and fostering my passion for
            continous learning. If you want a coffee chat, to the side is my 
            favourite one in London.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
                <div>
                <img className="Interviewing" src={Interviewing} alt="actively-interviewing"/>
                </div>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact