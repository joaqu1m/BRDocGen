import Field from "../components/Field";
import fields from "../fields";

export default function Extension() {
  return (
    <div className="p-[20px] w-[300px]">
      <h1 className="text-[24px]">
        <span className="text-[#009c3b]">B</span>
        <span className="text-[#ffdf00]">R</span>DocGen
      </h1>
      {fields.map((field) => (
        <Field key={field.id} {...field} />
      ))}
    </div>
  );
}
