import { Dialog, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { pop_up_img } from '@/src/assets/navbar';
import CloseIcon from '@mui/icons-material/Close';
type FormType = {
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
  };
export default function MainForm() {
    const [isOpen, setIsOpen] = useState<boolean>(false)


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
            phoneNumber: Yup.string().required("* phoneNumber is required").min(7,"* invalid phone number is ").max(15,"* invalid phone number is "),
    
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

      useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 12000);
        return () => clearTimeout(timer);
      }, []);
      
      
     
      

  return (
    <section className='w-full'>
        <Dialog
    fullWidth
    maxWidth={"md"}
    open={isOpen}
    onClose={() => setIsOpen(false)}
  >
    <section className='w-full h-full flex flex-col  items-center justify-center relative p-6'>
    <h2 className='w-full text-center text-red-600 text-4xl font-bold capitalize'>get in touch</h2>
            <h2 className='w-full text-center  text-2xl font-bold capitalize'>send enquiry</h2>
    <CloseIcon className='!text-red-600 !font-bold absolute top-5 right-5 cursor-pointer' onClick={()=>{setIsOpen(false)}}/>
        <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center p-6'>
        <div className='w-full h-full center gap-4'>

            <div className='w-full h-full'>
            <img src={pop_up_img.src} alt="" className='w-full h-full object-cover' />
            </div>
        </div>
        <div className='w-full'>
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
                  placeholder="Your email "
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </span>
              <TextField
                className="w-full"
                name="phoneNumber"
                type={"text"}
                placeholder="Phone Number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
              />
              <TextField
                className="w-full"
                rows={"4"}
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
                className="w-full rounded-md bg-gradient-to-r from-red-600 to-black text-white text-lg tracking-wider p-4 uppercase"
                type="submit"
              >
                send message
              </button>
            </form>
        </div>
        </div>
    </section>
  </Dialog>

    </section>
  )
}
