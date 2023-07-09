import CodeDisplay from "./components/CodeDisplay";
import MessagesDisplay from "./components/MessagesDisplay";

const App = () => {
  return (
    <div className="app">
      <MessagesDisplay />
      <input type="text" />
      <CodeDisplay />
      <div className="button-container">
        <button id="get-query">Get Query!</button>
        <button id="get-query">Clear Chat</button>
      </div>
    </div>
  );
};

export default App;
