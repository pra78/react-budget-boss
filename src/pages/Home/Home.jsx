import Balance from 'components/Balance/Balance';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import AddTransaction from 'components/AddTransaction/AddTransaction';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import { Outlet } from 'react-router-dom';

const Home = () => {
  <div>
    <Balance />
    <Link to="reports">Reports</Link>
    <div>
      <Link to="expenses">Expenses</Link>
      <Link to="income">Income</Link>
    </div>
    <AddTransaction></AddTransaction>
    <TransactionsList></TransactionsList>
    <Suspense>
      <Outlet />
    </Suspense>
  </div>;
};

export default Home;
