
  export const metadata={
        title:'articels'
    }
export default function ({children}){
    return(
        <div>
            <nav>
                <h3>Articall layout</h3>
                {children}
            </nav>
        </div>
    )
}