import React from "react";
import { Route, Switch } from "react-router-dom";
import AllStoriesPage from "./pages/AllStories";
import CreateStoryPage from "./pages/CreateStory";
import LikedStoriesPage from "./pages/LikedStories";
import MainNavigation from "./components/layout/MainNavigation";
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
      <MainNavigation />
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
      </Switch>

      <h2>The date according to Go is:</h2>
      <p>{date ? date : "Loading date..."}</p>
    </div>
  );
}

export default App;
