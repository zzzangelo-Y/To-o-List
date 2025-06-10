export function Lista({ contenido, onDelete }) {
  return (
    <li className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 p-3 bg-gray-100 rounded-lg">
      <span className="text-gray-800 text-sm sm:text-base break-words">{contenido}</span>
      <button
        onClick={onDelete}
        className="text-white bg-red-500 px-4 py-1 rounded-full hover:bg-red-600 transition"
      >
        Eliminar
      </button>
    </li>
  );
}
