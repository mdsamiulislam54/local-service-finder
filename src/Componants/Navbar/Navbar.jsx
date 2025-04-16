import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import i18n from "../../i18n";
const Navbar = () => {
  const [theme, setTheme] = useState("");
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

  return (
    <nav className="navbar bg-base-100 shadow-md">
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
                    <li>
                      <Link>{t("services.service1")}</Link>
                    </li>
                    <li>
                      <Link>{t("services.service2")}</Link>
                    </li>
                    <li>
                      <Link>{t("services.service3")}</Link>
                    </li>
                    <li>
                      <Link>{t("services.service4")}</Link>
                    </li>
                    <li>
                      <Link>{t("services.service5")}</Link>
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
                <ul className="p-2 bg-base-100 rounded-t-none z-10 w-72 shadow">
                  <li>
                    <Link>{t("services.service1")}</Link>
                  </li>
                  <li>
                    <Link>{t("services.service2")}</Link>
                  </li>
                  <li>
                    <Link>{t("services.service3")}</Link>
                  </li>
                  <li>
                    <Link>{t("services.service4")}</Link>
                  </li>
                  <li>
                    <Link>{t("services.service5")}</Link>
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
          </div>

          {/* Login Button */}
          <a className="btn btn-primary px-5 py-2 text-sm font-semibold">
            {t("login.name")}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
