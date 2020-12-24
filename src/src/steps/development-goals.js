import * as React from "react";

import { Field } from "@progress/kendo-react-form";

import {
  FormInput,
  FormAutoComplete,
  FormRadioGroup,
  FormTextArea,
  FormMaskedTextBox2,
  FormCheckbox,
} from "./form-components.jsx";

import {
  nameValidator,
  requiredValidator,
  programmeValidator,
  codeValidator,
} from "./validators.jsx";

import Laptop from "./laptop-v2.png";

export const ImageThing = <img src={Laptop} />;

const confirmationData = [
  { label: { ImageThing }, value: "phone" },
  { label: "Via Email", value: "email" },
];

const data = [
  {
    id: 1,
    name: "google",
    image:
      "http://tech21info.com/admin/wp-content/uploads/2013/03/chrome-logo-200x200.png",
  },
  {
    id: 2,
    name: "firefox",
    image:
      "http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png",
  },
  {
    id: 3,
    name: "facebook",
    image:
      "http://www.thebusinessofsports.com/wp-content/uploads/2010/10/facebook-icon-200x200.png",
  },
];

export const DevelopmentGoals = (
  <div>
    <span>
      First, select the Sustainable Development Goals (SDGs). Next, further
      specify preferred Indicators that best match your project goals. Now your
      priorities are complete. Click Save & View Questions.
    </span>
    {/* <Field
      key={"cardType"}
      name={"cardType"}
      component={CardSelector}
      validator={requiredValidator}
    /> */}
    <ul>
      <li>
        <input type="checkbox" id="myCheckbox1" />
        <label for="myCheckbox1">
          <img src="http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png" />
        </label>
      </li>
      <li>
        <input type="checkbox" id="myCheckbox2" />
        <label for="myCheckbox2">
          <img src="http://tech21info.com/admin/wp-content/uploads/2013/03/chrome-logo-200x200.png" />
        </label>
      </li>
      <li>
        <input type="checkbox" id="myCheckbox3" />
        <label for="myCheckbox3">
          <img src="http://www.thebusinessofsports.com/wp-content/uploads/2010/10/facebook-icon-200x200.png" />
        </label>
      </li>
    </ul>
  </div>
);
