import Config from "./pages/Config";
import Extension from "./pages/Extension";

const pages = {
  config: Config,
};

export default function App() {
  const search = window.location.search
    .substring(1)
    .split("&")
    .map((item) => item.split("="));
  const { page } = Object.fromEntries(search);

  return (pages[page] || Extension)();
}
