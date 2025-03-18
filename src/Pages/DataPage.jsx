import React from 'react'
import MainHeading from '../Components/MainHeading'
import SelectOption from '../Components/SelectOption'

const data = [
  {
    title: "Heart Disease Dataset",
    description: "Predicts the likelihood of heart disease based on medical parameters.",
  },
  {
    title: "Loan Approval Dataset",
    description: "Predicts whether a loan application will be approved based on financial history.",
  },
  {
    title: "Fraud Detection Dataset",
    description: "Predicts fraudulent transactions using customer behavior patterns.",
  },
  {
    title: "Spam Email Dataset",
    description: "Predicts whether an email is spam or not based on text analysis.",
  },
  {
    title: "House Price Prediction Dataset",
    description: "Predicts house prices based on features like location, size, and amenities.",
  },
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
