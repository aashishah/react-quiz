export default function StartScreen({ numQ }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQ} questions to test your react knowledge.</h3>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
}
