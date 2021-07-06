const SigninForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="mt-10" onSubmit={handleFormSubmit}>
      <div className="mb-8">
        <label
          htmlFor="username"
          className="text-md font-bold text-primary-darkest"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          autoComplete="username"
          required
          className="w-full ring-1 ring-primary-darkest h-12 px-3 tracking-widest"
        />
      </div>
      <div className="mb-8">
        <label
          htmlFor="username"
          className="text-md font-bold text-primary-darkest"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          required
          className="w-full ring-1 ring-primary-darkest h-12 px-3 tracking-widest"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-secondary text-white font-bold rounded-md h-14 hover:bg-secondary-light"
      >
        Sign in
      </button>
    </form>
  );
};

export default SigninForm;
