import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import { Todo } from "./types/type";
import { DragDropContext, DropResult } from "react-beautiful-dnd"
import CallToActionWithAnnotation from "./components/hero";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [CompletedTodos, setCompletedTodos] = useState<Array<Todo>>([]);
  // const [InProgTodos, setInProgTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    // let prog = InProgTodos;
    let complete = CompletedTodos;

    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    // } else if(source.droppableId = "TodosInProg"){
    //   add = prog[source.index]
    //   prog.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    // } else if(destination.droppableId === "TodosInProg") {
    //   prog.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    // setInProgTodos(prog);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <CallToActionWithAnnotation />
        <Search todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          CompletedTodos={CompletedTodos}
          setCompletedTodos={setCompletedTodos}
          // InProgTodos={InProgTodos}
          // setInProgTodos={setInProgTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;