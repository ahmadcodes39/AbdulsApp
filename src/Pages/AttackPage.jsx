import React from "react";
import CommonOutput from "../Components/CommonOutput";
import { useContext } from "react";
import { AppContext } from "../UseContext/AppContext";
import ResultTable from "../Components/ResultTable";

const AttackPage = () => {
    const {dataset,model} = useContext(AppContext)
    const headers = ['Base Model Accuracy', 'Attack Accuracy'];
    const dataContent = [[0.64, 0.59]];

    const data=[dataset,model, 0.64,"Membership",0.59]
  return (
    <div>
      <CommonOutput
        srNo={3}
        title={"Check Attack Result"}
        description={
          "The results show that some membership information was leaked (the attack accuracy exceeds randomly guessed predictions of 0.5). Click Next to choose a mitigation to reduce this privacy risk."
        }
        data={data}
      />

      <ResultTable headers={headers} dataContent={dataContent} />
    </div>
  );
};

export default AttackPage;
