import React from 'react';
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { string } from "yup";
import { FormikHelpers } from "formik/dist/types";
import Swal from "sweetalert2";
import { send } from "process";
type FormType={
name: string;
email: string;
phoneNumber: string;
message: string;
companyName:string
};
function Breadcrumb() {
    let initialValues: FormType={

        name: "",
        email: "",
        phoneNumber: "",
        message: "",
        companyName:"",
    };

    const Formik = useFormik({ initialValues,
        validationSchema: Yup.object({
     
            name: Yup.string()
             .required("* Name is required")
            .min(2, "* Enter a valid name"),
            companyName: Yup.string()
             .required("* Company Name is required")
            .min(4, "* Enter a valid Company name"),

          email: Yup.string()
          .email("* Enter a valid E-mail")
          .required("* E-mail is required"),
          phoneNumber: Yup.string().required("* phoneNumber is required").min(7,"* invalid phone number is ").max(15,"* invalid phone number is "),
  
     
      
        }),
      
      onSubmit:(Value: FormType, props: FormikHelpers<FormType>)=> {
      
        console.log(Value);
        props.resetForm();
        Swal.fire({
            title: "You will receive a email in 24 hrs",
            icon: "success",
            
        });
    },

    });

    return (
        <section className=' bg-gradient-to-r from-black to-red-600 border-b p-4'>
        <section className='w-full  h-full main-container flex flex-col lg:flex-row items-center justify-between gap-10'>
         <div className=' lg:w-3/5 w-full h-full flex items-center justify-start '>
         <form onSubmit={Formik.handleSubmit} className=" w-full flex flex-col items-center justify-center gap-6 bg-white px-6 py-4 rounded-xl ">
         <h1 className='text-3xl text-center font-[Roboto] capitalize'>request for rate card</h1>
                <TextField fullWidth 
                placeholder="Name" 
                name="name"
                type={"text"}
                value={Formik.values.name}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                error={Boolean(
                    Formik.touched.name &&
                    Formik.errors.name
                )}
                helperText={
                    Formik.touched.name &&
                    Formik.errors.name
                }

                />
                <TextField fullWidth 
                 placeholder="E-mail"
                 name="email"
                 type={"email"}
                 value={Formik.values.email}
                 onChange={Formik.handleChange}
                 onBlur={Formik.handleBlur}
                 error={Boolean(
                     Formik.touched.email &&
                     Formik.errors.email
                 )}
                 helperText={
                     Formik.touched.email &&
                     Formik.errors.email
                 }
            
            
            />
                <TextField fullWidth
                placeholder="Phone Number"
                name="phoneNumber"
                type={"text"}
                value={Formik.values.phoneNumber}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                error={Boolean(
                    Formik.touched.phoneNumber &&
                    Formik.errors.phoneNumber
                )}
                helperText={
                    Formik.touched.phoneNumber &&
                    Formik.errors.phoneNumber
                }
                />
        
                <TextField fullWidth
                placeholder="Enter your company name"
                name="companyName"
                type={"text"}
                value={Formik.values.companyName}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                error={Boolean(
                    Formik.touched.companyName &&
                    Formik.errors.companyName
                )}
                helperText={
                    Formik.touched.companyName &&
                    Formik.errors.companyName
                }
                />
               
        <button className="w-full center text-white rounded-full font-bold  px-4 py-2 bg-gradient-to-r from-black to-red-600 border-b"
            type="submit">Submit
                </button>
           </form>
           </div>
          <div className='w-full h-full flex flex-col items-center justify-center gap-8'>
           <h1 className='text-white text-4xl font-bold center '> Engage with working professionals and key decision-makers in premium flexible workplaces.</h1>
           <p className='text-white text-lg'>Connect with dRSTi for a high-impact, high-frequency media plan within 125+ flexible/hybrid workspaces across India.</p>
            <span className=''>
            {/* <button className='text-black rounded-full bg-white px-6 py-2 transition-all duration-300 ease-out  '>Get Started</button> */}
           </span>
            </div>    
        </section>
        </section>
    );
}

export default Breadcrumb;