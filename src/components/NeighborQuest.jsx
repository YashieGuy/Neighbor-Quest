import React, { useState } from 'react';

export default function NeighborQuest() {
  const [quests, setQuests] = useState([
    { id: 1, title: 'Help mow Mrs. Lee\'s lawn', completed: false },
    { id: 2, title: 'Carry groceries for Mr. Gomez', completed: false }
  ]);
  const [newQuest, setNewQuest] = useState('');

  const addQuest = () => {
    if (newQuest.trim() === '') return;
    setQuests([...quests, { id: Date.now(), title: newQuest, completed: false }]);
    setNewQuest('');
  };

  const toggleQuest = (id) => {
    setQuests(quests.map(q => q.id === id ? { ...q, completed: !q.completed } : q));
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Neighbor Quest</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          className="border p-2 rounded w-64"
          placeholder="Enter a new quest..."
          value={newQuest}
          onChange={(e) => setNewQuest(e.target.value)}
        />
        <button
          onClick={addQuest}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md">
        {quests.map((quest) => (
          <li
            key={quest.id}
            className="flex justify-between items-center bg-white p-3 mb-2 rounded shadow"
          >
            <span className={quest.completed ? 'line-through text-gray-400' : ''}>
              {quest.title}
            </span>
            <button
              onClick={() => toggleQuest(quest.id)}
              className={`px-3 py-1 rounded ${quest.completed ? 'bg-gray-400' : 'bg-green-500 text-white hover:bg-green-600'}`}
            >
              {quest.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
