import * as React from "react";

import { Field } from "@progress/kendo-react-form";

import {
  FormInput,
  FormUpload,
  FormMaskedTextBox,
  FormAutoComplete,
  FormTextArea,
} from "./form-components.jsx";

import {
  programmeValidator,
  codeValidator,
  requiredValidator,
} from "./validators.jsx";
import { states } from "./data.jsx";

export const CustomImpact = (
  <div>
    <Field
      key={"programmeName"}
      id={"programmeName"}
      name={"programmeName"}
      label={"Programme Name"}
      component={FormInput}
      validator={programmeValidator}
    />
    <Field
      key={"programmeCode"}
      id={"programmeCode"}
      name={"programmeCode"}
      label={"Programme Code"}
      component={FormMaskedTextBox}
      validator={codeValidator}
    />
    <Field
      key={"programmeLocation"}
      id={"programmeLocation"}
      name={"programmeLocation"}
      label={"Programme Location"}
      hint={"Hint: Only Nigerian States available"}
      component={FormAutoComplete}
      data={states}
      validator={requiredValidator}
    />
    <Field
      key={"programmeBanner"}
      id={"programmeBanner"}
      name={"programmeBanner"}
      label={"Programme Banner"}
      hint={"Hint: Only JPG and PNG allowed"}
      component={FormUpload}
    />
    <Field
      key={"programmeDescription"}
      id={"programmeDescription"}
      name={"programmeDescription"}
      label={"Programme Description"}
      component={FormTextArea}
    />
  </div>
);
