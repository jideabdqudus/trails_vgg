import * as React from "react";

import { Field } from "@progress/kendo-react-form";
import { CardSelector } from "./card-selector.jsx";
import { FieldWrapper } from "@progress/kendo-react-form";
import { Checkbox } from "@progress/kendo-react-inputs";

import {
  FormInput,
  FormMaskedTextBox,
  FormDateInput,
  FormMultiSelect,
  FormCheckbox,
} from "./form-components.jsx";

import {
  requiredValidator,
  cardValidator,
  cvcValidator,
} from "./validators.jsx";

export const PaymentDetails = (
  <div>
    {/* <Field
      key={"cardType"}
      name={"cardType"}
      component={CardSelector}
      validator={requiredValidator}
    /> */}
    <FieldWrapper>
      <Checkbox
        label="Annual Growth Rate of Real GDP Per Capita"
        key="Annual Growth Rate of Real GDP Per Capita"
        name="indicatorCheckbox"
      />
      <Checkbox
        label="Annual Growth Rate of Real GDP Per Capita"
        key="Annual Growth Rate of Real GDP Per Capita"
        name="indicatorCheckbox"
      />
      <Checkbox
        label="Annual Growth Rate of Real GDP Per Capita"
        key="Annual Growth Rate of Real GDP Per Capita"
        name="indicatorCheckbox"
      />
      <Checkbox
        label="Annual Growth Rate of Real GDP Per Capita"
        key="Annual Growth Rate of Real GDP Per Capita"
        name="indicatorCheckbox"
      />
      <Checkbox
        label="Annual Growth Rate of Real GDP Per Capita"
        key="Annual Growth Rate of Real GDP Per Capita"
        name="indicatorCheckbox"
      />
      <Checkbox
        label="Annual Growth Rate of Real GDP Per Capita"
        key="Annual Growth Rate of Real GDP Per Capita"
        name="indicatorCheckbox"
      />
    </FieldWrapper>
  </div>
);
