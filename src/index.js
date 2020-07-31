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
  const name = faker.name.findName();
  return (
    <React.Fragment>
      <InstaBox>
        <PersonDetail
          name={name}
          jobtype={faker.name.jobType()}
          avatar={faker.image.avatar()}
        />
        <ImageDisplay image={faker.image.nature()} />
        <ShareDisplay />
        <ViewDisplay
          number={faker.random.number()}
          name={name}
          word={faker.lorem.word()}
        />
      </InstaBox>

      <InstaBox>
        <PersonDetail
          name={name}
          jobtype={faker.name.jobType()}
          avatar={faker.image.avatar()}
        />
        <ImageDisplay image={faker.image.animals()} />
        <ShareDisplay />
        <ViewDisplay
          number={faker.random.number()}
          name={name}
          word={faker.lorem.word()}
        />
      </InstaBox>
      
      <InstaBox>
        <PersonDetail
          name={name}
          jobtype={faker.name.jobType()}
          avatar={faker.image.avatar()}
        />
        <ImageDisplay image={faker.image.image()} />
        <ShareDisplay />
        <ViewDisplay
          number={faker.random.number()}
          name={name}
          word={faker.lorem.word()}
        />
      </InstaBox>
      
      <InstaBox>
        <PersonDetail
          name={name}
          jobtype={faker.name.jobType()}
          avatar={faker.image.avatar()}
        />
        <ImageDisplay image={faker.image.business()} />
        <ShareDisplay />
        <ViewDisplay
          number={faker.random.number()}
          name={name}
          word={faker.lorem.word()}
        />
      </InstaBox>
      
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
