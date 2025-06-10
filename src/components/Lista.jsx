export function  Lista ({contenido, onDelete }){
  return <li className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
      <span className="text-gray-800">{contenido}</span>
      <button onClick={onDelete}  className="text-red-600 border-2 px-3 bg-black rounded-3xl">Eliminar</button>
    </li>
}