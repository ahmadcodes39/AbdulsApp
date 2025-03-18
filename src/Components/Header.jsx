import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../UseContext/AppContext";
import SelectOptionModel from "../Models/SelectOptionModel";

const steps = [
  { name: "Data", path: "/" },
  { name: "Model", path: "/model" },
  { name: "Attack", path: "/attack" },
  { name: "Mitigate", path: "/mitigate" },
  { name: "Compare", path: "/compare" },
];

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState(null);
  const { dataset, model, mitigation } = useContext(AppContext);

  // Updated handleNext function
  const handleNext = () => {
    if (currentStep === 0 && dataset == null) {
      setType("dataset");
      setIsModalOpen(true);
      return;
    }
    if (currentStep === 1 && model == null) {
      setType("model");
      setIsModalOpen(true);
      return;
    }
    if (currentStep === 3 && mitigation == null) {
      setType("mitigation");
      setIsModalOpen(true);
      return;
    }
  
    // Move to the next step only if the validation is passed
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      navigate(steps[currentStep + 1].path);
    }
  };
  
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      navigate(steps[currentStep - 1].path);
    }
  };

  return (
    <div className="flex justify-between items-center p-2 w-[100%] bg-gray-100">
      <div className="flex flex-col px-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-500">
          AI Privacy 360 - Demo
        </h2>

        {/* Stepper Navigation */}
        <div className="flex items-center space-x-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <motion.div
                className={`w-8 h-8 flex items-center justify-center rounded-full 
                  ${
                    index === currentStep
                      ? "bg-blue-500 text-white"
                      : "border-2 border-gray-500 text-gray-500"
                  }`}
                animate={{ scale: index === currentStep ? 1.2 : 1 }}
              >
                {index === currentStep ? "●" : "○"}
              </motion.div>
              {index < steps.length - 1 && (
                <div className="w-8 h-1 bg-gray-400"></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Labels */}
        <div className="flex space-x-10 mt-2">
          {steps.map((step, index) => (
            <span
              key={index}
              className={`text-sm ${
                index === currentStep
                  ? "text-blue-500 font-semibold"
                  : "text-gray-500"
              }`}
            >
              {step.name}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 px-4 flex space-x-4">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <SelectOptionModel
        type={type}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setType(null); // Reset type when closing
        }}
      />
    </div>
  );
}
