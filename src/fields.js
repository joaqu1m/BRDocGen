import ceps from "./assets/data/ceps";
import cnaes from "./assets/data/cnaes";
import cnpjs from "./assets/data/cnpjs";
import nomes from "./assets/data/nomes";
import sobrenomes from "./assets/data/sobrenomes";
import getRandomFrom from "./utils/getRandomFrom";

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
      const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
      const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

      let cnpj = getRandomFrom(cnpjs) + "0001";

      // for (let i = 0; i < 12; i++) {
      //   cnpj += Math.floor(Math.random() * 10) % 10;
      // }

      let sum = 0;
      for (let i = 0; i < 12; i++) {
        sum += parseInt(cnpj[i]) * pesos1[i];
      }
      let primDigit = sum % 11;
      primDigit = primDigit < 2 ? 0 : 11 - primDigit;
      cnpj += primDigit;

      sum = 0;
      for (let i = 0; i < 13; i++) {
        sum += parseInt(cnpj[i]) * pesos2[i];
      }
      let segDigit = sum % 11;
      segDigit = segDigit < 2 ? 0 : 11 - segDigit;
      cnpj += segDigit;

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
    id: "cep",
    label: "CEP",
    width: 250,
    generate() {
      return getRandomFrom(ceps);
    },
  },
  {
    id: "cnae",
    label: "CNAE",
    width: 250,
    generate() {
      return getRandomFrom(cnaes);
    },
  },
  {
    id: "prim_nome",
    label: "Primeiro Nome",
    width: 250,
    generate() {
      return getRandomFrom(nomes);
    },
  },
  {
    id: "ult_nome",
    label: "Último Nome",
    width: 250,
    generate() {
      return getRandomFrom(sobrenomes);
    },
  },
  {
    id: "nome",
    label: "Nome",
    width: 250,
    generate() {
      const qntSobrenomes = Math.floor(Math.random() * 3) + 1;
      const nome = getRandomFrom(nomes);
      const sobrenomesGerados = [];
      for (let i = 0; i < qntSobrenomes; i++) {
        sobrenomesGerados.push(getRandomFrom(sobrenomes));
      }
      return `${nome} ${sobrenomesGerados.join(" ")}`;
    },
  },
];
