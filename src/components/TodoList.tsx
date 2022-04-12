import React from "react";
import { Todo } from "../types/type";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

// TO-DO: Debug app crash upon splicing through IN PROGRESS droppable. 

interface props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  CompletedTodos: Array<Todo>;
//   InProgTodos: Array<Todo>;
//   setInProgTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<props> = ({
  todos,
  setTodos,
//   InProgTodos,
//   setInProgTodos,
  CompletedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading"> Tasks To Do</span>
            {todos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {/* <Droppable droppableId="TodosInProg">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos ${snapshot.isDraggingOver ? "draginprog" : ""}`}
          >
            <span className="todos__heading">In Progress</span>
            {InProgTodos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={InProgTodos}
                todo={todo}
                key={todo.id}
                setTodos={setInProgTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable> */}

      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
          >
            <span className="todos__heading">Completed Tasks</span>
            {CompletedTodos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={CompletedTodos}
                todo={todo}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;