export default function DateInput({ value, onChange, description, id }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm mb-2 mt-2">Digite {description}:</label>
      <input
        id={id}
        className="border border-purple-300 rounded-md pl-2"
        type="date"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
