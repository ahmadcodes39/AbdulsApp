import React from "react";
import { useContext } from "react";
import { AppContext } from "../UseContext/AppContext";
import ResultTable from "../Components/ResultTable";
import CommonOutput from "../Components/CommonOutput";
const ComparePage = () => {
  const { dataset, model , mitigation} = useContext(AppContext);
  const headers = ["k", "Model Accuracy", "attack accuracy"];
  const dataContent = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  const data = [dataset, model, 0.64, "Membership", 0.59,mitigation];
  return (
    <div>
      <CommonOutput
        srNo={5}
        title={"Examine mitigated results"}
        description={
          "The following table shows how model accuracy and attack accuracy trade off for different values of k used by model anonymization mitigation."
        }
        data={data}
      />

      <ResultTable headers={headers} dataContent={dataContent} />
    </div>
  );
};

export default ComparePage;
