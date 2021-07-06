import { useHistory } from "react-router-dom";

import SigninOverlay from "../components/Menu/SigninOverlay";
import SigninForm from "../components/Auth/SigninForm";

import { ArrowLeft } from "heroicons-react";

const SigninPage = () => {
  const history = useHistory();

  // Go back to previous page
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <SigninOverlay />
      <section className="hidden sm:block">
        <div className="w-5/12 mt-16 mx-auto">
          <div className="mb-10">
            <button
              onClick={handleGoBack}
              className="text-primary-darkest flex items-center"
            >
              <ArrowLeft aria-hidden="true" className="inline mr-3 w-5" />
              <span className="font-bold text-lg tracking-tight">Go back</span>
            </button>
          </div>
          <div>
            <h2 className="h2">Sign in</h2>
            <SigninForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninPage;
