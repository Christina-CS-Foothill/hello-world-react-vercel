import React from "react";
import { Container, Button } from "react-bootstrap";
import { AuthProvider } from "../../context/AuthContext";
import Signup from "./Signup";
import { Route, useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

function foo2(history, steps, delay) {
  if (steps.length === 0) {
    return;
  } else {
    var toCall = steps.pop();
    toCall();
    setTimeout(function() {
      foo2(history, steps, delay);
    }, delay);
  }
}

/*function foo(history) {
  history.push("/authentication/signup");
  // history.push('/create-story')
  // first get email
  // password
  // click button
  // document.querySelector('input[type=email]')

  setTimeout(function() {
    document.querySelector("input[type=email]").value = "joe2@example.com";

    setTimeout(function() {
      document.querySelector("input[type=password]").value = "password";

      setTimeout(function() {
        document.querySelector("#password-confirm input").value = "password";

        setTimeout(function() {
          document.querySelector("button[type=submit]").click();
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}*/

export default function AuthenticationHome() {
  const history = useHistory();

  return (
    <AuthProvider>
      <Button
        onClick={function() {
          foo2(
            history,
            [
              function() {
                history.push("/create-story");
              },
              function () {
                setTimeout(() => {}, 5000);
              },
              function() {
                document.querySelector('button').click();
              },
              function () {
                setTimeout(() => {}, 3000);
              },
              function() {
                document.querySelector("button[type=submit]").click();
              },
              /*function() {
                document.querySelector("#password-confirm input").value =
                  "password";
              },*/
              function() {
                document.querySelector("input[type=password]").value =
                  "password";
              },
              function() {
                document.querySelector("input[type=email]").value =
                  "exampleUser@example.com";
              },
              function() {
                history.push("/authentication/login");
              },
            ],
            1000
          );
        }}
      >
        Demo
      </Button>
      {/* <Link to={{
        pathname: "/create-story",
        state: {
          fromDemo: true
        }
      }}>
        <Button>Start Demo</Button>
      </Link> */}

      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <PrivateRoute
            exact
            path="/authentication/dashboard"
            component={Dashboard}
          />
          <PrivateRoute
            path="/authentication/update-profile"
            component={UpdateProfile}
          />
          <Route path="/authentication/signup" component={Signup} />
          <Route path="/authentication/login" component={Login} />
          <Route
            path="/authentication/forgot-password"
            component={ForgotPassword}
          />
        </div>
      </Container>
    </AuthProvider>
  );
}
