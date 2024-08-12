import React from 'react'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import Support from '../components/Support'

const ContactUs = () => {
  return (
    <div className="mt-20 pt-10">
        <ContactForm/>
        <Support/>
        <Map/>
    </div>
  )
}

export default ContactUs