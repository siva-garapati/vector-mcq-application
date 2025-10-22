import React, { useState } from "react";

const IdInput = ({ idObj, setData, startTest }) => {
  // console.log(startTest, setData)

  const { id, setId } = idObj;

  return (
    <div>
      <form action={startTest}>
        <div className="">
          <label htmlFor="id">Vector Id</label>
          <input
            type="text"
            placeholder="Enter Id"
            required
            // pattern="\w{9,9}"
            onChange={(e) => setId(e.target.value)}
            value={id}
            // title="Id must be 9 characters"
          />
          {/* <span className="validity"></span> */}

          <button disabled={!id} type="submit" className="border-2 border-blue-950 p-1 bg-amber-300 cursor-pointer">
            Start Test
          </button>
        </div>
      </form>
    </div>
  );
};

export default IdInput;
