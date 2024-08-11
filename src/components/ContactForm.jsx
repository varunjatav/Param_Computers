import { Formik } from 'formik'
import React from 'react'

const ContactForm = () => {
  return (
    <section className="flex flex-col p-10 my-10 md:flex-row justify-between">
        <section className="w-full p-3">
        <h2 className="font-bold text-3xl mb-5">Contact Us</h2>
        <Formik
         initialValues={{ name: "", email: "", phoneNo: "" ,message: ""}}
         validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Email is Required";
            } 
            if (!values.name) {
              errors.name = "Name is required";
            } 
            if (!values.phoneNo) {
              errors.phoneNo = "Contact is required";
            } 
            if (!values.message) {
                errors.message = "Contact is required";
              } 
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            
          }}
        >
{({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              action=""
              className="flex flex-col gap-3 w-full"
              onSubmit={handleSubmit}
            >
              <label htmlFor="Name" className="font-bold">
                Name :
              </label>
              <input
                name="name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Enter Your Name"
                className="w-full border-2 border-black rounded-md p-2"
              />
              {errors.name && touched.name && errors.name}
              <label htmlFor="Email" className="font-bold">
                Email Address :
              </label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter Your Email"
                className="w-full border-2 border-black rounded-md p-2"
              />
              {errors.email && touched.email && errors.email}
              <label htmlFor="Mobile" className="font-bold">
                Mobile No:
              </label>
              <input
                name="phoneNo"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneNo}
                placeholder="Enter Your Mobile Number"
                className="w-full border-2 border-black rounded-md p-2"
              />
              {errors.phoneNo && touched.phoneNo && errors.phoneNo}
             
              <label htmlFor="Mobile" className="font-bold">
               Message:
              </label>
              <textarea
                name="phoneNo"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                placeholder="Enter Your Message here..."
                className="w-full border-2 border-black rounded-md p-2"
              />
              {errors.phoneNo && touched.phoneNo && errors.phoneNo}
             
              <input
                type="submit"
                value="Send"
                disabled={isSubmitting}
                className=" bg-green-400 text-xl font-thin hover:bg-green-700 text-white py-2 px-4 rounded-md cursor-pointer w-32"
              />
            </form>
          )}
        </Formik>
        </section>
        <section className='w-full p-3'>
       
          <img
            className="object-cover object-center rounded-xl h-[600px] m-auto"
            alt="param_computers_students"
            src="./passion.jpg"
            loading="lazy"
          />
        
        </section>
    </section>
  )
}

export default ContactForm