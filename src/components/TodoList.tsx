import { useAppSelector } from "../store";

export function TodoList() {
  const todos = useAppSelector(store => store?.todo);

  return (
    <ul>
      {todos?.map((item, index) => (
        <li key={`todo-${index}`}>{item}</li>
      ))}
    </ul>
  )
}