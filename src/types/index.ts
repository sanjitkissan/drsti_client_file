import { type } from "os"

export type navArrType ={
    id:number
    title:string
    path:string
}
export type blogArr={
    id:number
    title:string
    date:string
    content:string
    img:{
        src:string
    }
}

export type breadcrumboneArrType={
     id:number
     title:string
     content:string
     btn:string
     img:{
        src:string
    }
}




export type cardArrType={
    id:number
    title:string
    btn:string
    img:{
       src:string
   }
}


export type sliderArr={
    id:number
    title:string
    content:string
    img:{
        src:string
    }
    boxImg:{
        src:string
    }
    
}

export type cardArrHome={
    id:number
    img:imgObj[]
    mt:string
}
export type imgObj={
    img1:{
        src:string
    }
    id:number
}

export type homeGalleryArrType={
    id:number
    img:{
        src:string
    }
}

export type eventBreadcrumbArrType={
    id:number
    img:{
        src:string
    }
}
export type eventGalleryArrType={
    id:number
    title:string
    img:{
        src:string
    }
}

export type newArrCard={
    id:number
    title:string
    content:string
    img:{
        src:string
    }
    
}

export type tesimonialsArrCard={
    id:number
    subtitle:string
    title:string
    content:string
    img:{
        src:string
    }
}

export type blogArrCard={
    id:number
    img:{
        src:string
    }
    title:string
    subtitle:string
    date:string
    Comment:string
    content:string
    btn:string
    cardData:cardDataType
}
export type cardDataType={
    id:number
    img1:{
        src:string
    }
    cardtitleOne:string
    cardtitleTwo:string
    cardtitleThree:string
    cardtitlefour:string
    cardtitlefive:string
     contentOne:string
    contentTwo:string
    contentThree:string
    contentFour:string
    contentFive:string
    contentSix:string
    contentSeven:string
    contentEight:string
    contentNine:string
    contentTen:string
    contentPone:string
    contentPtwo:string
    contentPthree:string
    contentfour:string
    contentPfive:string
    contentPsix:string
    contentPseven:string
    contentPeight:string
    contentPnine:string
    contentPten:string
    contentP11:string
    contentP12:string

}


export type galleryPageArrType={
    id:number,
    categories:string
   list:newList[]
}
export type newList={
    id:number
    img:{
        src:string
    }
}

export type createArrType={
    id:number
    img:{
        src:string
    }
    title:string
    content:string
}

export type OurTeamArrType={
    id:number
    img:{
        src:string
    }
    title:string
    subtitle:string
    content:string
}
export type OurPartnersArrType={
    id:number
    img:{
        src:string
    }
    
}
export type whyDrsticardArrType={
    id:number
    title:string
    description:string
}
export type solutionsArrType={
    id : number
    title:string
    content:string
    linkOne:string
    linkTwo:string 
    img:{
        src:string
    }
    subTitle:string
}

export type heroArrType={
   id:number
   img:{
       src:string
   }
}

export type homeWorkplaceArrType={
    id:number
    img:{
        src:string
    }
}

export type newBreadcrumbArrType={
    id:number
   
    img:{
        src:string
    }
}

export type WorkplaceArrType={
    id:number
   
    img:{
        src:string
    }


}

export type workplaceBreadcrumbArrType={
    id:number
   
    img:{
        src:string
    }
}