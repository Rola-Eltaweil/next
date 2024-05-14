export default function showarticls(props){
    console.log(props)

    return(
        <div>
            show all
            <h3>{props.params.title}</h3>
        </div>
    )
}