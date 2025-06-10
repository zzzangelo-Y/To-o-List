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
    <div className="w-full max-w-md mx-auto mt-6 p-4 bg-white rounded-2xl shadow-md sm:mt-10 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 text-gray-800">
        To do List React
      </h1>

      <div className="flex flex-col items-center gap-2 mb-4">
        <a
          className="p-2 rounded hover:bg-gray-100 transition"
          href="https://github.com/zzzangelo-Y/To-o-List"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github text-2xl"></i>
        </a>
        <p className="text-xs text-center text-red-600">
          Desarrollado por <strong>AngeloDev</strong> | Tecnologías: React + Astro
        </p>
      </div>

      <InputTarea
        value={input}
        onChange={handleInputChange}
        onSubmit={agregarTarea}
      />

      <ul className="space-y-2 mt-4">
        {tareas.map((contenido, index) => (
          <Lista key={index} contenido={contenido} onDelete={() => eliminarTarea(index)} />
        ))}
      </ul>
    </div>
  );
}
