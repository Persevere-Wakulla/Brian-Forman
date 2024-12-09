import { useState, createContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import SignOut from "../Components/SignOut.jsx";
import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

export const userContext = createContext();

const RootLayout = () => {
  const [userProfile, setUserProfile] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  // this will keep the logged in user memory stored until they sign out
  const [currentUserProfile, setCurrentUserProfile] = useLocalStorage(
    "user",
    ""
  );

  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("loggedIn", false);

  const [adminUser, SetAdminUser] = useState(false);

  let authorizedUser = currentUserProfile.admin;

  useEffect(() => {
    SetAdminUser(authorizedUser);
  }, [currentUserProfile]);

  const toggleLogIn = () => {
    setIsLoggedIn(isLoggedIn === false ? true : false);
  };

  const handleClick = async () => {
    fetch("http://localhost:3000/users/findUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userProfile),
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          setCurrentUserProfile(res.data);
          toggleLogIn();
          userProfile.username = "";
          userProfile.password = "";
          navig("/");
        } else {
          console.log(res.data.message);
        }
      });
  };

  return (
    <>
      <div className="mt-20">
        <header>
          <Navbar />
          {!isLoggedIn ? (
            <div className="flex gap-2 dropdown login-Container ">
              <h2
                type="button"
                className="login-btn dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                Login
              </h2>
              <form className="dropdown-menu w-[300px] p-4 ">
                <div className="mb-3">
                  <p>Username:</p>
                  <input
                    className="border-solid border-gray form-control"
                    type="text"
                    value={userProfile.username}
                    placeholder="wardoggs"
                    onChange={(e) =>
                      setUserProfile({
                        ...userProfile,
                        username: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <p>Password:</p>
                  <input
                    className="border-solid border-gray form-control"
                    type="password"
                    value={userProfile.password}
                    placeholder="wartime"
                    onChange={(e) =>
                      setUserProfile({
                        ...userProfile,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="dropdownCheck2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="dropdownCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <button onClick={handleClick}>Sign In</button>
              </form>
              <Link className="register-btn" to="profile/createUser">
                {" "}
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="welcome-container flex items-center">
              <h1 className="welcome ">
                {" "}
                {`Welcome , ${currentUserProfile.firstName} ${currentUserProfile.lastName},`}
              </h1>
              <div className="flex gap-1">
                <h2
                  className={`peer ${
                    currentUserProfile.cart.length === 0
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  } text-3xl max-[475px]:text-2xl hover:cursor-pointer`}
                  onClick={() =>
                    currentUserProfile.cart.length > 0 &&
                    navigate("/cart/usercart")
                  }
                >
                  🛒
    
                </h2>
                {currentUserProfile.cart.length === 0 && (
                  <div className="hidden absolute px-2 right-1 shadow-sm shadow-slate-200 text-sm text-nowrap bg-slate-400 rounded peer-hover:flex">
                    No Items in cart
                  </div>
                )}
                <div>
                  {" "}
                  {isLoggedIn ? (
                    <SignOut
                      updateLogin={setIsLoggedIn}
                      updateUser={setCurrentUserProfile}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
      <main>
        <userContext.Provider
          value={[
            adminUser,
            currentUserProfile,
            setCurrentUserProfile,
            setIsLoggedIn,
            isLoggedIn,
          ]}
        >
          <Outlet
            context={[
              adminUser,
              currentUserProfile,
              setCurrentUserProfile,
              setIsLoggedIn,
            ]}
          />
        </userContext.Provider>
      </main>
    </>
  );
};

export default RootLayout;
