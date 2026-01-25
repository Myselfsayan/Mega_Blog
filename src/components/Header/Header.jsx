import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative md:sticky md:top-0 z-50 bg-slate-50 border-b border-slate-200">
      <div className="flex text-center justify-center">
        <Container>
          {/* TOP BAR */}
          <div className="flex items-center justify-between h-16 ">
            {/* LEFT — BRAND */}
            <Link to="/" className="flex items-center gap-3">
              <Logo width="42px" />
              <span className="text-lg font-semibold text-slate-900">
                BlogApp
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-30">
              {authStatus && (
                <button
                onClick={() => navigate("/")}
                className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition"
              >
                Home
              </button>
              )}

              {authStatus && (
                <button
                  onClick={() => navigate("/all-posts")}
                  className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition"
                >
                  All Posts
                </button>
              )}

              {authStatus && (
                <button
                  onClick={() => navigate("/add-post")}
                  className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition"
                >
                  Add Post
                </button>
              )}
            </nav>

            {/* DESKTOP AUTH */}
            <div className="hidden md:flex items-center gap-4">
              {!authStatus ? (
                <>
                  <button
                    onClick={() => navigate("/login")}
                    className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/signup")}
                    className="inline-flex items-center justify-center
                    p-2 rounded-2xl
                    text-blue-700
                    transition-shadow duration-300
                    
                    hover:shadow-[0_10px_25px_rgba(59,130,246,0.4)]
                    "
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <LogoutBtn />
              )}
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col justify-center gap-1.5 p-2"
            >
              <span
                className={`h-0.5 w-6 bg-slate-800 transition ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-slate-800 transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-slate-800 transition ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>

          {/* MOBILE MENU */}

          {open && (
            <div
              className="
    md:hidden
    border-t border-slate-200
    py-10
    space-y-8
    text-center
  "
            >
              <button
                onClick={() => {
                  navigate("/");
                  setOpen(false);
                }}
                className="
        block w-full
        text-sm font-medium
        text-slate-700
        hover:text-indigo-600
        transition
      "
              >
                Home
              </button>

              {authStatus && (
                <button
                  onClick={() => {
                    navigate("/all-posts");
                    setOpen(false);
                  }}
                  className="
          block w-full
          text-sm font-medium
          text-slate-700
          hover:text-indigo-600
          transition
        "
                >
                  All Posts
                </button>
              )}

              {authStatus && (
                <button
                  onClick={() => {
                    navigate("/add-post");
                    setOpen(false);
                  }}
                  className="
          block w-full
          text-sm font-medium
          text-slate-700
          hover:text-indigo-600
          transition
        "
                >
                  Add Post
                </button>
              )}

              {/* AUTH SECTION */}
              <div className="pt-8 border-t border-slate-200 flex justify-center">
                {!authStatus ? (
                  <div className="flex gap-6">
                    <button
                      onClick={() => {
                        navigate("/login");
                        setOpen(false);
                      }}
                      className="
              text-sm font-medium
              text-slate-700
              hover:text-indigo-600
              transition
            "
                    >
                      Login
                    </button>

                    <button
                      onClick={() => {
                        navigate("/signup");
                        setOpen(false);
                      }}
                      className="
              px-5 py-2
              rounded-md
              text-sm font-medium
              bg-indigo-600
              text-white
              hover:bg-indigo-700
              transition
            "
                    >
                      Sign Up
                    </button>
                  </div>
                ) : (
                  <div className="pt-2">
                    <LogoutBtn />
                  </div>
                )}
              </div>
            </div>
          )}
        </Container>
      </div>
    </header>
  );
}

export default Header;
