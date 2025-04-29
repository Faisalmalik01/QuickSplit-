export default function ExpenseList({ expenses }) {
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-3">📋 Expenses</h2>
        {expenses.length === 0 ? (
          <p className="text-gray-500">No expenses added yet.</p>
        ) : (
          <ul className="space-y-2">
            {expenses.map((exp, idx) => (
              <li key={idx}>
                {exp.payer} paid ${exp.amount} for "{exp.description}"
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  