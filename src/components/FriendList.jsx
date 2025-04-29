import { useState } from 'react';

export default function FriendList({ friends, onAddFriend }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    onAddFriend(input.trim());
    setInput('');
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-3">👥 Friends</h2>
      <div className="flex gap-2">
        <input
          className="border p-2 rounded w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter friend's name"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleAdd}>
          Add
        </button>
      </div>
      <ul className="mt-4 list-disc list-inside">
        {friends.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
