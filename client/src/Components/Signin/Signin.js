import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import SigninForm from "../Forms/SigninForm";
import logo from "../../Assets/afrilearn_logo.png";
import SignInStyleWrapper from "./Signin.styles";

const Signin = () => {

  return (
    <SignInStyleWrapper className="afriSignInPage">
      <div className="afriLoginContentWrapper">
        <div className="afriLoginContent">
          <div className="afriLogoWrapper">
            <Link to="/home">
              <img src={logo} alt="afriLearn-logo" style={{ width: "100px" }} />
            </Link>
          </div>
          <div className="afriSignInForm">
            <SigninForm />
            <hr />
            <div className="afriCenterComponent afriHelperWrapper">
              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </div>
    </SignInStyleWrapper>
  );
};

export default Signin;
