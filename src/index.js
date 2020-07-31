import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import "./index.css";
import PersonDetail from "./components/PersonDetail";
import ImageDisplay from "./components/ImageDisplay";
import ShareDisplay from "./components/ShareDisplay";
import ViewDisplay from "./components/ViewDisplay";
import InstaBox from "./components/InstaBox";

const App = () => {
  var i = 0;
  const data = [
    {
      name: faker.name.findName(),
      jobtype: faker.name.jobType(),
      avatar: faker.image.avatar(),
      image: faker.image.nature(),
      number: faker.random.number(),
      word: faker.lorem.word(),
      id: i++,
    },
    {
      name: faker.name.findName(),
      jobtype: faker.name.jobType(),
      avatar: faker.image.avatar(),
      image: faker.image.animals(),
      number: faker.random.number(),
      word: faker.lorem.word(),
      id: i++,
    },
    {
      name: faker.name.findName(),
      jobtype: faker.name.jobType(),
      avatar: faker.image.avatar(),
      image: faker.image.image(),
      number: faker.random.number(),
      word: faker.lorem.word(),
      id: i++,
    },
    {
      name: faker.name.findName(),
      jobtype: faker.name.jobType(),
      avatar: faker.image.avatar(),
      image: faker.image.business(),
      number: faker.random.number(),
      word: faker.lorem.word(),
      id: i++,
    },
    {
      name: faker.name.findName(),
      jobtype: faker.name.jobType(),
      avatar: faker.image.avatar(),
      image: faker.image.fashion(),
      number: faker.random.number(),
      word: faker.lorem.word(),
      id: i++,
    },
    {
      name: faker.name.findName(),
      jobtype: faker.name.jobType(),
      avatar: faker.image.avatar(),
      image: faker.image.people(),
      number: faker.random.number(),
      word: faker.lorem.word(),
      id: i++,
    },
    {
      name: faker.name.findName(),
      jobtype: faker.name.jobType(),
      avatar: faker.image.avatar(),
      image: faker.image.sports(),
      number: faker.random.number(),
      word: faker.lorem.word(),
      id: i++,
    },
    {
      name: faker.name.findName(),
      jobtype: faker.name.jobType(),
      avatar: faker.image.avatar(),
      image: faker.image.transport(),
      number: faker.random.number(),
      word: faker.lorem.word(),
      id: i++,
    },
    {
      name: faker.name.findName(),
      jobtype: faker.name.jobType(),
      avatar: faker.image.avatar(),
      image: faker.image.sports(),
      number: faker.random.number(),
      word: faker.lorem.word(),
      id: i++,
    },
    {
      name: faker.name.findName(),
      jobtype: faker.name.jobType(),
      avatar: faker.image.avatar(),
      image: faker.image.nature(),
      number: faker.random.number(),
      word: faker.lorem.word(),
      id: i++,
    },
    {
      name: faker.name.findName(),
      jobtype: faker.name.jobType(),
      avatar: faker.image.avatar(),
      image: faker.image.cats(),
      number: faker.random.number(),
      word: faker.lorem.word(),
      id: i++,
    },
    {
      name: faker.name.findName(),
      jobtype: faker.name.jobType(),
      avatar: faker.image.avatar(),
      image: faker.image.city(),
      number: faker.random.number(),
      word: faker.lorem.word(),
      id: i++,
    },
    {
      name: faker.name.findName(),
      jobtype: faker.name.jobType(),
      avatar: faker.image.avatar(),
      image: faker.image.nature(),
      number: faker.random.number(),
      word: faker.lorem.word(),
      id: i++,
    },
    {
      name: faker.name.findName(),
      jobtype: faker.name.jobType(),
      avatar: faker.image.avatar(),
      image: faker.image.nature(),
      number: faker.random.number(),
      word: faker.lorem.word(),
      id: i++,
    },
    {
      name: faker.name.findName(),
      jobtype: faker.name.jobType(),
      avatar: faker.image.avatar(),
      image: faker.image.nature(),
      number: faker.random.number(),
      word: faker.lorem.word(),
      id: i++,
    },
    {
      name: faker.name.findName(),
      jobtype: faker.name.jobType(),
      avatar: faker.image.avatar(),
      image: faker.image.nature(),
      number: faker.random.number(),
      word: faker.lorem.word(),
      id: i++,
    },
  ];
  const collection = data.map((user) => {
    return (
      <InstaBox key={user.id}>
        <PersonDetail
          name={user.name}
          jobtype={user.jobtype}
          avatar={user.avatar}
        />
        <ImageDisplay image={user.image} />
        <ShareDisplay />
        <ViewDisplay number={user.number} name={user.name} word={user.word} />
      </InstaBox>
    );
  });

  return <React.Fragment>{collection}</React.Fragment>;
};

ReactDOM.render(<App />, document.getElementById("root"));
