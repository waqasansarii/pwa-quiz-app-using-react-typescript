import React from 'react'
import '../css/card.css'
import {propsFunc} from '../types/types'




const QuizCard: React.FC<propsFunc> = ({ question, options, func, answerFunc ,disable,SNo}) => {
     if(question===undefined)
     return <h2>loading... please wait</h2>

    return (
        <div className='container'>
            <div className='main_card_div'>
                <div>
                    <div className='qst_div'>
                        <p>{SNo})</p>
                        <p className='question'>{question}</p>
                    </div >
                    <hr/>
                    <div className='ansr_btn_div'>
                        {
                            options.map((opt: string, ind: number) => {
                                return (
                                    <div key={ind}>
                                    <input type="button" className='ansr_btn' onClick={answerFunc}   value={opt} />
                                </div>
                                )
                            })
                        }
                        {disable?
                        <button  className='next_btn' onClick={func}>next</button>
                        :
                        null
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizCard