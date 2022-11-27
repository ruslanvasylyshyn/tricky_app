import { useState } from "react";
import "./App.css";
import { useGetData } from "./Data/useGetData";
import { Card } from "./Card/Card";
import { ErrorChecker } from "./Error/ErrorChecker";

const URL = "https://react-course-api.azurewebsites.net/lesson/";

function App() {
  const [notStarted, setNotStarted] = useState(true);
  const [isLoad, setIsLoad] = useState();
  const [lessonsData, setLessonsData] = useState([]);
  const [error, setError] = useState(false);
  const [finalUrl, setFinalUrl] = useState();

  function handleBlur(e) {
    setFinalUrl(`${URL}${e.target.value}`);
    setNotStarted(false);
  }
  useGetData(finalUrl, setIsLoad, setLessonsData, setError);

  return (
    <div className="App">
      <h1>Please, enter search query</h1>
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Write your query here"
        onBlur={(e) => {
          handleBlur(e);
        }}
      />
      <div>
        {error !== undefined ? <ErrorChecker error={error} /> : ""}
        <ul>
          {lessonsData.length == "0" && notStarted === true
            ? ""
            : lessonsData.length == "0" && notStarted === false && error === false
            ? "За вашим запитом уроків не знайдено. Спробуйте інший запит."
            : lessonsData.map((lesson, i) => {
                return <Card lesson={lesson} key={i} />;
              })}
        </ul>
      </div>
    </div>
  );
}

export default App;
