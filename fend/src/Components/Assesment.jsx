import React from "react";
import { useState } from "react";
import axios from "axios";
import CorrectAnswers from "./CorrectAnswers";

const Assesment = ({ data, id }) => {
  const [choosenOptions, setChoosenOptions] = useState();
  const [score, setScore] = useState('')

  const setOption = (e, qId) => {
    setChoosenOptions((p) => ({ ...p, [qId]: e.target.value }));
  };

  const submiTest = () => {
    let submitObj = {
      userId: id,
      assesmentId: data._id,
      choosenOptions,
    };

    console.log(submitObj);

    axios
      .post(`http://localhost:5000/evaluate`, submitObj)
      .then((res) => {
        console.log(res.data);
        setScore(res.data.score)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h2>{data.title}</h2>

      <div>
        {data?.questionsArray.map((q, ind) => {
          return (
            <div>
              <p>{`${ind + 1}. ${q.question}`}</p>
              <div>
                {q.options.map((opt, ind) => {
                  return (
                    <>
                      <input
                        type="radio"
                        name={q._id}
                        value={ind}
                        
                        onChange={(e) => setOption(e, q._id)}
                      />
                      {opt}
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <button onClick={submiTest}>Submit Test</button>
      {
        <CorrectAnswers score={score}/>
      }
    </div>
  );
};

export default Assesment;
