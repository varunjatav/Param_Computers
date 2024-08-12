import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
// import { registration } from "../../../store/registrationSlice";
import { registration } from "../../../store/registrationSlice";
const ExcelPayment = () => {
  const dispatch = useDispatch();

  const handlePayment = (values) => {
    dispatch(registration(values));

    console.log(values);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-20 pt-10">
      <section className="p-10 border-r">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phoneNo: "",
            mode: "",
            course: "Advance Excel",
            section: "Development and Database",
          }}
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
            if (!values.mode && values.mode === "") {
              errors.mode = "Mode of Learning is required";
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
                 className="w-full border-2 border-gray-500 rounded-md p-2 focus:ring focus:ring-teal-400 focus:outline-none"
              />
              <p className="text-red-600 font-bold text-sm">
                {errors.name && touched.name && errors.name +" *"}
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
              <p className="text-red-600 font-bold text-sm">
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
              <p className="text-red-600 font-bold text-sm">
                {errors.phoneNo && touched.phoneNo && errors.phoneNo +" *"}
              </p>
              <label htmlFor="Mobile" className="font-bold">
                Mode :
              </label>
              <select
                onChange={handleChange}
                name="mode"
                id="mode"
                value={values.mode}
                className="w-full border-2  text-md border-gray-500 rounded-md p-2 focus:ring focus:ring-teal-400 focus:outline-none"
              >
                <option value="">Select Mode of Learning</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
              <p className="text-red-600 text-sm font-bold">
                {errors.mode && touched.mode && errors.mode + " *"}
              </p>
              <input
                type="submit"
                value="Pay"
                disabled={isSubmitting}
                className="bg-teal-400 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-teal-700 w-28 focus:ring-4 focus:ring-teal-300"
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
            Discover new <span className="text-teal-500"> learning</span>{" "}
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
  );
};

export default ExcelPayment;
