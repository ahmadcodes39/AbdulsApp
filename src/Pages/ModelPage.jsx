import React, { useContext } from "react";
import SelectOption from "../Components/SelectOption";
import ModelPageHeading from "../Components/ModelPageHeading";
import { AppContext } from "../UseContext/AppContext";

const data = [
  {
    title: "Logistic Regression",
    description: "A statistical model that predicts categorical outcomes, often used for binary classification problems like spam detection or loan approval.",
  },
  {
    title: "Decision Tree",
    description: "A tree-like model that splits data into branches based on feature conditions, commonly used for risk assessment and medical diagnoses.",
  },
  {
    title: "Random Forest",
    description: "An ensemble learning model that combines multiple decision trees to improve accuracy and reduce overfitting, useful for fraud detection and sentiment analysis.",
  },
  {
    title: "Support Vector Machine (SVM)",
    description: "A model that finds the optimal boundary between classes in high-dimensional space, often used in image recognition and disease prediction.",
  },
  {
    title: "Neural Network",
    description: "A deep learning model inspired by the human brain that learns complex patterns, widely used in facial recognition, speech processing, and autonomous systems.",
  },
];
;

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
