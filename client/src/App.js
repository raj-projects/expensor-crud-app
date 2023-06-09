import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.js';
import './index.css';
import TransactionForm from './components/TransactionForm';
import TransactionsList from './components/TransactionsList';
import { Container } from '@mui/material';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [editTransactions, setEditTransactions] = useState([]);

  async function fetchTransaction() {
    const res = await fetch('http://localhost:4000/transaction');
    const { data } = await res.json();
    setTransactions(data);
  }

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <TransactionForm fetchTransaction={fetchTransaction} editTransactions={editTransactions} />
        <TransactionsList
          transactions={transactions}
          fetchTransaction={fetchTransaction}
          setEditTransactions={setEditTransactions}
        />
      </Container>
    </>
  );
}

export default App;
