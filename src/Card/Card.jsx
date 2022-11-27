import "./card.css";

export function Card({ lesson }) {
  return (
    <li className="lessonCard">
      <span>{lesson.type}:</span>
      {lesson.title}
      <a href={lesson.youtube} target="_blank">
        Link to YouTube
      </a>
    </li>
  );
}
