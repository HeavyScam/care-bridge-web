// import getToken from "@/utils/GetAccessToken";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  // const refreshToken = localStorage.getItem("refreshToken");

  // useEffect(() => {
  //   const func = async () => {
  //     if (!refreshToken) {
  //       setIsLogin(false);
  //       return;
  //     }
  //     const accessToken = await getToken();
  //     if (accessToken) {
  //       setIsLogin(true);
  //     }
  //   };

  //   void func();
  // }, [refreshToken]);

  return (
    <>
      <nav className="mx-[10%] my-5 flex items-center justify-between">
        <Image
          src="/logoblack.svg"
          alt="logo"
          width={100}
          height={100}
          className="h-[100px] w-[150px] lg:w-[200px]"
        />
        <div className="hidden lg:flex">
          <div className="flex list-none items-center gap-8 text-2xl">
            <Link href="#events">Events</Link>
            <Link href="#blogs">Blogs</Link>
            {/* <button
              className={`rounded-lg ${
                isLogin
                  ? "border border-[#444BD3] bg-[#fff] text-black"
                  : "bg-[#444BD3] text-white"
              } px-6 py-2 text-center `}
            >
              {isLogin ? "Log Out" : "Log In"}
            </button> */}
          </div>
        </div>
        <div
          className="ml-auto mr-2 flex flex-row items-center lg:hidden"
          onClick={() => handleNav()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 cursor-pointer hover:text-[#444BD3]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>

      {isOpen && (
        <div
          className={`fixed bottom-0 top-0 ${
            isOpen ? "inset-0" : "right-[-400px]"
          } z-20 bg-[#161616] px-8 py-12`}
          id="mobilemenu"
        >
          <svg
            viewBox="0 0 24 24"
            fill="#f7f7f7"
            width="30px"
            height="30px"
            className="x-el x-el-svg c1-1 c1-2 c1-56 c1-1g c1-2e c1-39 c1-3a c1-3b c1-3c c1-1w c1-57 c1-58 c1-4j c1-59 c1-5a c1-5b c1-b c1-5c c1-5d c1-5e c1-5f c1-5g absolute right-6 top-6 cursor-pointer hover:text-[#444BD3]"
            onClick={() => handleNav()}
          >
            <path
              fillRule="evenodd"
              d="M17.999 4l-6.293 6.293L5.413 4 4 5.414l6.292 6.293L4 18l1.413 1.414 6.293-6.292 6.293 6.292L19.414 18l-6.294-6.293 6.294-6.293z"
            />
          </svg>
          <div className="cursor-pointer text-left text-2xl text-[#f7f7f7]" onClick={handleNav}>
            <Link href="#events">
              <p className="mb-3 mt-6 px-4">Events</p>
            </Link>
            <hr className="border-[#4c4c4c80]" />
            <Link href="#blogs">
              <p className="my-3 px-4">Blogs</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;