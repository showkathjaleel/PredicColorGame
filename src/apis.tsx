export const fetchQuestions= async() =>{
    try{
   const response=await fetch('https://the-trivia-api.com/v2/questions')
   const data=await response.json()
   return data
    }catch(err) {
    console.log("🚀 ~ file: App.tsx:55 ~ fetchQuestions ~ err:", err)
  
    }
  }