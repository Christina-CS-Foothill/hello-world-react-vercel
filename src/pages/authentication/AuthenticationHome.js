import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../../context/AuthContext";
import Signup from "./Signup";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

export default function AuthenticationHome() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <PrivateRoute exact path="/authentication/dashboard" component={Dashboard} />
          <PrivateRoute path="/authentication/update-profile" component={UpdateProfile} />
          <Route path="/authentication/signup" component={Signup} />
          <Route path="/authentication/login" component={Login} />
          <Route path="/authentication/forgot-password" component={ForgotPassword}/>
        </div>
      </Container>
    </AuthProvider>
  );
}
