import Options from "./Options"
import Question from './Question'
import Confetti from 'react-dom-confetti'
import { useState } from 'react'

export default function Quiz(props) {
    let [score, setScore] = useState(0)
    let [choice, setChoice] = useState([])
    let [counter, setCounter] = useState(0)
    let [selected, setSelected] = useState(null)
    let [trigger, setTrigger] = useState(false)
    let questions = [
        {
            question: 'Who sells sea-shells at the sea shore?',
            options: ['She', 'Me', 'They', 'You'],
            correctOption: 0
        },
        {
            question: 'Who let the dogs out?',
            options: ['Me', 'You', 'They', 'Who? Who, Who, Who'],
            correctOption: 3
        },
        {
            question: 'What is love?',
            options: ['Baby dont hurt me, dont hurt me, no more', 'How would I know?', 'Its lunch time, come tomorrow', 'Love is an illusion'],
            correctOption: 0
        },
        {
            question: 'Who likes to move it, move it?',
            options: ['King Julian', 'Alex', 'Kowalski', 'Marty'],
            correctOption: 0
        },
        {
            question: 'What dont lie?',
            options: ['Chips', 'Philips', 'Hips', 'Lips'],
            correctOption: 2
        },
        {
            question: 'What means no worries?',
            options: ['Lacuna Potato', 'Hastalavista Baby', 'Bob Marley', 'Hakuna Matata'],
            correctOption: 3
        },
        {
            question: 'Who you gonna call?',
            options: ['Lost Misters', 'GhostBusters', 'Lipsmackers', 'Rob Schneider'],
            correctOption: 1
        },
        {
            question: 'With great power comes what?',
            options: ['great responsibility', 'huge power bills', 'lunacy', 'narcissism'],
            correctOption: 0
        }
    ]
    let clickHandler = (index) => {
        if(selected!==null){
            return
        }
        if (index === questions[counter].correctOption) {
            setScore(score + 10)
            setTrigger(true)
        }
        setSelected(index)
        if (counter === questions.length - 1) {
            console.log('Game Over')
        }
        else {
            setTimeout(() => {
                setCounter(counter + 1)
                setSelected(null)
                setTrigger(false)
            }, 2000)
        }

        let choiceCopy = [...choice]
        choiceCopy.push(questions[counter].options[index])
        setChoice(choiceCopy)
    }
    return (
        <div className="question">
            <p>Score: {score}</p>
            <Question value={questions[counter].question} />
            <div className='options'>{questions[counter].options.map((value, index) => <Options isSelected = {selected === index} option={value} index={index} method={clickHandler} isCorrect={index === questions[counter].correctOption} key={index} />)}</div>
            <Confetti active={trigger} />
        </div>
    )
}