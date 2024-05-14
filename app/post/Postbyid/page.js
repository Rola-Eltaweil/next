import Link from "next/link"

export default async function postbyid(){

    const response=await fetch('https://jsonplaceholder.typicode.com/posts',{

      next:{
        revalidate:60,
      },
    })
    const data= await response.json()

    const posts=data.map((post)=>(
      <Link href={`/post/Postbyid/${post.id}`}>
         <div key={post.id} style={{display:'flex',justifyContent:'center' }}>
         <div style={{background:'white',color:'#000',borderRadius:'10px',margin:'20px',padding:'30px',width:'60%'}}>
             <h3>{post.title}</h3>
         <p> {post.body}</p>
         </div>
       </div>
      
      
      </Link>
    ))
    
    return(
        <div>
            {posts}
        </div>
    )
}