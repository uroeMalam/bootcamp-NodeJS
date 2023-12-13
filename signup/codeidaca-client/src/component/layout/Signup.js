import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { doSignupRequest } from "../../redux-saga/actions/User";
import { Link } from "react-router-dom";

// export default function Signup() {
//   let navigate = useNavigate();
//   let location = useLocation();
//   let from = location.state?.from?.pathname || "/";

//   const dispatch = useDispatch();
//   const { message, isLoggedIn } = useSelector((state) => state.userState);

//   useEffect(() => {
//     if (isLoggedIn) {
//       navigate(from, { replace: true });
//     }
//   }, [isLoggedIn]);

//   const validationSchema = Yup.object().shape({
//     email: Yup.string()
//       .email("Must be a valid email")
//       .max(255)
//       .required("Email is required"),
//     password: Yup.string().min(5).max(5).required(),
//   });

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values) => {
//       // let payload = {
//       //   email: values.email,
//       //   password: values.password,
//       // };
//       // dispatch(doSigninRequest(payload));
//     },
//   });
export default function Signup() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      user_name: "",
      pmail_address: "",
      user_password: "",
      confpassword: "",
      uspo_number: "",
      usro_role_id: 0,
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .max(20, "Max char 20!")
        .required("Username is required"),
      pmail_address: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      // password: Yup.string().min(5).max(15).required(),
      // confpassword: Yup.string().oneOf(
      //   [Yup.ref("password"), null],
      //   "Passwords must match"
      // ),
      user_password: Yup.string()
        .min(5)
        .max(20)
        .required("Password is required"),
      confpassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
      uspo_number: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Number phone is required"),
    }),

    onSubmit: async (values) => {
      let payload = {
        user_name: values.user_name,
        pmail_address: values.pmail_address,
        user_password: values.user_password,
        uspo_number: values.uspo_number,
        usro_role_id: values.usro_role_id,
      };
      dispatch(doSignupRequest(payload));

      setTimeout(() => {
        navigate("/auth/signup/success");
      }, 7000);
    },
  });
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="../assets/images/codeid.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl text-gray-900">Sign up</h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="flex items-center">
              <label
                htmlFor="user_name"
                className="w-20 inline-block text-right mr-4 text-black-500 text-black-500"
              >
                Username
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                value={formik.values.user_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="username"
                required
                placeholder="username"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
              {formik.touched.user_name && formik.errors.user_name ? (
                <span className="mt-2 text-sm text-red-600">
                  {formik.errors.user_name}
                </span>
              ) : null}
            </div>
            <div className="flex items-center">
              <label
                htmlFor="pmail_address"
                className="w-20 inline-block text-right mr-4 text-black-500 text-black-500"
              >
                Email
              </label>
              <input
                id="pmail_address"
                name="pmail_address"
                type="email"
                value={formik.values.pmail_address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
              {formik.touched.pmail_address && formik.errors.pmail_address ? (
                <span className="mt-2 text-sm text-red-600">
                  {formik.errors.pmail_address}
                </span>
              ) : null}
            </div>
            <div className="flex items-center">
              <label
                htmlFor="user_password"
                className="w-20 inline-block text-right mr-4 text-black-500 text-black-500"
              >
                Password
              </label>
              <input
                id="user_password"
                name="user_password"
                type="password"
                value={formik.values.user_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              {formik.touched.user_password && formik.errors.user_password ? (
                <span className="mt-2 text-sm text-red-600">
                  {formik.errors.user_password}
                </span>
              ) : null}
            </div>
            <div className="flex items-center">
              <label
                htmlFor="confpassword"
                className="w-20 inline-block text-right mr-4 text-black-500 text-black-500"
              >
                Confirm Password
              </label>
              <input
                id="confpassword"
                name="confpassword"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
              {formik.touched.confpassword && formik.errors.confpassword ? (
                <span className="mt-2 text-sm text-red-600">
                  {formik.errors.confpassword}
                </span>
              ) : null}
            </div>
            <div className="flex items-center">
              <label
                htmlFor="uspo_number"
                className="w-20 inline-block text-right mr-4 text-black-500 text-black-500"
              >
                Phone Number
              </label>
              <input
                id="uspo_number"
                name="uspo_number"
                type="text"
                value={formik.values.uspo_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="uspo_number"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone Number"
              />
              {formik.touched.uspo_number && formik.errors.uspo_number ? (
                <span className="mt-2 text-sm text-red-600">
                  {formik.errors.uspo_number}
                </span>
              ) : null}
            </div>
            <div className="flex items-center">
              <label
                htmlFor="usro_role_id"
                className="w-20 inline-block text-right mr-4 text-black-500 text-black-500"
              >
                Cadidate / Talent
              </label>
              <div className="flex items-center">
                <select className="inline-flex justify-center w-30 rounded-md border border-gray-300 shadow-sm px-8 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                  <option values="1">Candidate</option>
                  <option values="2">Talent</option>
                  {/* values ini role id tapi msh gatau nempelinnya */}
                </select>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="group relative w-full flex-initial w-32 h-10 ml-10 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Cancel
              </button>
              <button
                type="button"
                onClick={formik.handleSubmit}
                className="group relative w-full flex-initial w-32 h-10 ml-24 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Sign up
              </button>
            </div>
            <div className=" flex justify-center">
              <button className=" mx-auto mt-2 text-center text-sm text-gray-600">
                <u
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => navigate("/SignupEmp")}
                >
                  if you are employee code.id, click this for sign up
                </u>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
