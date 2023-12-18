import React from 'react';
import { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
//import { useEffect } from 'react';
import TestLayout from '../Test/TestLayout.jsx';
import ProfileCard from './ProfileCard';
import addIcon from '../../assets/add.png';
import queryIcon from '../../assets/query.svg';
import PersonCardComponent from './PersonCard';

function AdminComponent() {
  const [personData, setPersonData] = useState([]);
  const [showAddPerson, setShowAddPerson] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const { isAuthenticated } = useContext(AuthContext);

  const list_all_persons = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/admin/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await response.json();

      setPersonData(data);
    } catch (error) {
      console.error('Error fetching person data:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      list_all_persons();
    }
  }, [isAuthenticated, showAddPerson]);

  const handleAddClick = () => {
    setSelectedPerson(null);
    setShowAddPerson(true);
  };

  const handleCloseAddPerson = () => {
    setShowAddPerson(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setShowAddPerson(false);
    }
  };

  const handlePersonCardClick = (person) => {
    setSelectedPerson(person);
    setShowAddPerson(true);
  };

  return (
    <TestLayout>
      <div className="flex flex-col gap-5">
        <AdminTitle onAddClick={handleAddClick} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {personData.map((person, index) => (
            <div key={index} onClick={() => handlePersonCardClick(person)}>
              <PersonCardComponent
                key={index}
                name={person.name}
                type={person.type}
                authName={person.authName}
                status={person.status}
              />
            </div>
          ))}
        </div>
      </div>
      {showAddPerson && (
        <div
          className="z-20 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleOverlayClick}
        >
          <div
            className="bg-white p-5 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <ProfileCard
              mode={selectedPerson ? 'edit' : 'create'}
              person={selectedPerson}
              onClose={handleCloseAddPerson}
            />
          </div>
        </div>
      )}
    </TestLayout>
  );
}

function AdminTitle({ onAddClick }) {
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
              onClick={onAddClick}
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

export default AdminComponent;
