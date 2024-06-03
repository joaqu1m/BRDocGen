import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.getElementById("teste").addEventListener("click", () => {
      try {
        chrome;
      } catch (error) {
        console.error("Seu ambiente não suporta a API do chrome");
        return;
      }
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        console.log(tabs);
      });
    });
  }, []);

  return (
    <div>
      <h1 className="title">
        <span className="B">B</span>
        <span className="R">R</span>DocGen
      </h1>
      <button>Gerar CPF</button>
      <button>Gerar RG</button>
      <button>Gerar CNPJ</button>
      <button>Gerar Tel</button>
      <button id="teste">Teste</button>
    </div>
  );
}
