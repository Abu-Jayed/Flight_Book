import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import BookList from "./components/Section/BookList";
import InputSection from "./components/Section/InputSection";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
      <Header></Header>
      <InputSection></InputSection>
      <BookList></BookList>
      </Provider>
    </>
  );
}

export default App;
