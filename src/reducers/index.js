 import { applyMiddleware, createStore } from "redux";
 import reducer from "./reducers";
 import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
 import thunk from "redux-thunk";
 import { Provider } from "react-redux";

  const store = createStore(
    reducer,
    composeWithDevTools({
      trace: true,
    })(applyMiddleware(thunk))
  );