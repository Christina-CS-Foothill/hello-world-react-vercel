import React from "react";
import Card from "../components/ui/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <h1>About Me</h1>
      <div>
        <p>
          <strong>Developer: </strong>Christina Hunter
        </p>
      </div>
      <div>
        <p>
          <strong>Purpose: </strong> Hello! I am independent developer working
          on a personal project. I've always been a fan of websites like{" "}
          <Link
            to={{ pathname: "https://www.wattpad.com/home" }}
            target="_blank"
          >
            Wattpad
          </Link>{" "}
          and{" "}
          <Link
            to={{ pathname: "https://archiveofourown.org/" }}
            target="_blank"
          >
            Archive of Our Own
          </Link>
          , and I wanted to give a shot at creating a story sharing website
          myself. It's pretty rudimentary now, but I'll continue to work on it
          on my own time. Please check it out!
        </p>
      </div>
      <div>
        <p>
          <strong>Notes: </strong> Most of the stories posted on this site were
          originally found on{" "}
          <Link
            to={{ pathname: "https://www.freechildrenstories.com/" }}
            target="_blank"
          >
            freechildrenstories.com
          </Link>
          . All credit to the original author, Daniel Errico.
        </p>
      </div>
      <div>
        <p>
          <strong>Code: </strong> Not Available Yet
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
