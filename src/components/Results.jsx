import { useHistory } from "react-router"
import DisplayResult from './DisplayResult'
export default function Results(props){
    let history = useHistory()
    console.log(history.location.state)
    let userData = history.location.state.data
    return (
        <div className = 'results'><h1>Results Page</h1>
        <p>Score : {history.location.state.score}</p>
        <div className="display-results">
            {userData.map(data => <DisplayResult value = {data}/>)}
        </div>
        </div>
    )
}