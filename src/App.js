import "./styles.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvdier } from "./context/GlobalContext";

export default function App() {
  return (
    <GlobalProvdier>
      <Header />
      <Balance />
      <IncomeExpense />
      <History />
      <AddTransaction />
    </GlobalProvdier>
  );
}
