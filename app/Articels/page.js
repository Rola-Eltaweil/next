
import Link from "next/link"
export default function Articels(){
    return(
        <div>
            <h3>Articels page</h3>
            <Link href="/post">
            <button>Go to postpage</button>
            </Link>
        </div>
    )
}