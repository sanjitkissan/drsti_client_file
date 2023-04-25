import { img1, img2, web2, aboutusImg1, aboutusImg2, ourTeamImg1, ourTeamImg2, ourTeamImg3, Staticmedia, Digitalmedia, Ongroundactivation, why,  brandLoyality, parsionalizeTouch, captiveImg1, captiveImg2, captiveImg3, brandLoyality1, brandLoyality2, parsionalizeTouch1, parsionalizeTouch2 } from "@/src/assets/newladingpage";
import { addslider1, addslider10, addslider11, addslider12, addslider13, addslider14, addslider15, addslider16, addslider17, addslider18, addslider19, addslider2, addslider20, addslider21, addslider22, addslider23, addslider24, addslider25, addslider26, addslider27, addslider28, addslider29, addslider3, addslider30, addslider32, addslider33, addslider34, addslider35, addslider36, addslider4, addslider5, addslider52, addslider6, addslider7, addslider8, addslider9 } from "@/src/assets/newladingpage/NewSection";
import { slider_logo1, slider_logo10, slider_logo11, slider_logo12, slider_logo13, slider_logo14, slider_logo15, slider_logo16, slider_logo17, slider_logo18, slider_logo19, slider_logo2, slider_logo20, slider_logo21, slider_logo22, slider_logo23, slider_logo24, slider_logo3, slider_logo4, slider_logo5, slider_logo6, slider_logo7, slider_logo8, slider_logo9 } from "@/src/assets/newladingpage/NewSlider";
import { newArrCard, tesimonialsArrCard } from "@/src/types";

export const  newCardArr:newArrCard[]= [
    {
        id:1,
        img: Staticmedia,
        title:'Static Media',
        content:'Placed at high footfall locations within the co-work spaces the corporate elites actively engage and notice our brand activations.',


    },
    {
        id:2,
        img: Digitalmedia,
        title:'Digital Media',
        content:'Engage high-value professionals all day long at hybrid workplaces lobbies, elevator banks, and common areas',

    },

    {
        id:3,
        img: Ongroundactivation,
        title:'On-Ground Activation',
        content:'Understanding the brand objectives, we conceptualize and execute customized engagements within flexible workspaces.',
    },

    // {
    //     id:4,
    //     img: gmail,
    //     title:'Mail',
    //     content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?',

    // }


]

export const  tesimonialsCardArr:tesimonialsArrCard[]= [
    {
        id:1,
        subtitle:'Praesent tincidunt suscipit lacus vel dictum.Praesent nisl viverra sit amet sem sed porta. Quisque ac purus ipsum. Sed facilisis sed egestas dolor.',
        title:'Elizabeth Hobbs',
        content:'Web Designer',
        img: img1,
    },

    {
        id:2,
        subtitle:'Praesent tincidunt suscipit lacus vel dictum.Praesent nisl viverra sit amet sem sed porta. Quisque ac purus ipsum. Sed facilisis sed egestas dolor.',
        title:'Elizabeth Hobbs',
        content:'Web Designer',
        img: img2,
    }

    // {
    //     id:3,
    //     subtitle:'',
    //     title:'Mail',
    //     content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?',
    //     img: gmail,
    // },

    // {
    //     id:4,
    //     subtitle:'',
    //     title:'Mail',
    //     content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?',
    //     img: gmail,
    // }
]

