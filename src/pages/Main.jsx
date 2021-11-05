import { useEffect, useState } from "react";
import Checkbox from "./../components/Checkbox/Checkbox";
import Timer from "./../components/Timer/Timer";
import TextInput from "./../components/Input/TextInput";
import DateInput from "./../components/DateInput/DateInput";
import getAgeFrom from "./../helpers/dateHelpers";
import StatusApp from "./../components/StatusApp/StatusApp";

export default function Main() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("1997-05-08");
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    function toggleOnline() {
      setIsOnline(true);
    }

    function toggleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", toggleOnline);
    window.addEventListener("offline", toggleOffline);

    return () => {
      window.removeEventListener("online", () => {
        setIsOnline(true);
      });
      window.removeEventListener("offline", () => {
        setIsOnline(false);
      });
    };
  }, []);

  return (
    <main className="p-5">
      <div className="flex justify-between items-center">
        <Checkbox
          description="Mostrar timer"
          value={showTimer}
          onChange={(event) => setShowTimer(event.currentTarget.checked)}
        />
        {showTimer && (
          <div className="text-right">
            <Timer />
          </div>
        )}
      </div>

      <TextInput
        id="textInput"
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
        description="seu nome"
      />
      <DateInput
        id="dateInput"
        value={age}
        onChange={(event) => setAge(event.currentTarget.value)}
        description="sua data de nascimento"
      />

      {!name ? (
            <p className="container pt-5 pb-10">Sem um nome, nada posso fazer...</p>
          ) : (
            <p className="container pt-5 pb-10">
            O seu nome é <strong>{name}</strong>, com <strong>{name.length}</strong>{" "}
            caracteres e você possui <strong>{getAgeFrom(age)}</strong> anos!
          </p>
          )}

      <StatusApp description="A aplicação está: " isOnline={isOnline} />
    </main>
  );
}
