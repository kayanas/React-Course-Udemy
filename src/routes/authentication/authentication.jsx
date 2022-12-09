import SignUpForm from "../../components/sign-up-form/sing-up.component";
import SignInForm from "../../components/sign-in-form/sing-in.component";

import './authentication.style.scss'

const Authentication = () => {

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
