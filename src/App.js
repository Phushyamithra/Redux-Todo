import { useState } from 'react';
import './App.css'; // Ensure Tailwind CSS is properly imported
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './slices/todoSlice';
import { v4 as uuid } from 'uuid';

function App() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector(state => state.todos);

  const onAddClick = () => {
    dispatch(addTodo({
      id: uuid(),
      todo: inputText
    }));
    setInputText("");
  };

  const onDeleteClick = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex items-center justify-center py-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Todo App
        </h1>
        <div className="flex mb-4">
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            type="text"
            placeholder="Enter a todo..."
            className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:border-purple-500"
          />
          <button
            onClick={onAddClick}
            className="bg-purple-700 text-white px-4 py-2 rounded-r hover:bg-purple-600 transition duration-300"
          >
            Add
          </button>
        </div>
        <div className="space-y-3">
          {todos?.length > 0 && todos.map((todo) => (
            <div key={todo.id} className="flex justify-between items-center bg-gray-200 p-3 rounded-md shadow-sm">
              <span className="text-gray-800">{todo.todo}</span>
              <button
                onClick={() => onDeleteClick(todo.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
