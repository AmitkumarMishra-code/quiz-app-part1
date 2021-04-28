
export default function Options(props){
    let buttonClicked = () => {
        props.method(props.index)
    }
    return (
        <button onClick = {buttonClicked} style = {{backgroundColor: props.isSelected ? props.isCorrect ? 'green' : 'red': 'transparent'}}>{props.option}</button>
    )
}