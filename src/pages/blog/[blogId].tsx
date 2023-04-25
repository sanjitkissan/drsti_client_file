import Blogpageiner from '@/src/components/blogpage/Blogpageiner';
import Newblogs from '@/src/components/drstinewblog/Newblogs';
import MainLayout from '@/src/layouts/MainLayout';
import { blogsArrCard } from '@/src/utils/drstiblogs';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';


// export async function getStaticPaths() {
  
//         const response = await fetch('http://127.0.0.1:1337/api/blogs/');
//         const jsonData = await response.json();
//         const data =jsonData.data
       
        
//         return {
//           paths: data.map((item:any) => ({
//             params: { blogId: item?.id?.toString() },
//           })),
//           fallback: false,
//         };
    
// };

  


// export async function getStaticProps({params, }:any) {
//   const response = await fetch('http://127.0.0.1:1337/api/blogs/');
//   const jsonData = await response.json();
//   const data =jsonData.data
//   console.log(params)
//   return {
//     props: {
//       data: data.find(
//         (blog:any) => blog?.id?.toString() === params?.blogId
//       ),
//     },
//   };
// }




export default function BlogId() {


  const [uplord, setUplord]=useState<any>([])
    

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('http://localhost:1337/api/blogs/');
              const jsonData = await response.json();
              // console.log(jsonData.data)
              // const preData=jsonData.data
              // const newData=[]
              // const postData=newData.push(preData)
              setUplord(jsonData.data);

          } catch (error) {
              console.log(error);
          }
      };

      fetchData();
  }, [])

console.log(uplord)
    const { query } = useRouter();
    const resData =  uplord.find((blog:any)=>blog?.id?.toString() ===query?.blogId)
    if (!resData) return <h1>Loading...</h1>;
    return (
        <MainLayout>
            <Blogpageiner item={resData}/>
        </MainLayout>
    );
}


  
 