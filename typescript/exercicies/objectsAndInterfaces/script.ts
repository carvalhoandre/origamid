// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

interface UserData {
  nome?: string;
  email?: string;
  cpf?: number;
}

interface Window {
  UserData: UserData;
}

window.UserData = {};

function isUserData(obj: unknown): obj is UserData {
  return (
    !!obj &&
    typeof obj === "object" &&
    ("nome" in obj || "email" in obj || "cpf" in obj)
  );
}

function validJSON(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
}

function handleLocalStorage() {
  const localUserData = localStorage.getItem("UserData");

  if (localUserData && validJSON(localUserData)) {
    const UserData = JSON.parse(localUserData);

    if (isUserData(UserData)) {
      Object.entries(UserData).forEach(([key, value]) => {
        const input = document.getElementById(key);

        if (input instanceof HTMLInputElement) {
          input.value = value;

          window.UserData[key] = value;
        }
      });
    }
  }
}

function handleOnChange({ target }: KeyboardEvent) {
  if (!(target instanceof HTMLInputElement)) return;

  window.UserData[target.id] = target.value;

  localStorage.setItem("UserData", JSON.stringify(window.UserData));
}

const form = document.querySelector<HTMLFormElement>("#form");

form?.addEventListener("keyup", handleOnChange);
