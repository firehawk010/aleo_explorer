import Blocks from "./containers/Blocks";
import Dashboard from "./containers/Dashboard";
import Leaderboard from "./containers/Leaderboard";
import Transaction from "./containers/Transaction";

const routes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/blocks",
    element: <Blocks />,
  },
  {
    path: "/transactions",
    element: <Transaction />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
]
export default routes;