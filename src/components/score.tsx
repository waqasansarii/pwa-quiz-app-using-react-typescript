import { scoreProps } from '../types/types'
import '../css/result.css'


function ScoreCard({ getScore, backHome,total }: scoreProps) {
    return (
        <div className='container'>
            <div className='main_result_div'>
                <div className='score_div'>
                    <p className='score'>you got {getScore} out of {total}</p>
                </div>
                <div>
                    <button className='back_btn' onClick={backHome}>back to home</button>
                </div>
            </div>

        </div>
    )
}

export default ScoreCard