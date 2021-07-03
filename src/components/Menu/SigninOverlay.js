import { ChevronDown } from "heroicons-react";
import SigninForm from "../Auth/SigninForm";
import AuthBottomBar from "./AuthBottomBar";

const SigninOverlay = ({ className }) => {
  return (
    <section
      className={`sm:hidden fixed top-12 w-screen h-screen z-50 bg-white sm:p-0 ${className}`}
    >
      <AuthBottomBar />
      <div className="mx-4">
        <SigninForm />
      </div>
    </section>
  );
};

export default SigninOverlay;
