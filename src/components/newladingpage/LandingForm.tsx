import React, { Dispatch, SetStateAction } from 'react'
import Dialog from '@mui/material/Dialog';
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormikHelpers } from "formik/dist/types";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import CloseIcon from '@mui/icons-material/Close';

type FormType={
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
    companyName:string
    };

export default function LandingForm(prop: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }) {

    const downloadPDF = () => {
        window.open(`https://drive.google.com/file/d/10REt4OydmaUFD4vVvXdXYXYD7Vq9suT2/view`, "width=2480,height=3508");
      };

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
            title: "You will receive a call from our export",
            icon: "success",
            
        });
        downloadPDF()
    },

    });
  return (
    <Dialog
    fullWidth
    maxWidth={"sm"}
    open={prop.isOpen}
    onClose={()=>{prop.setIsOpen(false)}}
  >
    <form onSubmit={Formik.handleSubmit} className="w-full   flex flex-col items-center justify-center gap-6 bg-white px-6 py-4 rounded-xl relative">
        <CloseIcon className='!text-red-600 !font-bold absolute top-5 right-5 cursor-pointer' onClick={()=>{prop.setIsOpen(false)}}/>
         <h1 className='text-3xl text-center  font-bold uppercase'>Contact for advertising</h1>
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
               
        <button className="w-full center text-white rounded-full font-bold  px-4 py-2 bg-gradient-to-r from-red-600 to-black border-b"
            type="submit" onClick={()=>{prop.setIsOpen(false)}}>Submit
                </button>
           </form>
  </Dialog>
  )
}
