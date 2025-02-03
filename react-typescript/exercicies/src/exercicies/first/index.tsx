import React from "react";

import { formatedDate } from "../../utils/date";

import Input from "../../components/Input";
import { Sales } from "../../types/first";
import ShowingSales from "./components/Sales";

const First = () => {
  const [start, setStart] = React.useState<string>();
  const [final, setFinal] = React.useState<string>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const [sales, setSales] = React.useState<Array<Sales>>();

  const handleOnSubmit = async () => {
    if (!start || !final) return;

    try {
      setLoading(true);
      setError(null);

      const request = await fetch(
        `https://data.origamid.dev/vendas/?inicio=${formatedDate(
          start
        )}&final=${formatedDate(final)}`
      );

      if (!request.ok) throw new Error("Erro ao buscar dados");

      const response = await request.json();

      setSales(response);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    handleOnSubmit();
  }, [start, final]);

  return (
    <div>
      <div>
        <Input
          label="Data de inicio"
          type="date"
          value={start}
          onChange={(event) =>
            setStart((event.target as HTMLInputElement).value)
          }
        />
        <Input
          label="Data final"
          type="date"
          value={final}
          onChange={(event) =>
            setFinal((event.target as HTMLInputElement).value)
          }
        />
      </div>

      <button onClick={handleOnSubmit} disabled={!start || !final || loading}>
        {loading ? "Pesquisando..." : "Pesquisar"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {sales && sales.length > 0 && <ShowingSales sales={sales} />}
    </div>
  );
};

export default First;
