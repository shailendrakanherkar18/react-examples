import { useMemo, useState } from "react";

const TodoUseMemoApp = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = useMemo(()=>{
    return expensiveCalculation(count)
  }, [count])

  // const calculation = expensiveCalculation(count);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const addTodo = () => {
    setTodos((todo) => [...todo, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{index + 1} {todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};


export default TodoUseMemoApp;