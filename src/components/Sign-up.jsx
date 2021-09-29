import React from "react";
const SignForm = () => {
  const [userRegistration, setuserRegistration] = useState(initialState);
  const handleInput = () => {};
  return (
    <>
      <div className="container">
        <h1 className="text-center" style={{ paddingTop: "5rem" }}>
          User Registration
        </h1>
        <div className="row">
          <div className="col-10 mx-auto text-center py-5">
            <form>
              <div>
                <label htmlFor="username" className="d-block">
                  Username
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="username"
                  id="username"
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="email" className="d-block">
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="phone" className="d-block">
                  Phone
                </label>
                <input
                  type="number"
                  autoComplete="off"
                  name="phone"
                  id="phone"
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="password" className="d-block">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  onChange={handleInput}
                />
              </div>
              <button type="submit" className="mt-3">
                Sing up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignForm;
