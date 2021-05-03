import Confetti from 'react-dom-confetti'

export default function Options(props) {
    return (
        <button onClick={() =>props.method(props.index)} style={{ backgroundColor: props.isSelected ? props.isCorrect ? 'seagreen' : 'red' : 'transparent' }}>
            {props.option}
            <Confetti active={props.isCorrect && props.isSelected} />
        </button>
    )
}