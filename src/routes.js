import Blocks from "./containers/Blocks";
import SingleBlockData from "./containers/Blocks/Single Block Data";
import Dashboard from "./containers/Dashboard";
import Leaderboard from "./containers/Leaderboard";
import Poverdetail from "./containers/Pover Details";
import Transaction from "./containers/Transaction";
import TransactionDetails from "./containers/Transaction/Transaction Details";
import UnconfirmedTransaction from "./containers/Transaction/Unconfirmed Transaction";

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
    path: "/transactions/transactionDetail",
    element: <TransactionDetails />,
  },
  {
    path: "/transactions/unConfirmedTx",
    element: <UnconfirmedTransaction />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "/blocks/blockDetails",
    element: <SingleBlockData />,
  },
  {
    path: "/leaderboard/poverdetail",
    element: <Poverdetail />,
  },
]
export default routes;