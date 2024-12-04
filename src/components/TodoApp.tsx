import React, { useEffect, useState } from "react";
import { useTodoStore } from "../store/todoStore";
import { Todo } from "../store/todoStore";
import { v4 as uuidv4 } from "uuid";

const TodoApp = () => {
  const { todos, addTodo, deleteTodo, updateStatus } = useTodoStore();
  const [text, setText] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showUnCompleted, setShowUnCompleted] = useState(false);
  const [CompletedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const [unCompletedTodos, setUncompletedTodos] = useState<Todo[]>([]);
  const uniqueId = uuidv4();

  function createTodo() {
    const todoValues: Todo = {
      todo: {
        text: text,
        completed: completed,
        id: uniqueId,
      },
    };

    addTodo(todoValues);
    setText("");
    setCompleted(false);
  }

  useEffect(() => {
    setCompletedTodos(todos.filter((todo) => todo.todo.completed));
    setUncompletedTodos(todos.filter((todo) => !todo.todo.completed));
  }, [todos]);

  return (
    <div className="flex justify-center">
      <div className="w-2/6 bg-blue-200 h-100% border-4 border-red-500">
        <div className="flex justify-center flex-col">
          <h2 className="text-2xl text-blue-900 text-center font-bold">
            {" "}
            Todo App
          </h2>
          <div className="flex justify-center my-4">
            <input
              placeholder="Enter todo task"
              className="px-4 py-1 rounded"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="bg-green-500 px-3 ml-4 rounded text-blue-900"
              onClick={createTodo}
            >
              AddTodo
            </button>
          </div>
        </div>
        {todos.length !== 0 &&
          todos.map((todo) => (
            <div
              className="flex relative group justify-between items-center"
              style={{ marginLeft: "20px" }}
              key={todo.todo.id}
            >
              <div className="p-2">
                <input
                  className="mr-4"
                  type="checkbox"
                  checked={todo.todo.completed}
                  onChange={(e) => {
                    updateStatus(todo.todo.id, e.target.checked);
                  }}
                />
                {todo.todo.text}
              </div>

              <div className="mr-12 p-2   ">
                <button
                  className="text-lg hidden group-hover:block"
                  onClick={() => deleteTodo(todo.todo.id)}
                >
                  x
                </button>
              </div>
            </div>
          ))}
        <div className="flex justify-between m-2">
          <h3>Completed: {CompletedTodos.length}</h3>
          <h3>Not Completed: {unCompletedTodos.length}</h3>
        </div>
        <hr />
        <div className="my-4">
          <div className="flex flex-row justify-center">
            {" "}
            <h3 className="text-center"> Completed Task(s):</h3>
            <button
              className="bg-pink-500 px-3 ml-4 rounded text-blue-900 border-4 border-yellow-200"
              onClick={() => setShowCompleted(!showCompleted)}
            >
              {showCompleted ? "Hide " : "Show "}
            </button>
          </div>
          {CompletedTodos.map((todo) => (
            <div className="ml-4">
              <ol>{showCompleted && <li>{todo.todo.text}</li>}</ol>
            </div>
          ))}
        </div>
        <hr />
        <div className="my-4">
          <div className="flex flex-row justify-center">
            <h3>Not Completed Task(s)</h3>
            <button
              className="bg-pink-500 px-3 ml-4 rounded text-blue-900 border-4 border-yellow-200"
              onClick={() => setShowUnCompleted(!showUnCompleted)}
            >
              {showUnCompleted ? " Hide" : "Show "}
            </button>
          </div>
          {unCompletedTodos.map((todo) => (
            <div className="ml-4">
              <>{showUnCompleted && <div>{todo.todo.text}</div>}</>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
