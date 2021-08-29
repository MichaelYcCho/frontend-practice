import ReduxPage from "screen/ReduxPage";
import RecoilPage from "screen/RecoilPage";
import { RecoilRoot } from "recoil";
import { Provider } from 'react-redux'
import store from "./store";
import "./App.css"

function App() {
  return (
    <>
      <Provider store={store}>
        <ReduxPage />
      </Provider>

      <RecoilRoot>
        <RecoilPage />
      </RecoilRoot>
    </>
  );
}

export default App;
