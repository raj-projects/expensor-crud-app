import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: '',
    date: '',
  });
  const [transactions, setTransactions] = useState([]);

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/transaction', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'content-type': 'application/json' },
    });
    const data = await res.json();
    console.log(data);
  }

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
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleInput}
          placeholder="Enter transuction Amount"
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleInput}
          placeholder="Enter transuction details"
        />

        <input
          type="date"
          value={form.date}
          name="date"
          onChange={handleInput}
        />

        <button type="submit">Submit</button>
      </form>

      <br />
      <section>
        <table border="1">
          <tr>
            <td>Amount</td>
            <td>Details</td>
            <td>Transaction Date</td>
          </tr>
          {transactions.map((trx) => (
            <tr>
              <td>{trx.amount}</td>
              <td>{trx.description}</td>
              <td>{trx.date}</td>
            </tr>
          ))}
        </table>
      </section>
    </>
  );
}

export default App;
