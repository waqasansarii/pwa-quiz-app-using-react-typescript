import React, { useEffect, useState } from 'react';
import { getQuizQuestions, getCatagory } from './services/service'
import Select from './components/selection'
import { catagory, quiz } from './types/types'
import QuizCard from './components/card'
import ScoreCard from './components/score'
import Header from './components/header'
import './App.css';

function App() {

   let [startBtnDis , setStartBtnDis] = useState<boolean>(false)

  let [index, setIndex] = useState<number>(0)
  let [score, setScore] = useState<number>(0)
  let [start, setStart] = useState<boolean>(false)
  let [numOfQues, setNumOfQues] = useState<number>(0)
  let [catagoryId, setCatagoryId] = useState<string>('')
  let [medium, setMedium] = useState<string>('')
  let [catgry, setCatgry] = useState<catagory[]>([])
  let [sNo, setSno] = useState<number>(1)

  const [quiz, setQuiz] = useState<quiz[]>([])
  let [scoreCard, setScoreCard] = useState<boolean>(false)

  useEffect(() => {
    async function quizFunc() {

      const catogoryName = await getQuizQuestions(numOfQues, catagoryId, medium)
      const { map } = catogoryName
      setQuiz(map)
      // console.log(map)
    }
    quizFunc()
    if(numOfQues !==0 && catagoryId !=='' && medium !==''){
      console.log(numOfQues)
      setStartBtnDis(true)
      
    }
    
  }, [numOfQues, catagoryId, medium])
  

  useEffect(() => {
    async function catagory() {

      const catogoryName:catagory[] = await getCatagory()
      setCatgry(catogoryName)

    }
    catagory()
  }, [])

  const [ans, setANs] = useState<string>('')
  const [dis, setDis] = useState<boolean>(false)
  

  function handleIdfun(event: React.ChangeEvent<HTMLSelectElement>):void {
    setCatagoryId(event.target.value);
  }
  
  function handleInput(ev :any )  {
    setNumOfQues(ev.target.value)
    // setStartBtnDis(!false)
  }
  const handleDifficultySelect = (event:React.ChangeEvent<HTMLSelectElement>):void =>{
    setMedium(event.target.value)
  }

  const handleStart = ()=> {
    if(quiz===undefined){
      return <h2>loading.. please wait</h2>
    }
    setStart(true)
  }

  const handleAnswer = (event:React.MouseEvent<HTMLInputElement>):void => {
    setANs(event.currentTarget.value)
    setDis(!false)
  }
  const handleNext = () => {
    setDis(false)
    setIndex(++index)
    setSno(++sNo)
    if (quiz.length === index) {
      setIndex(0)
    }

    if (ans === quiz[--index].correct_answer) {
      setScore(++score)
    }
    if (sNo > numOfQues) {
      setSno(1)
      setScoreCard(!scoreCard)
    }
    setANs('')
  }
const handleHome=()=>{
  setScoreCard(!scoreCard)
  setStart(!start)
  setScore(0)
  setNumOfQues(0)
  setCatagoryId('')
  setMedium('')
  setStartBtnDis(false)
}
if(!quiz)
return <h2>Loading...</h2>

  return (
    <div>
      <Header />
      { !start && !scoreCard ?
        <div>
        <Select
        list={catgry}
        handleId={handleIdfun}
        handleChange={handleInput}
        handledifficulty={handleDifficultySelect}
        quizStart={handleStart}
        disable={startBtnDis}
        />
        </div>
        : scoreCard? 
        <ScoreCard getScore={score} backHome={handleHome} total={numOfQues} />
        :start?
        <div>
          <QuizCard
            question={quiz[index].question }
            options={quiz[index].options}
            func={handleNext}
            answerFunc={handleAnswer}
            disable={dis}
            SNo={sNo}
            />
        </div>
        :null
}

    </div>
  );
}

export default App;
