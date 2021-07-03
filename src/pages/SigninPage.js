import { useHistory } from "react-router-dom";
import { ArrowLeft } from "heroicons-react";

const SigninPage = () => {
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="w-5/12 mt-16 mx-auto">
        <div className="mb-10">
          <button
            onClick={() => history.goBack()}
            class="text-primary-darkest flex items-center"
          >
            <ArrowLeft aria-hidden="true" className="inline mr-3 w-5" />
            <span className="font-bold text-lg tracking-tight">Go back</span>
          </button>
        </div>
        <div>
          <h2 className="h2">Sign in</h2>
          <form className="mt-10" onSubmit={handleFormSubmit}>
            <div className="mb-8">
              <label
                for="username"
                className="text-md font-bold text-primary-darkest"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                autoComplete="username"
                className="w-full ring-1 ring-primary-darkest h-12"
              />
            </div>
            <div className="mb-8">
              <label
                for="username"
                className="text-md font-bold text-primary-darkest"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                className="w-full ring-1 ring-primary-darkest h-12"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-secondary text-white font-bold rounded-md h-14 hover:bg-secondary-light"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SigninPage;
