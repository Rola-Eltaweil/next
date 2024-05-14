

export default async function id(props){
    
    const id=props.params.postid
    console.log(id)


    await new Promise ((resolves)=>{
         setTimeout(()=>{
             resolves()
         },2000)
    })
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            next:{
                revalidate:60,
            },
        }
    )
    const data= await response.json()
   
   
     
    return(
        <div key={data.id} style={{color:'#000',background:'white' ,width:'80%' ,padding:'40px' ,borderRadius:'20px',margin:'30px'}}>
            <h2>Post Details </h2>
            <h3>{data.title}</h3>
            <hr/>
            <p>{data.body}</p>
        </div>
    )
}