import React from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { Link } from "react-router-dom";

import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';

function signUp({ errors, touched, values }) {
  return (
    <>
      <div className="wrapper">
        <div className="formContent">

          <Form>
            <Field
              type="text"
              id="login"
              className="fadeIn"
              name="username"
            />
          </Form>
        </div>
      </div>
    </>
  )
}

export default signUp;