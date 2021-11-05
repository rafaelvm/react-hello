export default function Checkbox({ value, onChange, description, id }) {
  return (
    <div className="flex flex-row my-4 items-center space-x-2">
      <input
        id={id}
        className="border border-purple-300 rounded-md pl-2"
        type="checkbox"
        value={value}
        onChange={onChange}
      />
      <label className="text-sm mb-1 mt-1">{description}</label>
    </div>
  );
}
