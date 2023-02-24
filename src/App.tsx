import React, { useState } from "react";
import "./App.css";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
  fullName: string;
  email: string;
  lastName: string;
  address: string;
  phone: string;
}

const validationSchema = Yup.object({
  fullName: Yup.string().required("Name is required"),
  lastName: Yup.string().required("last Name is required"),
  address: Yup.string().required("address is required"),
  phone: Yup.string().required("phone is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  // password: Yup.string()
  //   .required("Password is required")
  //   .min(6, "Password must be at least 6 characters"),
});

function App() {
  const  [isLoading, setIsloading] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      fullName: "",
      email: "",
      lastName: "",
      address: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setIsloading(true)
    },
  });

  return (
    <div className="content container-fluid">
      <div className="d-flex justify-content-center mt-5">
        <div className="col-lg-8">
          <div className="card shadow-sm animated flipInX delay-02">
            <div className="card-header">
              <div className="card-header-title">Form</div>
            </div>
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <label>Full Name</label>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control"
                        {...formik.getFieldProps("fullName")}
                      />
                      {formik.touched.fullName && formik.errors.fullName && (
                        <span className="v-messages">
                          {formik.errors.fullName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>Last Name</label>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control"
                        {...formik.getFieldProps("lastName")}
                      />
                      {formik.touched.lastName && formik.errors.lastName && (
                        <span className="v-messages">
                          {formik.errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <label>Email</label>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control"
                        {...formik.getFieldProps("email")}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <span className="v-messages">
                          {formik.errors.email}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>Phone</label>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control"
                        {...formik.getFieldProps("phone")}
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <span className="v-messages">
                          {formik.errors.phone}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>Address</label>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control"
                        {...formik.getFieldProps("address")}
                      />
                      {formik.touched.address && formik.errors.address && (
                        <span className="v-messages">
                          {formik.errors.address}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="d-flex justify-content-end gap-3">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={formik.isSubmitting || !formik.isValid}
                    >
                      {isLoading && (
                        <span
                          className="spinner-grow spinner-grow-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      )}
                      {!isLoading && <span>Save</span>}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
