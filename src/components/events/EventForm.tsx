import { eventFormImg } from "@/src/assets/event";
import { TextField } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import React from "react";
import Swal from "sweetalert2";
type FormType = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export default function EventForm() {
  let initialValues: FormType = {
    name: "",
    email: "",
    phoneNumber: "",
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
      phoneNumber: Yup.string()
        .required("* subject is required")
        .min(7,"*Enter a valid phone number")
        .max(15,"*Enter a valid phone number")
        ,

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
    <section className="w-full main-container flex flex-col items-center justify-center gap-6 my-24">
      <h1 className="text-4xl font-bold text-black uppercase">
        we will happy <span className="text-red-600">to assist you!</span> 
      </h1>
      <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-4">
        <div className="w-full center h-[60vh]">
          <img src={eventFormImg.src} alt="" className="w-full h-full" />
        </div>
        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col items-center justify-center gap-6 ">
          <TextField
            fullWidth
            type={"text"}
            name="name"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.name && formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            type={"email"}
            name="email"
            placeholder="Enter your email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.email && formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            type={"text"}
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(
              formik.touched.phoneNumber && formik.errors.phoneNumber
            )}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
          <TextField
            fullWidth
            type={"text"}
            name="message"
            placeholder="Write your message here"
            multiline
            rows={"7"}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.message && formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
          <button type="submit" className="w-full p-3 bg-gradient-to-r from-red-600 to-black text-white text-xl font-bold rounded-xl">
            Submit
          </button>
        </form>
      </section>
    </section>
  );
}
