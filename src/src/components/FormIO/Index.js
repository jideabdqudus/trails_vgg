import React from "react";
import { FormBuilder } from "react-formio";
import "./styles.scss";
import "./Index.css";
const FormIO = () => {
  return (
    <div>
      <div>
        <div class="jumbotron">
          <div class="container" id="section2">
            <form>
              <FormBuilder
                form={{ display: "form" }}
                src={`https://pntjtuillpyztjb.form.io/form`}
                onChange={(schema) => {
                  console.log(schema);
                }}
              />
              <br />
              <button
                type="submit"
                value="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormIO;
