import Posts from "../postpage/page"
export default async function postpage(){

    
       const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
       const data= await response.json()
 
    return(
        <div>
            <h3>post page</h3>
            <h4>{data.title}</h4>
            <h4>{data.id}</h4>

            <Posts/>
        </div>
    ) 
}