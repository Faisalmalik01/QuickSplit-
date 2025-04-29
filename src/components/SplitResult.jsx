export default function SplitResult({ results }) {
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-3">📊 Who Owes Whom</h2>
        {results.length === 0 ? (
          <p className="text-gray-500">No balances to show.</p>
        ) : (
          <ul className="space-y-2">
            {results.map((res, idx) => (
              <li key={idx}>
                {res.from} owes {res.to} ${res.amount.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  