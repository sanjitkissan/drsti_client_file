import { TextField } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import React from "react";
import Swal from "sweetalert2";
import { contactFormImg } from "@/src/assets/landinPage";
type FormType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function MessageSection() {
  let initialValues: FormType = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const formik = useFormik({
    initialValues,

    validationSchema: Yup.object({
      name: Yup.string()
        .required("* Name is required")
        .min(2, "* Enter a valid name"),
      email: Yup.string()
        .email("* Enter a valid E-mail")
        .required("* E-mail is required"),
      subject: Yup.string().required("* subject is required"),

      message: Yup.string().required("* Write some Message"),
    }),
    onSubmit: (values: FormType, props: FormikHelpers<FormType>) => {
      console.log(values);

      props.resetForm();
      Swal.fire({
        title: "Message send Successfully",
        icon: "success",
      });
    },
  });
  return (
    <section className="w-full  main-container flex flex-col items-center justify-center gap-16 lg:my-24 my-12">
      <div className="w-full center ">
        <h1 className="text-2xl lg:text-4xl  font-bold uppercase ">
          get in <span className="text-red-600">touch</span>{" "}
        </h1>
      </div>
      <section className="w-full h-auto lg:h-[70vh] flex flex-col lg:flex-row gap-6 lg:gap-4 items-center justify-center  lg:my-0  ">
        <div
          
          className="w-full h-auto lg:h-[70vh] bg-center bg-cover bg-no-repeat"
        >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.410970674952!2d77.57361881534334!3d13.00948071756463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17df652ee8bd%3A0xfad4d2e0060724d2!2sdRSTi%20Communications!5e0!3m2!1sen!2sin!4v1677754505180!5m2!1sen!2sin" className='w-full h-full' referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="w-full h-auto lg:h-[70vh]">
          <span className=" bg-white w-full h-full p-6 flex flex-col items-start justify-center gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            <p className="text-2xl text-red-600 tracking-wider uppercase">
              {`let's`} connect
            </p>
            <h1 className="text-2xl lg:text-4xl font-bold tracking-wide capitalize ">
              get a free consultation
            </h1>
            <p className="lg:text-lg text-black ">
              Maximize your {`brand's`} potential and stand out in the
              competitive market by partnering with dRSTi .
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="w-full flex flex-col items-start justify-center gap-4"
            >
              <span className="center w-full gap-2">
                <TextField
                  className="w-full"
                  type={"text"}
                  placeholder="Your name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.name && formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  className="w-full"
                  name="email"
                  type={"email"}
                  placeholder="Your email Id"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </span>
              <TextField
                className="w-full"
                name="subject"
                type={"text"}
                placeholder="Subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.subject && formik.errors.subject)}
                helperText={formik.touched.subject && formik.errors.subject}
              />
              <TextField
                className="w-full"
                rows={"3"}
                multiline
                name="message"
                type={"text"}
                placeholder="Leave your message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.message && formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
              <button
                className="w-full rounded-md bg-gradient-to-r from-black to-red-600 text-white text-lg tracking-wider p-4 uppercase"
                type="submit"
              >
                send message
              </button>
            </form>
          </span>
        </div>
      </section>
    </section>
  );
}
