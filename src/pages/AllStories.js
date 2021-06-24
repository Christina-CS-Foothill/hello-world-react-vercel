import React from "react";
import StoryList from "../components/stories/StoryList";

const DUMMY_DATA = [
  {
    id: "story1",
    title: "Story #1",
    author: "Author McAuthorson",
    image:
      "https://www.detroitlabs.com/wp-content/uploads/2018/02/alfons-morales-YLSwjSy7stw-unsplash.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    summary:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "story2",
    title: "Story #2",
    author: "Author McAuthorson",
    image:
      "https://www.detroitlabs.com/wp-content/uploads/2018/02/alfons-morales-YLSwjSy7stw-unsplash.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    summary:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "story3",
    title: "Story #3",
    author: "Author McAuthorson",
    image:
      "https://www.detroitlabs.com/wp-content/uploads/2018/02/alfons-morales-YLSwjSy7stw-unsplash.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    summary:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "story4",
    title: "Story #4",
    author: "Author McAuthorson",
    image:
      "https://www.detroitlabs.com/wp-content/uploads/2018/02/alfons-morales-YLSwjSy7stw-unsplash.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    summary:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllStoriesPage() {
  return (
    <section>
      <h1>All Stories</h1>
      <StoryList stories={DUMMY_DATA}  />
    </section>
  );
}

export default AllStoriesPage;
