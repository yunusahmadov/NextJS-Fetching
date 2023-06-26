// 'use client'

import Image from "next/image"
const getPostsData= async()=>{
 const res =await fetch('https://jsonplaceholder.typicode.com/posts')
 return res.json();
}
const getUserData= async()=>{
  const res =await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
 }

const getDogData =async()=>{
  //cache:'no-store Означает что в данном случае картинка не будет кешироваться ,и при каждом рефреше будет новая картинка
  const res=await fetch('https://dog.ceo/api/breeds/image/random',
  {
    // cache:'no-store'
    //Revalidate предотвращает рефреш в течении указанных секунд во избежание случайного клика
    next:{
      revalidate:10,
    }
  })
  return res.json();
}
 


export default async function ListOfPosts() {
//  const posts=await getPostsData()
const [posts,users,dog]=await Promise.all(
  [
    getPostsData(),
    getUserData(),
    getDogData()
  ])

 console.log(posts);
 console.log(users);

 
    return (
      <div className="text-white">
       {
        posts.map((post:Posts)=>{
         return <div>
        <Image src={dog.message} alt='dog' width={200} height={200}/>
              <p>{post.title}</p>
              <p>{post.id}</p>
          </div>
        })
       }
             {
        users.map((user:any)=>{
          return <p>
            {user.name}
          </p>
        })
      }
      </div>


    );
}