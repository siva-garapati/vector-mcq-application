import React, {useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import IdInput from '../Components/IdInput';
import Assesment from '../Components/Assesment';

const Home = () => {

    const [id,setId] = useState("")
    const [data, setData]= useState('')
    const {assesmentId} = useParams()
    console.log(assesmentId)

    const startTest=()=>{
        console.log(assesmentId, id)
        axios.get(`http://localhost:5000/get/${assesmentId}`).then((res)=>{
            console.log('data found',res.data);
            setData(res.data.assesment)
        }).catch((err)=>{
            console.log(err.message)
        })
    }

  return (
    <div>
        {
            !data && <IdInput idObj={{id, setId}} setData={setData} startTest={startTest}/>
        }
        {
            data && <Assesment data={data}/>
        }
    </div>
  )
}

export default Home