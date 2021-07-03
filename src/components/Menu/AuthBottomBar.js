import { Link, useHistory, useLocation } from "react-router-dom";
import { ChevronUp, ChevronDown } from "heroicons-react";
import { useEffect, useState } from "react";

const AuthBottomBar = ({ setMobileOpen, className }) => {
  const history = useHistory();
  const location = useLocation();

  const [signinOpen, setSigninOpen] = useState(false);

  const openSigninMobile = () => {
    history.push("/auth/signin");
    setMobileOpen();
  };

  useEffect(() => {
    if (location.pathname === "/auth/signin") setSigninOpen(true);
  }, [location.pathname]);
  return (
    <div className={`w-full ${className}`}>
      <div className=" bg-white flex items-center justify-between mr-0 px-4 py-3">
        {signinOpen ? (
          <h2 className="text-secondary font-bold text-2xl">Sign in</h2>
        ) : (
          <Link
            to="/auth/signin"
            className="text-secondary font-bold text-2xl"
            onClick={() => {
              setMobileOpen();
            }}
          >
            Sign in
          </Link>
        )}
        <button>
          {signinOpen ? (
            <>
              <span className="sr-only">Close signin</span>
              <ChevronDown
                className="text-secondary"
                onClick={openSigninMobile}
              />
            </>
          ) : (
            <>
              <span className="sr-only">Open signin</span>
              <ChevronUp
                className="text-secondary"
                onClick={openSigninMobile}
              />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AuthBottomBar;
