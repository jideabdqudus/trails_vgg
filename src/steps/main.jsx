import React, { useState, useCallback } from "react";

import { FormElement, Form } from "@progress/kendo-react-form";
import { ButtonGroup, Button } from "@progress/kendo-react-buttons";
import { Stepper } from "@progress/kendo-react-layout";

import { CustomImpact } from "./custom-impact.js";
import { DevelopmentGoals } from "./development-goals.js";
import { PaymentDetails } from "./payment-details.jsx";
import "../App.css";

const stepPages = [CustomImpact, DevelopmentGoals, PaymentDetails];

const Steps = () => {
  const [step, setStep] = useState(0);
  const [formState, setFormState] = useState({});
  const [steps, setSteps] = useState([
    { label: "Custom Impact", isValid: undefined },
    { label: "SDGs", isValid: undefined },
    { label: "Indicators", isValid: undefined },
  ]);

  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;
  const isPreviousStepsValid =
    steps
      .slice(0, step)
      .findIndex((currentStep) => currentStep.isValid === false) === -1;

  const onStepSubmit = useCallback(
    (event) => {
      const { isValid, values } = event;

      const currentSteps = steps.map((currentStep, index) => ({
        ...currentStep,
        isValid: index === step ? isValid : currentStep.isValid,
      }));

      setSteps(currentSteps);
      setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);

      if (isLastStep && isPreviousStepsValid && isValid) {
        console.log(values);
      }
    },
    [
      step,
      steps,
      setSteps,
      setStep,
      setFormState,
      isLastStep,
      isPreviousStepsValid,
    ]
  );

  const onPrevClick = useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
    },
    [step, setStep]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Stepper value={step} items={steps} />
      <Form
        initialValues={formState}
        onSubmitClick={onStepSubmit}
        render={(formRenderProps) => (
          <div style={{ alignSelf: "center" }}>
            <FormElement style={{ width: 480 }}>
              {stepPages[step]}
              <span
                style={{ marginTop: "40px" }}
                className={"k-form-separator"}
              />
              <div
                style={{
                  justifyContent: "space-between",
                  alignContent: "center",
                }}
                className={"k-form-buttons k-buttons-end"}
              >
                <span style={{ alignSelf: "center" }}>
                  Step {step + 1} of 3
                </span>
                <div>
                  {step !== 0 ? (
                    <Button
                      style={{ marginRight: "16px" }}
                      onClick={onPrevClick}
                    >
                      Previous
                    </Button>
                  ) : undefined}
                  <Button
                    primary={true}
                    disabled={isLastStep ? !isPreviousStepsValid : false}
                    onClick={formRenderProps.onSubmit}
                  >
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
                </div>
              </div>
            </FormElement>
          </div>
        )}
      />
    </div>
  );
};

export default Steps;
