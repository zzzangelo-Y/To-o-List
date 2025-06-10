export function InputTarea({ value, onChange, onSubmit }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSubmit();
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <input
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="Escribe una tarea..."
        className="flex-1 w-full sm:w-auto px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onSubmit}
        className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Agregar
      </button>
    </div>
  );
}
