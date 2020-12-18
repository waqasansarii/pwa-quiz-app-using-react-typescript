import { quizQuestion, quiz } from '../types/types'

export const getCatagory= async()=>{
    const catagory = await fetch(`https://opentdb.com/api_category.php`)
    const catogoryJson = await catagory.json()
    return    catogoryJson
    
}
export const getQuizQuestions = async (num:number,id:string,med:string) => {
    
        const res = await fetch(`https://opentdb.com/api.php?amount=${num}&category=${id}&difficulty=${med}&type=multiple`);
    const data: quizQuestion[] = await res.json()
 
    const {results}:any =data 
    const map:quiz[] = results.map((value:quiz)=>{
           let obj ={
            correct_answer :value.correct_answer,
            incorrect_answers:value.incorrect_answers,
            question : value.question,
            options: value.incorrect_answers.concat(value.correct_answer).sort(()=> 0.5 - Math.random()) 
           }
           return obj;
    });
    return {
        map,
    }
}
