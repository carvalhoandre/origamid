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
}
