import {fetchData} from fetchData 

export const oneQuote =()=>{ return fetchData("https://zenquotes.io/api/random/[your_key]")}

export const multipleQuotes= ()=>{return fetchData("https://zenquotes.io/api/quotes/[your_key]")}

export const dailyQuote =()=>{return fetchData("https://zenquotes.io/api/today/[your_key]")}

export const yesOrNo =()=>{return fetchData("https://yesno.wtf/api")}

