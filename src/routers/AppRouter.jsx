import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { JournalPage } from "../components/journal/pages/JournalPage";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route path="/" component={JournalPage} />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
