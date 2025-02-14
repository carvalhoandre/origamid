import FintechSVG from "../assets/FintechSVG";

import SummarySVG from "../assets/icons/resumo.svg";
import SalesSVG from "../assets/icons/vendas.svg";
import WebHooksSVG from "../assets/icons/webhooks.svg";
import ContactsSVG from "../assets/icons/contato.svg";
import SettingsSVG from "../assets/icons/configuracoes.svg";
import ExitSVG from "../assets/icons/sair.svg";

const Sadenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech logo" />

      <ul>
        <li>
          <span>
            <img src={SummarySVG} alt="Resumo" />
          </span>

          <a href="">Resumo</a>
        </li>
        <li>
          <span>
            <img src={SalesSVG} alt="Resumo" />
          </span>
          <a href="">Vendas</a>
        </li>

        <li>
          <span>
            <img src={WebHooksSVG} alt="Resumo" />
          </span>
          <a href="">Webhooks</a>
        </li>
        <li>
          <span>
            <img src={SettingsSVG} alt="Resumo" />
          </span>
          <a href="">Configurações</a>
        </li>
        <li>
          <span>
            <img src={ContactsSVG} alt="Resumo" />
          </span>
          <a href="">Contato</a>
        </li>
        <li>
          <span>
            <img src={ExitSVG} alt="Resumo" />
          </span>
          <a href="">Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sadenav;
