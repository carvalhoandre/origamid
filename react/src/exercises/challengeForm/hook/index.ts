import React from "react";

const questions = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const useChallengeQuestions = () => {
  const [corrections, setCorrections] = React.useState(0);
  const [page, setPage] = React.useState(0);

  const currentQuestion = questions[page] || null;

  const handleNextQuestion = (replay) => {
    if (currentQuestion.resposta === replay) {
      setCorrections((state) => ++state);
    }

    if (page < questions.length) {
      return setPage((state) => ++state);
    }

    return setPage(null);
  };

  return {
    showResult: questions.length === page,
    corrections,
    question: currentQuestion,
    handleNextQuestion,
  };
};

export default useChallengeQuestions;
