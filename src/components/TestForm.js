import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const TestForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("required!")
      .email("invalid email!"),
    password: Yup.string().required("required!")
  });
  const formik = useFormik({
    initialValues: {
      username: "zz",
      password: ""
    },
    onSubmit: values => {
      console.log(values);
      formik.setValues({ username: "", password: "" });
      formik.setTouched({});
    },
    // validate: values => {
    //   //console.log(values);
    //   let errors = {};
    //   if (!values.username) errors.username = "username is required";
    //   if (!values.password) errors.password = "password is required";

    //   return errors;
    // }
    validationSchema
  });
  // console.log(formik.values);
  // console.log(formik.touched);
  // console.log(formik.errors);
  // console.log(formik.getFieldProps("username"));
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          // name="username"
          // value={formik.values["username"]}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("username")}
        />
        {formik.touched.username && formik.errors.username && (
          <p>{formik.errors.username}</p>
        )}
        <br />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={formik.values["password"]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <p>{formik.errors.password}</p>
        )}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestForm;
