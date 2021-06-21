import React from 'react';
import StoryViewer from './components/StoryViewer';
import { useEffect, useState } from 'react';
import './App.css';

// reactjs (hooks)

function App() {

  // using hooks to grab setDate - store in client state
  const [date, setDate] = useState(null);

  // loading data from the server
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date'); // url
      // /api/story -> /api/story.js
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);


  // rendering mark up
  return (
    <main>
      <h1>Recreate Wattpad</h1>
      <StoryViewer title="Story #1"/>
      <StoryViewer title="Story #2"/>
      <StoryViewer title="Story #3"/>
     




      <h1>Create React App + Go API</h1>
      <h2>
        Deployed with{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/vercel/vercel/tree/main/examples/create-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        was bootstrapped with{' '}
        <a href="https://facebook.github.io/create-react-app/">
          Create React App
        </a>{' '}
        and contains three directories, <code>/public</code> for static assets,{' '}
        <code>/src</code> for components and content, and <code>/api</code>{' '}
        which contains a serverless <a href="https://golang.org/">Go</a>{' '}
        function. See{' '}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Go
        </a>
        .
      </p>
      <br />
      <h2>The date according to Go is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
