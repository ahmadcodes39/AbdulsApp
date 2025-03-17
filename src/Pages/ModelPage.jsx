import React, { useContext } from "react";
import SelectOption from "../Components/SelectOption";
import ModelPageHeading from "../Components/ModelPageHeading";
import { AppContext } from "../UseContext/AppContext";

const data = [
  {
    title: "Data",
    description: "Upload and configure your dataset.",
  },
  {
    title: "Model",
    description: "Choose and train your AI model.",
  },
  {
    title: "Attack",
    description: "Simulate adversarial attacks on the model.",
  },
  {
    title: "Mitigate",
    description: "Apply defense strategies to improve robustness.",
  },
  {
    title: "Compare",
    description: "Evaluate results and compare different approaches.",
  },
];

const ModelPage = () => {
  const { dataset, setDataset } = useContext(AppContext);

  return (
    <div>
      <ModelPageHeading
        srNo={2}
        title={"Choose model type"}
        headline={dataset} // Display selected dataset
        description={
          "We have provided four models, trained on the selected dataset, to explore privacy risks. Choose one and then click Next to see the results of a membership attack on that model."
        }
      />
      <SelectOption data={data} setDataset={setDataset} type={"model"} /> 
    </div>
  );
};

export default ModelPage;
