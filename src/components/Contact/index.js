import './index.scss'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
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
            <div>
                <div className="container contact-page">
                    <div className="text-zone">
                        <h1>
                            Contact Me
                        </h1>
                        <h2>
                            Hello
                        </h2>
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
                                        <button type="submit" className="flat-button" value="SEND">SEND</button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lds-dual-ring"></div>
        </>
    )

}
export default Contact
