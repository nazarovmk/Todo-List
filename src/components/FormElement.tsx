import { FormEvent, useRef } from "react";
import { Todo } from "../interface";

interface FormElementProps {
  setTodos: (todo: Todo) => void;
}

function FormElement({ setTodos }: FormElementProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title")?.toString().trim() || "";
    const description = formData.get("description")?.toString().trim() || "";
    const completed = formData.get("completed") === "on";
    const type = formData.get("type")?.toString() || "";

    if (!title || !description) return alert("Please fill all fields");

    const todo: Todo = {
      id: Date.now(),
      title,
      description,
      completed,
      type,
    };

    setTodos(todo);
    e.currentTarget.reset();
    inputRef.current?.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Add Todo</h2>

      <div>
        <label htmlFor="title" className="block font-medium text-gray-700">
          Title:
        </label>
        <input
          ref={inputRef}
          id="title"
          name="title"
          type="text"
          className="w-full px-3 py-2 border-2 border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block font-medium text-gray-700"
        >
          Description:
        </label>
        <textarea
          name="description"
          id="description"
          className="w-full px-3 py-2 border-2 border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="completed"
          id="completed"
          className="w-4 h-4"
        />
        <label htmlFor="completed" className="text-gray-700">
          Completed
        </label>
      </div>

      <div>
        <label htmlFor="type" className="block font-medium text-gray-700">
          Type:
        </label>
        <select
          name="type"
          id="type"
          className="w-full px-3 py-2 border-2 border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="hard">Hard</option>
          <option value="normal">Normal</option>
          <option value="easy">Easy</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add Todo
      </button>
    </form>
  );
}

export default FormElement;
