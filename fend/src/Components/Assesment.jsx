import React from "react";

const Assesment = ({ data }) => {
  return (
    <div>
      <h2>{data.title}</h2>

      <div>
        {data?.questionsArray.map((q, ind) => {
          return (
            <div>
              <p>{`${ind + 1}. ${q.question}`}</p>
              <div>
                {q.options.map((opt,ind) => {
                  return (
                    <>
                      <input type="radio" name={q._id} value={ind}/>{opt}
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Assesment;
