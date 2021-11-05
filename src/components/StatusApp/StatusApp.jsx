export default function StatusApp({ isOnline, description }) {
  const className = isOnline ? "bg-green-200" : "bg-red-200";
  return (
    <div>
      {description}
      <span className={`${className} font-semibold p-1 rounded-md`}>
        {isOnline ? "Online" : "Offline"}
      </span>
    </div>
  );
}
