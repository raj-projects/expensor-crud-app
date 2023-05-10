import { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: '',
    date: '', 
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
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

      <input type="date" value={form.date} name="date" onChange={handleInput} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
