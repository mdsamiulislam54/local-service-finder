import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiAccountPinBoxFill } from "react-icons/ri";

import i18n from "../../i18n";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import auth from "../../firbase-init";
import Swal from 'sweetalert2'

const Navbar = () => {
  const [showFormType, setShowFormType] = useState(null);

  const [theme, setTheme] = useState("");
  const navigate = useNavigate();
  const fromRef = useRef(null)
  useEffect(() => {
    const savedThems = localStorage.getItem("theme") || "light";
    setTheme(savedThems);
    document.documentElement.setAttribute("data-theme", savedThems);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const { t } = useTranslation();

  const handleEmailandPasswordBtn = () => {
    setShowFormType("signup");
  };

  const handleSignInBtn = () => {
    setShowFormType("signin");
  };

  const handleBack = () => {
    setShowFormType(null);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const fromFild = fromRef.current
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name,email,password)

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(auth.currentUser, {
          displayName: name
        })
        document.getElementById("my_modal_1").close();
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful!',
          text: `Welcome, ${name}!`,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Okay'
        })
        fromFild.reset()
        console.log(user);
      })
      .catch((error) => {
        document.getElementById("my_modal_1").close();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
          confirmButtonColor: '#d33',
        })
      });
      
  };

  return (
    <nav className="navbar bg-base-100 shadow-md sticky top-0 z-100">
      <div className="w-10/12 mx-auto flex">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <div className="flex items-center gap-1 border rounded-md px-2 py-1 bg-base-200 mb-4">
                <button
                  onClick={() => i18n.changeLanguage("en")}
                  className="text-sm px-2 py-1 hover:bg-primary hover:text-white rounded transition duration-200"
                >
                  EN
                </button>
                <span className="text-gray-400">|</span>
                <button
                  onClick={() => i18n.changeLanguage("bn")}
                  className="text-sm px-2 py-1 hover:bg-primary hover:text-white rounded transition duration-200"
                >
                  BN
                </button>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="synthwave"
                    className="toggle theme-controller "
                    onClick={toggleTheme}
                    title="Toggle Theme"
                  />
                </div>
              </div>
              <li>
                <Link className="text-xl font-medium tracking-wide">
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                <Link className="text-xl font-medium tracking-wide">
                  {t("navbar.about")}
                </Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary className="text-xl font-medium tracking-wide">
                    {t("navbar.services")}
                  </summary>
                  <ul className="p-2 bg-base-100 rounded-t-none z-10 w-52 shadow">
                    <li onClick={() => handleServicesPage("Fan")}>
                      <Link>{t("services.service1")}</Link>
                    </li>
                    <li onClick={() => handleServicesPage("Switch")}>
                      <Link>{t("services.service2")}</Link>
                    </li>
                    <li onClick={() => handleServicesPage("Wiring")}>
                      <Link>{t("services.service3")}</Link>
                    </li>

                    <li onClick={() => handleServicesPage("ShortCiruit")}>
                      <Link>{t("services.service4")}</Link>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <Link className="text-xl font-medium tracking-wide">
                  {t("navbar.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">{t("logoname.name")}</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"} className="text-xl font-medium tracking-wide">
                {t("navbar.home")}
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="text-xl font-medium tracking-wide">
                {t("navbar.about")}
              </Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="text-xl font-medium tracking-wide">
                  {t("navbar.services")}
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none z-10 w-72 shadow">
                  <li onClick={() => handleServicesPage("Fan")}>
                    <Link>{t("services.service1")}</Link>
                  </li>
                  <li onClick={() => handleServicesPage("Switch")}>
                    <Link>{t("services.service2")}</Link>
                  </li>
                  <li onClick={() => handleServicesPage("Wiring")}>
                    <Link>{t("services.service3")}</Link>
                  </li>
                  <li onClick={() => handleServicesPage("ShortCircuit")}>
                    <Link>{t("services.service4")}</Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link className="text-xl font-medium tracking-wide">
                {t("navbar.contact")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
          {/* Theme Toggle */}
          <div className="flex items-center gap-2  max-lg:hidden">
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller "
              onClick={toggleTheme}
              title="Toggle Theme"
            />
          </div>

          {/* Language Switch */}
          <div className="flex items-center gap-1 border rounded-md px-2 py-1 bg-base-200 max-lg:hidden">
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="text-sm px-2 py-1 hover:bg-red-600 hover:text-white rounded transition duration-200"
            >
              EN
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => i18n.changeLanguage("bn")}
              className="text-sm px-2 py-1 hover:bg-red-600 hover:text-white rounded transition duration-200"
            >
              BN
            </button>
          </div>

          {/* Login Button */}
          <a
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="btn bg-red-600 px-5 text-white py-2 text-sm font-semibold"
          >
            {t("login.name")}
          </a>
        </div>
        {/* modal  */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div className={`flex flex-col space-y-5 ${showFormType  === null ? "block":"hidden"} `}>
              <button
                onClick={() => {
                  handleSignInBtn("signin");
                }}
                className={`btn bg-white text-black border-[#e5e5e5]`}
              >
                <svg
                  aria-label="Email icon"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="black"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                Login with Email
              </button>
              <button className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <span className="text-center text-sm text-red-500">
                Don't have an account? Please create an account.
              </span>

              <button
                onClick={() => handleEmailandPasswordBtn("signup")}
                className={`btn bg-white text-black border-[#e5e5e5]`}
              >
                <RiAccountPinBoxFill />
                Create a account
              </button>
            </div>
            {showFormType === "signin" && (
              <form ref={fromRef}  className={``}>
                <span className="btn" onClick={() => handleBack(null)}>
                  <IoIosArrowRoundBack size={24} />
                </span>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                  <legend className="fieldset-legend text-center text-xl">
                    Sing In
                  </legend>

                  <label className="label">Email:</label>
                  <input
                    type="text"
                    name="email"
                    className="input w-full"
                    placeholder="Enter Your Email.."
                  />

                  <label className="label">Password:</label>
                  <input
                    type="password"
                    name="password"
                    className="input w-full"
                    placeholder="Enter Your Password.."
                  />

                  <input
                    type="submit"
                    className="btn text-white bg-red-500 my-4"
                    placeholder="Name"
                    value="Sign In"
                  />
                </fieldset>
              </form>
            )}
            {showFormType === "signup" && (
              <form
              ref={fromRef}
               onSubmit={handleCreateAccount}
                className={``}
              >
                <span className="btn" onClick={() => handleBack(false)}>
                  <IoIosArrowRoundBack size={24} />
                </span>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                  <legend className="fieldset-legend text-center text-xl">
                    Sing Up
                  </legend>
                  
                  <label className="label">Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="input w-full"
                    placeholder="Enter Your Name.."
                  />
                  <label className="label">Email:</label>
                  <input
                    type="text"
                    name="email"
                    className="input w-full"
                    placeholder="Enter Your Email.."
                  />

                  <label className="label">Password:</label>
                  <input
                    type="password"
                    name="password"
                    className="input w-full"
                    placeholder="Enter Your Password.."
                  />

                  <input
                    type="submit"
                    className="btn text-white bg-red-500 my-4"
                    placeholder="Name"
                    value="Sign Up"
                  />
                </fieldset>
              </form>
            )}

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn hover:bg-red-500  transition-all duration-500">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </nav>
  );
};

export default Navbar;
