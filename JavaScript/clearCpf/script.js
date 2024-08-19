const cpfsList = document.querySelectorAll(".cpf li");

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

const sanitizeCpf = (cpf) => {
  return cpf.replace(/\D/g, "");
};

const buildCpf = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};

const formatCpfs = (cpfs) => {
  return cpfs.map(sanitizeCpf).map(buildCpf);
};

const replaceCpfs = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormated = formatCpfs(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormated[index];
  });
};

replaceCpfs(cpfsList);
