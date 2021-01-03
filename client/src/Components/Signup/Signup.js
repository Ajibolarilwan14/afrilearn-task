import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import SignUpForm from '../Forms/SignupForm';
import SignUpStyleWrapper from './Signup.styles';
import logo from '../../Assets/afrilearn_logo.png';


const Signup = () => {
    return (
      <SignUpStyleWrapper className="afriSignInPage">
        <div className="afriLoginContentWrapper">
          <div className="afriLoginContent">
            <div className="afriLogoWrapper">
              <Link to="/home">
                <img src={logo} alt="afri-logo" style={{ width: "100px" }} />
              </Link>
            </div>
            <div className="afriSignInForm">
              <SignUpForm />
              <hr />
              <div className="afriCenterComponent afriHelperWrapper">
              </div>
            </div>
          </div>
        </div>
      </SignUpStyleWrapper>
    );
}

export default Signup;