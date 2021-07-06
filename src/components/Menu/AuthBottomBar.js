import { Link, useHistory } from "react-router-dom";

// Redux state
import { useSelector, useDispatch } from "react-redux";
import { menuActions } from "../../store/menu";

import { ChevronUp, ChevronDown } from "heroicons-react";

const AuthBottomBar = ({ className }) => {
  const history = useHistory();

  // Redux state for opening signin overlay
  const signinOpen = useSelector((state) => state.menu.signinOpen);
  const dispatch = useDispatch();

  const openSigninMobile = () => {
    history.push("/auth/signin");
    dispatch(menuActions.toggleSignin(true));
  };

  const closeSigninMobile = () => {
    history.goBack();
    dispatch(menuActions.toggleSignin(false));
  };

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
              dispatch(menuActions.toggleSignin(true));
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
                onClick={closeSigninMobile}
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
