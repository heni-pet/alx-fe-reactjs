import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string()
    .trim()
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
});

export default function FormikForm() {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">
        User Registration (Formik)
      </h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted:", values);
          resetForm();
        }}
      >
        <Form>
          <div className="mb-3">
            <label className="block mb-1">Username</label>
            <Field
              type="text"
              name="username"
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter your username"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="mb-3">
            <label className="block mb-1">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="mb-3">
            <label className="block mb-1">Password</label>
            <Field
              type="password"
              name="password"
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
