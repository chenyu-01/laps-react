import React from 'react';
import { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
//import { useEffect } from 'react';
import Layout from '../Dashboard/Layout.jsx';
import ProfileCard from './ProfileCard';
import addIcon from '../../assets/add.png';
import queryIcon from '../../assets/query.svg';
import PersonCardComponent from './PersonCard';
import happyIcon from '../../assets/happy.png';

function AdminComponent() {
  const [personData, setPersonData] = useState([]);
  const [showAddPerson, setShowAddPerson] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');

  const { isAuthenticated } = useContext(AuthContext);

  const list_all_persons = async () => {
    try {
      const response = await fetch('/api/admin/users', {
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
    list_all_persons();
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

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const sendQuery = (queryContent) => {
    console.log('Sending query:', queryContent);

    try {
      const response = fetch(`http://localhost:8080/api/admin/user/Query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(queryContent),
      });
      if (response.ok) {
        if (response.status === 204) {
          return;
        }
        const data = response.json();
        setPersonData(data);
      }
    } catch (error) {
      console.error('Error fetching person data:', error);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col gap-5 m-4">
        <AdminTitle
          onAddClick={handleAddClick}
          onSelect={handleRoleChange}
          sendQuery={sendQuery}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {personData
            .filter(
              (person) => selectedRole === '' || person.role === selectedRole
            )
            .map((person, index) => (
              <div key={index} onClick={() => handlePersonCardClick(person)}>
                <PersonCardComponent
                  key={index}
                  name={person.name}
                  type={person.role}
                  email={person.email}
                  id={person.id}
                  PictureSrc={happyIcon}
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
    </Layout>
  );
}

function AdminTitle({ onAddClick, onSelect, sendQuery }) {
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState('');

  const handleButtonClick = () => {
    setShowInput(true);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendQuery(query);
    }
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
            <select
              className="bg-white rounded text-sm text-neutral-400 p-2 focus:outline-none focus:ring focus:border-blue-300 mr-4"
              onChange={onSelect}
            >
              <option value="">Select Type</option>
              <option value="Employee">Employee</option>
              <option value="Manager">Manager</option>
              <option value="Admin">Admin</option>
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
              onKeyDown={handleKeyDown}
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
