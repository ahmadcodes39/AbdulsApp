import React, { useContext } from "react";
import { AppContext } from "../UseContext/AppContext";

const SelectOption = ({ data, type }) => {
  const { dataset, setDataset, model, setModel } = useContext(AppContext);

  const handleChange = (event) => {
    if (type === "dataset") {
      setDataset(event.target.value); // Update dataset
    } else if (type === "model") {
      setModel(event.target.value); // Update model
    }
  };
  console.log(dataset)
  console.log(model)

  return (
    <div className="flex flex-col">
      {data.map((item, index) => (
        <div key={index} className="px-7 py-4">
          <h1 className="text-md font-bold">
            <input
              type="radio"
              name={type} // Ensure different radio groups for dataset and model
              id={`${type}-${index}`}
              value={item.title} // Store the selected value
              checked={type === "dataset" ? dataset === item.title : model === item.title} // Maintain selection
              onChange={handleChange} // Update the correct state
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
