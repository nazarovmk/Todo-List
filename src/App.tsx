import { useState } from "react";
import { Todo } from "./interface";
import FormElement from "./components/FormElement";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <FormElement
          setTodos={(newTodo: Todo) =>
            setTodos((prev: Todo[]) => [...prev, newTodo])
          }
        />

        <section className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            📋 Todo List
          </h2>

          {todos.length === 0 ? (
            <p className="text-center text-gray-500 italic">No todos yet...</p>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2">
              {todos.map((t) => (
                <li
                  key={t.id}
                  className="p-5 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Title: {t.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    <span className="font-bold">Description:</span>{" "}
                    {t.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 capitalize">
                      Type: {t.type}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        t.completed ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {t.completed ? "✅ Done" : "❌ Not yet"}
                    </span>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
