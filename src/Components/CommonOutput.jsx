import React from "react";

const CommonOutput = ({ srNo, title, data, description }) => {
  return (
    <div className="flex flex-col gap-3 mt-16 ">
      <h1 className="text-black text-xl font-bold">
        {srNo}. {title}
      </h1>
      <section className="px-7">
        <p>
          <strong>Dataset: </strong>
          {data[0]}
        </p>
        <p>
          <strong>Model: </strong>
          {data[1]}
        </p>
        <p>
          <strong>Base Model Accuracy: </strong>
          {data[2]}
        </p>
        <p>
          <strong>Attack Type: </strong>
          {data[3]}
        </p>
        <p>
          <strong>Attack Accuracy: </strong>
          {data[4]}
        </p>
        {data[5] != null && (
          <p>
            <strong>Mitigation: </strong>
            {data[5]}
          </p>
        )}
      </section>
      <p className="mt-10 px-7">{description}</p>
    </div>
  );
};

export default CommonOutput;
