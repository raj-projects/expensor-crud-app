import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const InitialForm = {
  amount: null,
  description: '',
  date: new Date(),
};

export default function TransactionForm({ fetchTransaction }) {
  const [form, setForm] = useState(InitialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDate = (newValue) => {
    setForm({ ...form, date: newValue });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/transaction', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'content-type': 'application/json' },
    });
    if (res.ok) {
      setForm(InitialForm);
      fetchTransaction();
    }
  }

  return (
    <Card sx={{ minWidth: 275, mt: 10 }}>
      <CardContent>
        <Typography variant="h6">New Transaction</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            sx={{ mr: 5 }}
            // size="small"
            label="Amount"
            name="amount"
            variant="outlined"
            value={form.amount}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            sx={{ mr: 5 }}
            // size="small"
            label="Description"
            name="description"
            variant="outlined"
            value={form.description}
            onChange={handleChange}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              sx={{ mr: 5 }}
              label="Transaction Date"
              inputFormat="MM/DD/YYYY"
              onChange={handleDate}
              renderInput={(params) => (
                <TextField value={form.date} size="small" {...params} />
              )}
            />
          </LocalizationProvider>
          <Button type="submit" size="large" variant="contained">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
