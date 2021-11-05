export default function Header({ title }) {
  return (
    <header>
      <div className="bg-purple-300 mx-auto p-4">
        <h1 className="text-center font-semibold text-xl">{title}</h1>
      </div>
    </header>
  );
}
