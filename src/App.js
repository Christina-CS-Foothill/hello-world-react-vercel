import React from "react";
import { Route, Switch } from "react-router-dom";
import AllStoriesPage from "./pages/AllStories";
import CreateStoryPage from "./pages/CreateStory";
import LikedStoriesPage from "./pages/LikedStories";
import FullStoryPage from "./pages/FullStory";
import Layout from "./components/layout/Layout";
import { useEffect, useState } from "react";
import "./App.css";

// reactjs (hooks)

function App() {
  // using hooks to grab setDate - store in client state
  const [date, setDate] = useState(null);

  // loading data from the server
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date"); // url
      // /api/story -> /api/story.js
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);

  // rendering mark up
  return (
    <div>
      <Layout>
      <h2>The date according to Go is:</h2>
      <p>{date ? date : "Loading date..."}</p>
        <Switch>
          <Route path="/" exact={true}>
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
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
