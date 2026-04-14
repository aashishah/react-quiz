function NextQuestion({ dispatch, index, numQuestions }) {
  if (index < numQuestions - 1)
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
  else
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finishTest" })}
        >
          End Test
        </button>
      </div>
    );
}

export default NextQuestion;
