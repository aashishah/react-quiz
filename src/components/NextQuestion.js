function NextQuestion({ dispatch }) {
  return (
    <div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQues" })}
      >
        Next
      </button>
    </div>
  );
}

export default NextQuestion;
