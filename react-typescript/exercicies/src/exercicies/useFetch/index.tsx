import useFetch from "../../hooks/useFetch";
import { Product } from "./types";

const UseFetch = () => {
  const { data, loading, error } = useFetch<Array<Product>>(
    "https://data.origamid.dev/produtos");
    
    if(loading) return <div>Carregando...</div>
    if(error) return <div>Erro ao carregar dados</div>
    if(!data) return null

    return (
        <div>
            {data.map((product) => (
                <div key={product.id}>
                    <h2>{product.nome}</h2>
                    <p>{product.descricao}</p>
                    <p>{product.preco}</p>
                    <p>{product.quantidade}</p>
                    <p>{product.internacional ? "Internacional" : "Nacional"}</p>
                </div>
            ))}

        </div>
    )
};

export default UseFetch;

