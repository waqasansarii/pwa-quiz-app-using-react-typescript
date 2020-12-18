
export type quizQuestion ={
    catagory :string
    correct_answer:string
    difficulty:string
    incorrect_answer:string[]
    question:string
    type:string

}

export type quiz ={
    correct_answer:string
    incorrect_answers:string[]
    question:string
    options:string[]
}

export type catagory ={
    id:number
    name:string
}
export type setLink={
    id?:string 
    medium?:string 
    num?:number
}
export type sent={
    num:number
    id:string
    medium:string
  }

  export type propsType={
    list:catagory[]
   handleId: (event:React.ChangeEvent<HTMLSelectElement>)=>void
   handleChange: (event:React.ChangeEvent<HTMLSelectElement>)=>void
   handledifficulty: (event:React.ChangeEvent<HTMLSelectElement>)=>void
   quizStart: ()=>void
   disable:boolean

}

export type propsFunc={
    question:string
    options:string[]
    func: ()=>void
    answerFunc:(event:React.MouseEvent<HTMLInputElement>)=>void
    disable:boolean
    SNo:number
}

export type scoreProps={
    getScore:number
    backHome:()=>void
    total:number
}