export const aboutusArr=[
    {
        id:1,
        title:"Captive Audience ",
        list:{
            key:11,
            subTitle:"Captive Audience",
            descriptionOne:"Corporate professionals spend a significant amount of time in the workplace. They have repetitive work patterns. Such captive audiences are extremely receptive to brand communications and engagements and actively seeking new engagements to break their monotonous work routines.",
            // descriptionTwo:"",
            img:[
                {
                    id:111,
                    img1:captiveImg1
                },
                {
                    id:112,
                    img1:captiveImg2
                },
                {
                    id:113,
                    img1:captiveImg3
                },
            ]
        }
    },
    {
        id:2,
        title:"High Peer-To-Peer Interaction",
        list:{
            key:21,
            subTitle:"High Peer-To-Peer Interaction",
            descriptionOne:"Workplace marketing allows for high levels of peer-to-peer interaction, as professionals are likely to share information and experiences with their colleagues. This can help to amplify a brand's message and increase its reach.",
            // descriptionTwo:"When clients are loyal to your brand, they are more likely to recommend your services to others. This can lead to positive word-of-mouth marketing, which can help to attract new clients and grow your business.",
            img:[
                {
                    id:211,
                    img1:brandLoyality
                },
                {
                    id:212,
                    img1:brandLoyality1
                },
                {
                    id:213,
                    img1:brandLoyality2
                },
            ]
        }
    },
    {
        id:3,
        title:"Clutter-Free Habitats",
        list:{
            key:31,
            subTitle:"Clutter-Free Habitats",
            descriptionOne:" Modern workplaces boast state-of-the-art infrastructure and world-class amenities. Corporates in such workplaces are more responsive to marketing engagements since they are in a clutter-free environment with fewer distractions. The effectiveness of workplace marketing campaigns is significantly increased as a result.",
            // descriptionTwo:" Create an opportunity for customers to engage with your brand on a deeper level by providing a memorable experience, build an emotional connection and increase their likelihood of making a purchase.",
            img:[
                {
                    id:311,
                    img1:parsionalizeTouch
                },
                {
                    id:312,
                    img1:parsionalizeTouch1
                },
                {
                    id:313,
                    img1:parsionalizeTouch2
                },
            ]
        }
    },
]
export const ourTeamArr=[
    {
        id:1,
        img:ourTeamImg1,
        name:'Digital Media',
        position:'Engage high-value professionals throughout the day on digital screens placed at lobbies, elevator banks, and community areas.',
        // title:'Static Media',
        // description:'Placed at high footfall locations within the co-work spaces the corporate elites actively engage and notice our brand activations.',
        
    },
    {
        id:2,
        img:ourTeamImg2,
        name:'Brand Activations',
        position:'Understanding the brand objectives, we conceptualize and execute customized on-ground engagements. Pop-up stores, lead generation, product sampling, and such activations right at the heart of these office spaces.',
        // title:"Book a Slot",
        // description:"Collaborating with Century Breeze and Century Ethos for generating leads."
    },
    {
        id:3,
        img:ourTeamImg3,
        name:'Tactical Media',
        position:'Standees, Tabletops, Brochure stands, and other tactical media approaches at high footfall locations within workspaces.',
        // title:"Book a Slot",
        // description:"Partnering with KFC to promote their special lunch offers at co-work space."
    },
]

export const newSliderArr=[
    {
        id:1,
        img:slider_logo1
    },{
        id:2,
        img:slider_logo2
    },
    {
        id:3,
        img:slider_logo3
    },
    {
        id:4,
        img:slider_logo4
    },
    {
        id:5,
        img:slider_logo5
    },
    {
        id:6,
        img:slider_logo6
    },
    {
        id:7,
        img:slider_logo7
    },
    {
        id:8,
        img:slider_logo8
    },
    {
        id:9,
        img:slider_logo9
    },
    {
        id:10,
        img:slider_logo10
    },
    {
        id:11,
        img:slider_logo11
    },
    {
        id:12,
        img:slider_logo12
    },
    {
        id:13,
        img:slider_logo13
    },
    {
        id:14,
        img:slider_logo14
    },
    {
        id:15,
        img:slider_logo15
    },
    {
        id:16,
        img:slider_logo16
    },
    {
        id:17,
        img:slider_logo17
    },
    {
        id:18,
        img:slider_logo18
    },
    {
        id:19,
        img:slider_logo19
    },
    {
        id:20,
        img:slider_logo20
    },
    {
        id:21,
        img:slider_logo21
    },
    {
        id:22,
        img:slider_logo22
    },
    {
        id:23,
        img:slider_logo23
    },
    {
        id:24,
        img:slider_logo24
    },
]


export const newSectionArr=[
    {
        id:1,
        img:addslider1
    }, {
        id:2,
        img:addslider2
    },{
        id:3,
        img:addslider3
    },{
        id:4,
        img:addslider4
    },{
        id:5,
        img:addslider52
    },{
        id:6,
        img:addslider6
    },{
        id:7,
        img:addslider32
    },
    {
        id:8,
        img:addslider8
    },
    {
        id:9,
        img:addslider9
    },
    {
        id:10,
        img:addslider33
    },
    {
        id:11,
        img:addslider11
    },
    {
        id:12,
        img:addslider12
    },
    {
        id:13,
        img:addslider13
    },
    {
        id:14,
        img:addslider14
    },
    {
        id:15,
        img:addslider15
    },
    {
        id:16,
        img:addslider34
    },
    {
        id:17,
        img:addslider17
    },
    {
        id:18,
        img:addslider18
    },
    {
        id:19,
        img:addslider19
    },
    {
        id:20,
        img:addslider20
    },
    {
        id:21,
        img:addslider21
    },
    {
        id:22,
        img:addslider22
    },
    {
        id:23,
        img:addslider23
    },
    {
        id:24,
        img:addslider35
    },
    {
        id:25,
        img:addslider25
    },
    {
        id:26,
        img:addslider26
    },
    {
        id:27,
        img:addslider27
    },
    {
        id:28,
        img:addslider28
    },
    {
        id:29,
        img:addslider36
    },
    {
        id:30,
        img:addslider30
    },
]