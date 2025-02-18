import { NavLink } from "react-router-dom";

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

          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={SalesSVG} alt="Resumo" />
          </span>
          <NavLink to="/sales">Vendas</NavLink>
        </li>

        <li>
          <span>
            <img src={WebHooksSVG} alt="Resumo" />
          </span>
          <NavLink to="/">Webhooks</NavLink>
        </li>
        <li>
          <span>
            <img src={SettingsSVG} alt="Resumo" />
          </span>
          <NavLink to="/">Configurações</NavLink>
        </li>
        <li>
          <span>
            <img src={ContactsSVG} alt="Resumo" />
          </span>
          <NavLink to="https://www.andreleitecarvalho.space">Contato</NavLink>
        </li>
        <li>
          <span>
            <img src={ExitSVG} alt="Resumo" />
          </span>
          <NavLink to="/">Sair</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sadenav;
