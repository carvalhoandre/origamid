export default class ValidingCpf {
  constructor(element) {
    this.element = element;
  }

  clear(cpf) {
    return cpf.replace(/\D/g, "");
  }

  build(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }

  format(cpf) {
    const cpfFormated = this.clear(cpf);

    return this.build(cpfFormated);
  }

  validate(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);

    return matchCpf && matchCpf[0] === cpf;
  }

  validateAfterChange(cpfElement) {
    if (this.validate(cpfElement.value)) {
      cpfElement.value = this.format(cpfElement.value);
      cpfElement.classList.add("valido");
      cpfElement.classList.remove("erro");
      cpfElement.nextElementSibling.classList.remove("ativar");
    } else {
      cpfElement.classList.add("erro");
      cpfElement.classList.remove("valido");
      cpfElement.nextElementSibling.classList.add("ativar");
    }
  }

  addingEvent() {
    this.element.addEventListener("change", () => {
      this.validateAfterChange(this.element);
    });
  }

  addErrorSpan() {
    const errorElement = document.createElement("span");
    errorElement.classList.add("erro-text");
    errorElement.innerText = "CPF inválido";

    this.element.parentElement.insertBefore(
      errorElement,
      this.element.nextElementSibling
    );
  }

  init() {
    this.addingEvent();
    this.addErrorSpan();
    return this;
  }
}
