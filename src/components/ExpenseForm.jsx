import { useState } from 'react';

export default function ExpenseForm({ friends, onAddExpense }) {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [payer, setPayer] = useState('');

  const handleSubmit = () => {
    onAddExpense(desc, amount, payer);
    setDesc('');
    setAmount('');
    setPayer('');
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-3">💸 Add Expense</h2>
      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        className="border p-2 rounded w-full mb-2"
        value={payer}
        onChange={(e) => setPayer(e.target.value)}
      >
        <option value="">Select who paid</option>
        {friends.map((f, idx) => (
          <option key={idx} value={f}>
            {f}
          </option>
        ))}
      </select>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>
        Add Expense
      </button>
    </div>
  );
}
