import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { registration } from "../../../store/registrationSlice";

const SoftwarePayment = () => {
  
    const dispatch = useDispatch();

    const handlePayment = (values) => {
    
      dispatch(registration(values));
    
      console.log(values);
    };
  
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 mt-20 pt-10">
        <section className="p-10 border-r">
          <Formik
            initialValues={{ name: "", email: "", phoneNo: "" , course:"Software Developement", section:"Development and Database"}}
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
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              // console.log(values);
              handlePayment(values);
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
                className="flex flex-col gap-3"
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
                  value={values.phondeNo}
                  placeholder="Enter Your Mobile Number"
                  className="w-full border-2 border-black rounded-md p-2"
                />
                {errors.phoneNo && touched.phoneNo && errors.phoneNo}
                <input
                  type="submit"
                  value="Pay"
                  disabled={isSubmitting}
                  className=" bg-green-400 text-white py-2 px-4 rounded-md cursor-pointer"
                />
              </form>
            )}
          </Formik>
        </section>
        <section className="p-10">
          <img
            src="https://payment.page/wp-content/uploads/2022/02/ot-placeholder.jpg"
            alt="payment_hero_img"
            className="h-72 w-full rounded-ss-[100px] rounded-ee-[100px]"
          />
          <div className="p-2">
            <h2 className="font-semibold text-2xl md:text-5xl font-serif leading-normal">
              Discover new <span className="text-green-500"> learning</span>{" "}
              possibilities.
            </h2>
            <p className="font-serif pt-4">
              We can’t stop you from worrying about your child. But our expert
              tutors can help their grades and confidence soar – and help you
              worry a little less.
            </p>
          </div>
        </section>
      </section>
  )
}

export default SoftwarePayment