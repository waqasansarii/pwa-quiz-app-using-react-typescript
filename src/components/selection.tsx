import React from 'react'
import { catagory, propsType } from '../types/types'
import '../css/selection.css'



const Select: React.FC<propsType> = ({ list, handleId, handleChange, handledifficulty, quizStart,disable }) => {
    const { trivia_categories }: any = list

    if (trivia_categories === undefined)
        return <h2>loading..</h2>
    return (
        <div className='container'>

            <div className='main_div_selection'>

                <div>
                    <select name="number" className='number'  onChange={handleChange} >
                        <option  value="">choose number of questions</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                    </select>
                </div>
                <div>
                    <select name="catagory" className='catagory' id=""
                        onChange={handleId}
                        
                    >
                        <option value="">choose catagory</option>
                        {trivia_categories.map((obj: catagory) => {
                            return (

                                <option value={obj.id} key={obj.id}>{obj.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <select name="medium" className='medium'  onChange={handledifficulty}>
                        <option value="">choose questions type</option>
                        <option value="easy">easy</option>
                        <option value="medium">medium</option>
                        <option value="hard">hard</option>
                    </select>
                </div>
                <button className={!disable? 'start' : 'start_btn'} disabled={!disable} onClick={quizStart}>Quiz Start </button>
            </div>
        </div>
    )
}

export default Select