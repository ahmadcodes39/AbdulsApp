import React, { useContext } from "react";
import { AppContext } from "../UseContext/AppContext";

const SelectOption = ({ data, type }) => {
  const { dataset, setDataset, model, setModel, mitigation, setMitigation } =
    useContext(AppContext);

  const handleChange = (event) => {
    if (type === "dataset") {
      setDataset(event.target.value);
    } else if (type === "model") {
      setModel(event.target.value);
    } else if (type === "mitigation") {
      setMitigation(event.target.value);
    }
  };

  return (
    <div className="flex flex-col">
      {data.map((item, index) => (
        <div key={index} className="px-5 py-4">
          <h1 className="text-md font-bold">
            <input
              type="radio"
              name={type}
              id={`${type}-${index}`}
              value={item.title}
              checked={
                type === "dataset"
                  ? dataset === item.title
                  : type === "model"
                  ? model === item.title
                  : mitigation === item.title
              }
              onChange={handleChange}
            />{" "}
            {item.title}
          </h1>
          <p className="px-3">{item.description}</p>
          <p className="text-blue-500 px-3 cursor-pointer">Learn more</p>
        </div>
      ))}
    </div>
  );
};

export default SelectOption;
