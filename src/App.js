import "./App.css";
import ListingsHome from "./components/listingsHome/listingsHome";
import { Provider } from "react-redux";
import store from "./components/api/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ListingsHome />
      </Provider>
    </>
  );
}

export default App;
