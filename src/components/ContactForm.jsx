import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { query } from "../store/querySlice";
import SlideInFromLeft from "./SlideInFromLeft";
import SlideInFromRight from "./SlideInFromRight";

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <section className="flex flex-col pb-32 pt-20 px-10  md:flex-row justify-between">
      
      <section className="w-full h-full px-3">
      <SlideInFromLeft>
        <h2 className="font-bold text-3xl mb-5">Contact Us</h2>
        <Formik
          initialValues={{ name: "", email: "", phoneNo: "", message: "" }}
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
              errors.message = "Message is required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(query(values));
            console.log(values);
            values.email = "";
            values.name = "";
            values.phoneNo = "";
            values.message = "";
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
                className="w-full border-2 border-gray-500 rounded-md p-2 focus:ring focus:ring-teal-400 focus:outline-none"
              />
              <p className="text-red-600 text-sm font-bold">
              {errors.name && touched.name && errors.name + " *"}
              </p>
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
               className="w-full border-2 border-gray-500 rounded-md p-2 focus:ring focus:ring-teal-400 focus:outline-none"
              />
              <p className="text-red-600 text-sm font-bold">
              {errors.email && touched.email && errors.email +" *"}
              </p>
              
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
               className="w-full border-2 border-gray-500 rounded-md p-2 focus:ring focus:ring-teal-400 focus:outline-none"
              />
              <p className="text-red-600 text-sm font-bold">
              {errors.phoneNo && touched.phoneNo && errors.phoneNo +" *"}
              </p>
              <label htmlFor="Mobile" className="font-bold">
                Message:
              </label>
              <textarea
                name="message"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                placeholder="Enter Your Message here..."
               className="w-full border-2 border-gray-500 rounded-md p-2 focus:ring focus:ring-teal-400 focus:outline-none"
              />
               <p className="text-red-600 text-sm font-bold">
              {errors.phoneNo && touched.phoneNo && errors.phoneNo + " *"}
              </p>
              <input
                type="submit"
                value="Send"
                disabled={isSubmitting}
                className=" bg-teal-400 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-teal-700 w-28 focus:ring-4 focus:ring-teal-300"
              />
            </form>
          )}
        </Formik>
        </SlideInFromLeft>
      </section>
      
     
      <section className="w-full p-3 h-full">
      <SlideInFromRight>
        <img
          className="object-cover object-center rounded-xl m-auto h-[450px]"
          alt="param_computers_students"
          src="./passion.jpg"
          loading="lazy"
        />
        </SlideInFromRight>
      </section>
      
    </section>
  );
};

export default ContactForm;
