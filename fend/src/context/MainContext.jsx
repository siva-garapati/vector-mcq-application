import { createContext, useState } from "react";

const MainContext = createContext(null);

export const MainProvider = ({ children }) => {
    const [assesmentId, setAssesmentId] = useState('34b2f781-5b0e-4c6a-a541-a86e9edd32cd')
    const [userId,  setUserId] = useState('')
    const [questionsData, setQuestionsData] = useState('')
    const [score, setScore] = useState('')

    const fetchQuestions = async () =>{
        const data = await axios.get(`http://localhost:5000/get/${assesmentId}`)
        setQuestionsData(data)
    }

    return <MainContext.Provider value={{
        assesmentId, setAssesmentId,
        userId, setUserId,
        questionsData, fetchQuestions
    }}>
        {children}
    </MainContext.Provider>
};