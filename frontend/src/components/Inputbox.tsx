import { ChangeEvent } from "react";

interface Labelinputchange {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const InputBox = ({
  label,
  placeholder,
  onChange,
  type,
}: Labelinputchange) => {
  return (
    <div>
      <div className="m-2">
        <label className="block mb-2 text-sm  font-bold text-gray-900 ">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};
