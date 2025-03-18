import CommonOutput from "../Components/CommonOutput";
import React, { useContext } from "react";
import { AppContext } from "../UseContext/AppContext";
import SelectOption from "../Components/SelectOption";

const MitigatePage = () => {
  const data = [
    {
      title: "Differential Privacy",
      description:
        "Applying differential privacy (DP) to model training entails adding carefully crafted noise during training to reduce the effect of any single individual on the model’s outcome, thus protecting training sets from privacy leakage and countering membership attacks. Should be selected when a formal privacy guarantee is required and when the training procedure can be replaced. Works for tabular or non-tabular data. The privacy loss parameter or “privacy budget” is called epsilon (lower epsilon means better privacy)",
    },
    {
      title: "Model anonymization",
      description:
        "k-anonymity is a method to reduce the likelihood of any single person being identified when a dataset is linked with external data sources. The approach is based on generalizing attributes until each record becomes indistinguishable from at least k−1 others. Model-guided anonymization anonymizes training data in a way that is tailored to a specific ML model, resulting in higher accuracy. Should be selected when a model-agnostic solution is required (single implementation for different model types) or when the training procedure cannot be replaced. Works for tabular data only. The privacy parameter is k (higher k means better privacy).",
    },
  ];

  const { dataset, model } = useContext(AppContext);
  const dataContent = [dataset, model, 0.73, "Membership", 0.54];
  return (
    <>
      <CommonOutput
        srNo={4}
        title={"Choose mitigation"}
        description={
          "We have provided two mitigations that can be used to reduce privacy risks for this model. Choose one and then click Next to see the results of applying it."
        }
        data={dataContent}
      />
      <SelectOption data={data} type={"mitigation"} />
    </>
  );
};

export default MitigatePage;
