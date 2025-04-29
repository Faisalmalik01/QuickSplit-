import { useState, useCallback } from 'react';
import FriendList from './components/FriendList';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import SplitResult from './components/SplitResult';
import { calculateSplits } from './utils/splitLogic';

function App() {
  const [friends, setFriends] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addFriend = (name) => {
    if (!name || friends.includes(name)) return;
    setFriends([...friends, name]);
  };

  const addExpense = (description, amount, payer) => {
    if (!description || !amount || !payer) return;
    setExpenses([...expenses, { description, amount: parseFloat(amount), payer }]);
  };

  const results = useCallback(() => calculateSplits(friends, expenses), [friends, expenses]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-green-100 p-6">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">QuickSplit 🧮</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <FriendList friends={friends} onAddFriend={addFriend} />
          <ExpenseForm friends={friends} onAddExpense={addExpense} />
        </div>

        <div className="space-y-6">
          <ExpenseList expenses={expenses} />
          <SplitResult results={results()} />
        </div>
      </div>
    </div>
  );
}

export default App;
