import { blog } from '@/src/assets/blog';
import { TextField } from '@mui/material';
import React from 'react';
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SmsIcon from '@mui/icons-material/Sms';
type FormType = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
function Blogpageiner({item}:any) {
  console.log(item)
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
        <section className=' w-full main-container flex flex-col items-start justify-center my-6 gap-4'>
      
        <div className=" w-full h-auto lg:h-[29rem] rounded-xl overflow-hidden">                                                 
        <img src={item.attributes.ImageURL} alt="img" className='w-full h-full object-cover' />
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-6 ">
            {/* <span className="flex items-center justify-start gap-2"> 
            <SupervisorAccountIcon className='text-black'/> <h1 className='text-sm text-black'>Ritu Singh</h1>
            </span>

            <span className="flex items-center justify-start gap-2">
            <h1 className='text-sm text-black'>February 1, 2020</h1>
            </span> */}
           {/* <span className="flex items-center justify-start gap-2">
           <SmsIcon className='text-black'/><h1 className='text-sm text-black'>1 Comment</h1>
            </span> */}
           
          </div>
        <h1 className='text-3xl font-bold text-red-600'> {item.attributes.title}</h1>
      <textarea  className='w-full h-screen element'>{item.attributes.description}</textarea>

        {/* <div className='w-full '> 
        <h3 className='py-6 text-xl font-bold text-red-600 capitalize'>leave your valuable comment...</h3>
        <form
              onSubmit={formik.handleSubmit}
              className="w-full flex flex-col items-start justify-center gap-4"
            >
                <TextField
            className="w-full"
            rows={"5"}
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

              <span className="center w-full gap-2">
                <TextField
                  className="w-full"
                  type={"text"}
                  placeholder="Enter your name"
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
                  placeholder="Enter your email address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                 <TextField
                className="w-full"
                name="subject"
                type={"text"}
                placeholder="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.subject && formik.errors.subject)}
                helperText={formik.touched.subject && formik.errors.subject}
              />
              </span>
             
              
              <button
                className="w-fit rounded-md bg-gradient-to-r from-black to-red-600 text-white text-lg tracking-wider py-4 px-8 uppercase"
                type="submit"
              >
                leave comment
              </button>
            </form>
        </div> */}
        </section>
    );
}

export default Blogpageiner;