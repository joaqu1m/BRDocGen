export default function Field({ label, id, width }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <div className={`relative ${width}`}>
        <input
          id={id}
          type="text"
          className="w-full h-full outline-none px-2 py-2 border-[#ddd] border-2"
        />
      </div>
    </div>
  );
}
