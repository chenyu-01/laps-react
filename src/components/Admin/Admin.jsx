import React, { useState } from 'react';
import TestLayout from '../TestLayout';
import addIcon from '../../assets/add.png';
import queryIcon from '../../assets/query.svg';
import PersonCardComponent from './PersonCard';

function AdminPage() {
  //const { personCount } = props;

  const renderPersonCards = () => {
    var personCount = 11; //for test
    return Array.from({ length: personCount }, (_, index) => (
      <PersonCardComponent key={index} />
    ));
  };

  return (
    <TestLayout>
      <div className="flex flex-col gap-5">
        <AdminTitle />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {renderPersonCards()}
        </div>
      </div>
    </TestLayout>
  );
}

function AdminTitle() {
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState('');

  const handleButtonClick = () => {
    setShowInput(true);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const sendQuery = (queryContent) => {
    console.log('Sending query:', queryContent);
    // To Do:
  };

  const handleBlur = () => {
    if (!query) {
      setShowInput(false);
    }
    sendQuery(query);
  };

  const handleAddClick = () => {
    console.log('Add button clicked');
    // To Do:
  };

  return (
    <div className="flex justify-between items-center px-5">
      <header className="text-black text-2xl font-bold">User Records</header>

      <div className="flex items-center">
        {!showInput && (
          <div className="flex items-center">
            <select className="bg-white rounded text-sm text-neutral-400 p-2 focus:outline-none focus:ring focus:border-blue-300 mr-4">
              <option value="">Select Type</option>
              <option value="type1">Type1</option>
              <option value="type2">Type2</option>
              {/* More options */}
            </select>
            <button
              onClick={handleAddClick}
              className="flex items-center justify-center p-2 mr-4"
            >
              <img src={addIcon} alt="Add" className="w-4 h-4" />
            </button>
          </div>
        )}

        {showInput ? (
          <div className="flex items-center">
            <input
              type="text"
              value={query}
              onChange={handleQueryChange}
              className="border border-gray-300 rounded p-2"
              onBlur={handleBlur}
            />
            <img
              src={queryIcon}
              alt="Query"
              className="ml-2 w-4 h-4 cursor-pointer"
              onClick={() => sendQuery(query)}
            />
          </div>
        ) : (
          <button
            onClick={handleButtonClick}
            className="flex items-center justify-center p-2"
          >
            <img src={queryIcon} alt="Search" className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
