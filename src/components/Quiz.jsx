import Options from "./Options"
import Question from './Question'
import { useState } from 'react'
import { useHistory } from "react-router"
let choice = []
let score = 0
// let intervalId


export default function Quiz(props) {

    let [counter, setCounter] = useState(0)
    let [selected, setSelected] = useState(null)
    // let [progressWidth, setProgressWidth] = useState(100)
    let history = useHistory()
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
    let updateChoice = (index) => {
        choice.push(questions[counter].options[index])
    }
    let clickHandler = (index) => {
        if (selected !== null) {
            return
        }
        // startInterval()
        if (index === questions[counter].correctOption) {
            score += 10
        }
       
        setSelected(index)
        // stopInterval(intervalId)
        if (counter === questions.length - 1) {
            updateChoice(index)

            let userData = questions.map((question, index) => [question.question, question.options[question.correctOption], choice[index], question.options[question.correctOption] === choice[index]])
            setTimeout(() => history.push({
                pathname: './results',
                state: { data: userData, score: score }
            }), 1000)

            console.log('Game Over')
        }
        else {
            setTimeout(() => {
                setCounter(counter + 1)
                // setProgressWidth(100)
                setSelected(null)
            }, 1000)
        }

        updateChoice(index)
    }
    // let count = 0
    // useEffect(() => {
    //     function startInterval(){
    //     let intervalId = setInterval(() => {
    //         if(progressWidth <=0){
    //             clearInterval(intervalId)
    //         }
    //         setProgressWidth((p) => p - 0.005)
    //     }, 10)
    // }
    // }, [])

    return (
        <div className="question">
            <p>Score: {score}</p>
            <Question value={questions[counter].question}/>
            <div className='options'>
                {questions[counter].options.map((value, index) =>
                    <Options
                        isSelected={selected === index}
                        option={value}
                        index={index}
                        method={clickHandler}
                        isCorrect={index === questions[counter].correctOption}
                        key={index}
                    />)}
            </div>
            {/* <div className="progress-bar" style={{ width: progressWidth + '%', backgroundColor: progressWidth < 67 ? progressWidth < 34 ? 'red' : 'yellowgreen' : 'seagreen' }}></div> */}
        </div>
    )
}