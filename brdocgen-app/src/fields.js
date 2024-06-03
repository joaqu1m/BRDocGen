import nomes from "./assets/nomes";
import sobrenomes from "./assets/sobrenomes";

export default [
  {
    id: "cpf",
    label: "CPF",
    width: 250,
    generate() {
      let cpf = "";
      for (let i = 0; i < 8; i++) {
        cpf += Math.floor(Math.random() * 10) % 10;
      }
      cpf += "8";

      let sum = 0;
      for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf[i]) * (i + 1);
      }
      cpf += (sum % 11) % 10;

      sum = 0;
      for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf[i]) * i;
      }
      cpf += (sum % 11) % 10;

      return cpf;
    },
  },
  {
    id: "cnpj",
    label: "CNPJ",
    width: 250,
    generate() {
      let cnpj = "";
      for (let i = 0; i < 12; i++) {
        cnpj += Math.floor(Math.random() * 10) % 10;
      }

      let sum = 0;
      for (let i = 0; i < 12; i++) {
        sum += parseInt(cnpj[i]) * (i < 4 ? i + 5 : 13 - i);
      }
      cnpj += (sum % 11) % 10;

      sum = 0;
      for (let i = 0; i < 13; i++) {
        sum += parseInt(cnpj[i]) * (i < 5 ? i + 6 : 14 - i);
      }
      cnpj += (sum % 11) % 10;

      return cnpj;
    },
  },
  {
    id: "rg",
    label: "RG",
    width: 250,
    generate() {
      let rg = "";
      for (let i = 0; i < 8; i++) {
        rg += Math.floor(Math.random() * 10) % 10;
      }
      return rg;
    },
  },
  {
    id: "prim_nome",
    label: "Primeiro Nome",
    width: 250,
    generate() {
      return nomes[Math.floor(Math.random() * nomes.length)];
    },
  },
  {
    id: "ult_nome",
    label: "Último Nome",
    width: 250,
    generate() {
      return nomes[Math.floor(Math.random() * nomes.length)];
    },
  },
  {
    id: "nome",
    label: "Nome",
    width: 250,
    generate() {
      const qntSobrenomes = Math.floor(Math.random() * 3) + 1;
      const nome = nomes[Math.floor(Math.random() * nomes.length)];
      const sobrenomesGerados = [];
      for (let i = 0; i < qntSobrenomes; i++) {
        sobrenomesGerados.push(
          sobrenomes[Math.floor(Math.random() * sobrenomes.length)]
        );
      }
      return `${nome} ${sobrenomesGerados.join(" ")}`;
    },
  },
];
