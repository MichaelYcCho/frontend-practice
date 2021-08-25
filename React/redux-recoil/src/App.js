import ReduxPage from "screen/ReduxPage";
import { Provider } from 'react-redux'
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ReduxPage />
      </Provider>
    </>
  );
}

export default App;
