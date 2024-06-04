import Field from "./components/Field";
import fields from "./fields";

export default function App() {
  function teste() {
    try {
      chrome;
    } catch (error) {
      console.error("Seu ambiente não suporta a API do chrome");
      return;
    }
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log(tabs);
    });
  }

  return (
    <div className="p-[20px] w-[300px]">
      <h1 className="text-[24px]">
        <span className="text-[#009c3b]">B</span>
        <span className="text-[#ffdf00]">R</span>DocGen
      </h1>
      {fields.map((field) => (
        <Field key={field.id} {...field} />
      ))}
      <button onClick={teste}>Teste</button>
    </div>
  );
}
