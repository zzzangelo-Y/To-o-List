import { useState, useCallback } from "react";
import { Lista } from "../components/Lista";
import { InputTarea } from "./InputTarea";

export function App() {
  const [input, setInput] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleInputChange = (e) => setInput(e.target.value);

  const agregarTarea = useCallback(() => {
    const nuevaTarea = input.trim();
    if (!nuevaTarea) return;
    setTareas((prev) => [...prev, nuevaTarea]);
    setInput("");
  }, [input]);

  const eliminarTarea = useCallback(
    (indexAEliminar) => {
      setTareas((prev) => prev.filter((_, i) => i !== indexAEliminar));
    },
    []
  );


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-2 text-gray-800">To do List React</h1>
      <p className="text-xs text-center mb-4 text-red-600">
        Proyecto desarrollado por AngeloDev | Tecnologías: React + Astro
      </p>

      <InputTarea value={input} onChange={handleInputChange} onSubmit={agregarTarea} />
      <ul className="space-y-2">
        {tareas.map((contenido, index) => (
          <Lista key={index} contenido={contenido} onDelete={() => eliminarTarea(index)} />
        ))}
      </ul>
    </div>
  );
}
