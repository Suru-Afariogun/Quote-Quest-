import { useState,useEffect } from "react";
  


export const Quest=()=>{
    const [currentQuote,setError] = useState(0)

    const[quotes,choices,correctAnswers] = quotes[currentQuote]

    return(
        <div>
            <span className="active-quote">{currentQuote+1}</span>
            <span className="total-quote">{question.length}</span>
        </div>
    )
    
} 
export default Quest