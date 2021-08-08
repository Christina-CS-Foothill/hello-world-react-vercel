import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllStoriesPage from "./pages/AllStories";
import CreateStoryPage from "./pages/CreateStory";
import LikedStoriesPage from "./pages/LikedStories";
import FullStoryPage from "./pages/FullStory";
import Layout from "./components/layout/Layout";
import "./App.css";
import AuthenticationHome from "./pages/authentication/AuthenticationHome";
import { AuthProvider } from "./context/AuthContext";
import MyStories from "./pages/MyStories";
import EditStoryForm from "./components/stories/EditStoryForm";
import AllAuthorStoriesPage from "./pages/AllAuthorStories";
import NewChapterPage from "./pages/NewChapter";
import EditChapterPage from "./pages/EditChapter";

// reactjs (hooks)

function App() {
  // rendering mark up
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Layout>
              <Route path="/" exact={true}>
                <AllStoriesPage />
              </Route>
              <Route path="/authentication">
                <AuthenticationHome />
              </Route>
              <Route path="/all-stories">
                <AllStoriesPage />
              </Route>
              <Route path="/create-story">
                <CreateStoryPage />
              </Route>
              <Route path="/liked-stories">
                <LikedStoriesPage />
              </Route>
              <Route path="/full-story">
                <FullStoryPage />
              </Route>
              <Route path="/my-stories">
                <MyStories />
              </Route>
              <Route path="/edit-story">
                <EditStoryForm />
              </Route>
              <Route path="/all-author-stories">
                <AllAuthorStoriesPage />
              </Route>
              <Route path="/new-chapter">
                <NewChapterPage />
              </Route>
              <Route path="/edit-chapter">
                <EditChapterPage/>
              </Route>
            </Layout>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
