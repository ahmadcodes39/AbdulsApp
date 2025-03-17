import React from 'react'
import MainHeading from '../Components/MainHeading'
import SelectOption from '../Components/SelectOption'

const data = [
    {
      title: "Data",
      description: "Upload and configure your dataset."
    },
    {
      title: "Model",
      description: "Choose and train your AI model."
    },
    {
      title: "Attack",
      description: "Simulate adversarial attacks on the model."
    },
    {
      title: "Mitigate",
      description: "Apply defense strategies to improve robustness."
    },
    {
      title: "Compare",
      description: "Evaluate results and compare different approaches."
    }
  ];
  
const DataPage = () => {
  return (
    <div>
      <MainHeading srNo={1} title={"Choose dataset"} headline={"We have provided four datasets that have been used to train four different model types. Choose one and then click Next to choose a model type."}/>
      <SelectOption data={data} type={"dataset"}/>
    </div>
  )
}

export default DataPage
