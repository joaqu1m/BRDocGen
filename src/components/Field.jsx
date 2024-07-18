import { useState } from "react";

const refreshIcon = chrome.runtime.getURL("src/assets/imgs/refresh.svg");

export default function Field({ label, id, width, generate }) {
  const [value, setValue] = useState(generate());

  return (
    <div className="flex flex-col w-fit">
      <label htmlFor={id}>{label}</label>
      <div
        className="relative flex items-center justify-center"
        style={{ width: `${width}px` }}
      >
        <input
          id={id}
          type="text"
          className="w-full h-full outline-none rounded-[10px] px-2 py-2 border-[#ddd] border-2"
          value={value}
          onFocus={(e) => e.target.select()}
        />
        <button
          className="absolute right-[10px]"
          onClick={() => {
            setValue(generate());
          }}
        >
          <img src={refreshIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
