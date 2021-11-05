import Header from "./components/Header/Header";
import Main from './pages/Main';


export default function App() {
  console.log("App renderizou... Parou na aula ...");

  return (
    <>
      <Header title="React-Hello" />
      <Main />
    </>
  );
}
