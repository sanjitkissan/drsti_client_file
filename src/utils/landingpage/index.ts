import { img1 } from '@/src/assets/newladingpage';

import { bg, boxImg1, boxImg2, boxImg3, boxImg4, boxImg5, boxImg6, boxImg7, wpmImg1, wpmImg2, wpmImg3,  } from "@/src/assets/landinPage";
import { dynamicContentImg1, dynamicContentImg10, dynamicContentImg11, dynamicContentImg12, dynamicContentImg13, dynamicContentImg14, dynamicContentImg15, dynamicContentImg2, dynamicContentImg3, dynamicContentImg4, dynamicContentImg5, dynamicContentImg6, dynamicContentImg7, dynamicContentImg8, dynamicContentImg9 } from "@/src/assets/landinPage/dynamicContent";
import { homeGallery1, homeGallery10, homeGallery11, homeGallery2, homeGallery3, homeGallery5, homeGallery6, homeGallery7, homeGallery8, homeGallery9 } from "@/src/assets/landinPage/gallery";
import { slide1, slide2, slide3, slide4, slide5, slide6, slide7 } from "@/src/assets/landinPage/responsiveBreadcrumb";
import { cardArrHome,  homeGalleryArrType,  homeWorkplaceArrType,  newBreadcrumbArrType,  sliderArr } from "@/src/types";
import { slider1, slider2, slider3, slider4, slider5 } from '@/src/assets/landinPage/nreadcrumb';

export const breadCeumbArr= [

    {
        id:1,
        img: bg,
        title:'Welcome To dRSTi',
        content:"India's largest workplace marketing network",
        boxImg: boxImg1

    },

    {
        id:2,
        img: bg,
        title:'Reach 4.5M Corporate Professionals',
        content:'Leading digital out of home office media publisher, connecting property & brand partners with audiences in premium offices.',
        boxImg: boxImg2

    },

    {
        id:3,
        img: bg,
        title:'Branding Spaces',
        content:'leading digital out of home office media publisher, connecting property & brand partners with audiences in premium offices.',
        boxImg: boxImg3

    },


    {
        id:4,
        img: bg,
        title:'Activation Spaces',
        content:'leading digital out of home office media publisher, connecting property & brand partners with audiences in premium offices.',
        boxImg: boxImg4


    },

    {
        id:5,
        img: bg,
        title:'Digital Out-Of-Home',
        content:'leading digital out of home office media publisher, connecting property & brand partners with audiences in premium offices.',
        boxImg: boxImg5

    },
    {
        id:6,
        img: bg,
        title:'Branding Innovations',
        content:'leading digital out of home office media publisher, connecting property & brand partners with audiences in premium offices.',
        boxImg: boxImg6

    },
    {
        id:7,
        img: bg,
        title:'Influence The Workplace ',
        content:'leading digital out of home office media publisher, connecting property & brand partners with audiences in premium offices.',
        boxImg: boxImg7

    },

]

    export const  homeCardArr:cardArrHome[]= [
        {
            id:1,
            img: [
                {
                    id:11,
                    img1: dynamicContentImg1,
                },
                {
                    id:12,
                    img1: dynamicContentImg2,
                },
                {
                    id:13,
                    img1:dynamicContentImg3
                }
            ],
            mt:"0"

    
        },
        // {
        //     id:2,
        //     img: [
        //         {
        //             id:21,
        //             img1: dynamicContentImg4,
        //         },
        //         {
        //             id:22,
        //             img1: dynamicContentImg5,
        //         },
        //         {
        //             id:23,
        //             img1:dynamicContentImg6
        //         }
        //     ],
        //     mt:"10"
    
        // },
    
        {
            id:3,
            img: [
                {
                    id:31,
                    img1: dynamicContentImg7,
                },
                {
                    id:32,
                    img1: dynamicContentImg8,
                },
                {
                    id:33,
                    img1:dynamicContentImg9
                }
            ],
           mt:"6"
    
        },
    
        // {
        //     id:4,
        //     img:[
        //         {
        //             id:41,
        //             img1: dynamicContentImg10,
        //         },
        //         {
        //             id:42,
        //             img1: dynamicContentImg11,
        //         },
        //         {
        //             id:43,
        //             img1:dynamicContentImg12
        //         }
        //     ],
        //    mt:"10"
    
        // },

        {
            id:5,
                img: [
                    {
                        id:51,
                        img1: dynamicContentImg13,
                    },
                    {
                        id:52,
                        img1: dynamicContentImg14,
                    },
                    {
                        id:53,
                        img1:dynamicContentImg15
                    }
                ],
           mt:"0"
    
        }
    
    
    ]

 export const homeGalleryArr:homeGalleryArrType[]=[
    {
        id:1,
        img: homeGallery1
    },
    {
        id:2,
        img: homeGallery2
    },
    {
        id:3,
        img: homeGallery3
    },
    {
        id:4,
        img: homeGallery3
    },
    {
        id:5,
        img: homeGallery5
    },
    {
        id:6,
        img: homeGallery6
    },
    {
        id:7,
        img: homeGallery7
    },
    {
        id:8,
        img: homeGallery8
    },
    {
        id:9,
        img: homeGallery9
    },
    {
        id:10,
        img: homeGallery10
    },
    {
        id:11,
        img: homeGallery10
    },
 ]

 export const homeWorkplaceArr:homeWorkplaceArrType[]=[
    {
        id:1,
        img:wpmImg1
    },
    {
        id:2,
        img:wpmImg2
    },
    {
        id:3,
        img:wpmImg3
    },
 ]

 export const newBreadcrumbArr:newBreadcrumbArrType[]=[
    {
        id:1,
    
        img: slider1
    },
  
    {
        id:3,
     
        img: slider3
    },
    {
        id:5,
      
        img: slider5
    },
 
    {
        id:4,
       
        img: slider4
    },
    
  
    {
        id:2,
       
        img: slider2
    },
   

 ]
 export const responsiveBreadcrumbArr=[
    {
        id:1,
       
        img1:slide1
    },
    {
        id:2,
       
        img1:slide2
    },
    {
        id:3,
        
        img1:slide3
    },
    {
        id:4,
    
        img1:slide4
    },
    {
        id:5,
      
        img1:slide5
    },
    {
        id:6,
      
        img1:slide6
    },
    {
        id:7,
       
        img1:slide7
    },
 ]