export default function DisplayResult(props){
    console.log(props)
    return(
        <div className="line">
            <div className="display-question">{props.value[0]}</div>
            <div className="display-answer">{props.value[1]}</div>
            <div className="display-user-choice" style={{backgroundColor: props.value[3] ? 'seagreen':'red'}}>{props.value[2]}</div>
        </div>
    )
}