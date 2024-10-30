import React from "react";
import useChallengeQuestions from "./hook";

const ChallengeForm = () => {
  const { question, showResult, corrections, handleNextQuestion } =
    useChallengeQuestions();
  const [currentReply, setCurrentReply] = React.useState("");

  const handleSubmit = () => {
    handleNextQuestion(currentReply);

    setCurrentReply("");
  };

  if (showResult) return <p>Você acertou {corrections} de 4</p>;

  return (
    <>
      <div
        style={{
          marginBottom: "16px",
          border: "1px solid #1d1d1d",
          padding: "16px",
          position: "relative",
          borderRadius: "5px",
        }}
      >
        <p
          style={{
            position: "absolute",
            top: "-16px",
            background: "#FFF",
            fontWeight: 600,
            padding: "0 4px",
          }}
        >
          {question.pergunta}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {question.options.map((option, index) => (
            <div key={index} style={{ display: "flex", gap: "32px" }}>
              <input
                type="checkbox"
                value={option}
                checked={currentReply === option}
                onChange={({ target }) => setCurrentReply(target.value)}
              />
              <p>{option}</p>
            </div>
          ))}
        </div>
      </div>

      <button disabled={!currentReply} onClick={handleSubmit}>
        Próxima
      </button>
    </>
  );
};

export default ChallengeForm;
