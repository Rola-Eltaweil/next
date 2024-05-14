
export const metadata={
    title:''
} 
export default function ({children}){
    return(
        <div>
            <p>all the aposts in the page</p>
            <div style={{background:'black' }}>
            {children}
            </div>
        </div>
    )
}