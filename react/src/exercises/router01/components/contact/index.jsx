import { Header } from "../header";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      <Header />

      <div>
        <ul>
          <li>
            <h1>André Leite Carvalho</h1>
          </li>
          <li>
            <a
              href="mailto:cavalho.devel@gmail.com?Subject=Olá André"
              target="_new"
              rel="external"
            >
              carvalho.devel@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Contact };
