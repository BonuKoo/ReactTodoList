import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    //todos 배열의 filter 메서드를 호출
    //그 결과 값을 반환
    // 기준 : 배열의 모든 todo를 순회하면서
    // 연산의 결과 값이 true가 되는 todo의 item만
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLocaleLowerCase())
    );
  };

  const filterdTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List📝</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />
      <div className="todos_wrapper">
        {filterdTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
