import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import 'tachyons';
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
