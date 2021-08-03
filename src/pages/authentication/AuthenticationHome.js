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
import { useAuth } from "../../context/AuthContext";

function demoSteps(history, steps, delay) {
  if (steps.length === 0) {
    return;
  } else {
    var toCall = steps.pop();
    toCall();
    setTimeout(function() {
      demoSteps(history, steps, delay);
    }, delay);
  }
}

export default function AuthenticationHome() {
  const history = useHistory();
  const { logout } = useAuth();
  //demo story values
  const demoTitle = "The Stellar One";
  const demoImage =
    "https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1419316919757-CIM2P3OPPFQVAVNP7YX5/image-asset.png?format=750w";
  const demoSummary =
    "Long ago, there was a rock floating through space, searching for where she belonged. She would visit many planets and travel to the farthest reaches of the universe, but would she find what she was looking for? The Stellar One is a tale of self-esteem and self-discovery.";
  const demoContent =
    "When the universe was young the sky was filled with planets, and stars, and stardust, and many many rocks. One of these rocks was a bit more special than the rest.  She was unlike any that came before her. She was a kind and happy rock, who always floated near a big blue planet.Sometimes when the light hit her surface, she would glow a brilliant green.  At times like those, she almost didn't look like a rock at all. As the sky moved from day to day, and week to week, the rock would see planets far off in the distance.";

  return (
    <AuthProvider>
      <Button
        onClick={function() {
          demoSteps(
            history,
            [
              async function() {
                try {
                  await logout();
                  history.push("./authentication/signup");
                } catch {
                  console.log("Failed to log out.");
                }
              },
              function() {
                setTimeout(() => {}, 5000);
              },
              function() {
                history.push("/my-stories");
              },
              function() {
                document.getElementById("story").value =
                  demoContent;
              },
              function() {
                document.getElementById("summary").value =
                  demoSummary;
              },
              function() {
                document.querySelector("input[type=url]").value =
                  demoImage;
              },
              function() {
                document.querySelector("input[type=text]").value =
                  demoTitle;
              },
              function() {
                history.push("/create-story");
              },
              function() {
                setTimeout(() => {}, 5000);
              },
              function() {
                document.getElementById("read-button").click();
              },
              function() {
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
