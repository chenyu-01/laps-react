import React, { useState, useEffect } from 'react';
import jobIcon from '../../assets/job_icon.png';
import emailIcon from '../../assets/mail.png';
import authIcon from '../../assets/Auth_icon.png';

function ProfileCard({ mode, person, onClose }) {
  const [name, setName] = useState(person ? person.name : '');
  const [email, setemail] = useState(person ? person.email : '');
  const [authName, setAuthName] = useState(person ? person.authName : '');
  const [role, setrole] = useState(person ? person.role : 'Employee');
  const [error, setError] = useState('');
  const [managers, setManagers] = useState([]); // TODO: Add managers here
  const isEditMode = mode === 'edit';

  const API_URL = 'http://localhost:8080/api/admin';

  const getAllManagers = async () => {
    try {
      const response = await fetch(`${API_URL}/users/Manager`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setManagers(data);
    } catch (error) {
      console.error('Error fetching person data:', error);
    }
  };

  const updateUser = async (id, userData) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      return response;
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const addUser = async (userData) => {
    try {
      const password = userData.email + '123';
      userData.password = password;
      const response = await fetch(`${API_URL}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      return response;
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`${API_URL}/${userId}`, {
        method: 'DELETE',
      });
      return response;
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleSubmit = async () => {
    const userData = { name, email, authName, role };
    if (mode === 'create') {
      const response = await addUser(userData);
      if (response && response.ok) {
        onClose();
      } else {
        setError('Failed to add user');
      }
    } else if (mode === 'edit' && person && person.id) {
      const response = await updateUser(person.id, userData);
      if (response && response.ok) {
        onClose();
      } else {
        setError('Failed to update user');
      }
    }
  };

  const handleDelete = async () => {
    if (mode === 'edit' && person && person.id) {
      const response = await deleteUser(person.id);
      if (response && response.ok) {
        onClose();
      } else {
        //handler error
        setError('Failed to delete user');
      }
    }
  };

  const getAuthName = async (id) => {
    try {
      const response = await fetch(`${API_URL}/users/Manager/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 204) {
        setAuthName('N/A');
      } else if (response.ok) {
        const data = await response.json();
        setAuthName(data.name);
      } //handle no content
    } catch (error) {
      console.error('Error fetching person data:', error);
    }
  };

  useEffect(() => {
    getAllManagers();
  }, []);

  useEffect(() => {
    if (person && person.id) {
      getAuthName(person.id);
    }
  }, [person]);

  return (
    <div className="flex max-w-[500px] flex-col justify-center items-stretch">
      <header className="shadow-lg bg-white flex w-full flex-col items-stretch pt-2.5 pb-11 rounded-lg">
        <ProfileImageSection
          mode={mode}
          onNameChange={setName}
          personName={name}
          personImgSrc="image_source_here" // TODO: Add image source
        />

        <ProfileDetailSection
          title="email Address"
          value={email}
          editable={!isEditMode}
          onChange={setemail}
          iconSrc={emailIcon}
        />
        <ProfileDetailSection
          title="Career Title"
          value={role}
          editable={true} //
          onChange={setrole}
          isSelect={true} //
          iconSrc={jobIcon}
        />
        <ProfileDetailSection
          title="Authorized by"
          value={authName}
          editable={true}
          onChange={setAuthName}
          iconSrc={authIcon}
          managers={managers}
        />
        {error && (
          <div className="text-red-400 justify-center text-sm my-2">
            {error}
          </div>
        )}
        <ProfileActions
          isEditMode={isEditMode}
          onSubmit={handleSubmit}
          onDelete={handleDelete}
        />
      </header>
    </div>
  );
}

function ProfileImageSection({ mode, onNameChange, personName, personImgSrc }) {
  const isEditMode = mode === 'edit';

  return (
    <div
      className={`flex w-full px-5 ${
        isEditMode ? 'flex-col items-start' : 'justify-center items-center'
      }`}
    >
      {isEditMode ? (
        <>
          <img
            src={personImgSrc}
            alt="Profile"
            className="w-full h-auto object-contain"
          />
          <div className="text-black text-lg font-semibold self-center my-auto">
            {personName}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <input
            type="text"
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Name"
            className="border-b border-gray-300 bg-transparent p-2 w-full text-center"
            style={{ outline: 'none' }}
          />
        </div>
      )}
    </div>
  );
}

function ProfileDetailSection({
  title,
  value,
  editable,
  onChange,
  isSelect,
  iconSrc,
  managers,
}) {
  const renderInputOrSelect = () => {
    if (title === 'Authorized by' && editable) {
      let managerExists = managers.some((manager) => manager.name === value);

      return (
        <select
          value={managerExists ? value : 'NA'}
          onChange={(e) => onChange(e.target.value)}
          className="border-none bg-transparent p-2 ml-5 mt-2.5 self-start"
        >
          {!managerExists && <option value="NA">NA</option>}
          {managers.map((manager) => (
            <option key={manager.id} value={manager.name}>
              {manager.name}
            </option>
          ))}
        </select>
      );
    } else if (editable && isSelect) {
      return (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border-none bg-transparent p-2 ml-5 mt-2.5 self-start"
        >
          <option value="Employee">Employee</option>
          <option value="Manager">Manager</option>
          <option value="Admin">Administrators</option>
        </select>
      );
    } else if (editable) {
      return (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`Enter ${title}`}
          className="border-none bg-transparent p-2 ml-5 mt-2.5 self-start"
        />
      );
    } else {
      return (
        <div className="text-black text-sm font-semibold ml-5 mt-2.5 self-start">
          {value}
        </div>
      );
    }
  };

  return (
    <div className="flex w-full flex-col items-stretch pt-3.5 pb-8 px-5">
      <div className="shadow-lg bg-white flex items-stretch justify-between gap-3 pl-4 pr-20 pt-2 pb-3.5 rounded-lg">
        <img src={iconSrc} alt={title} className="w-[46px] h-[46px]" />
        <div className="flex grow basis-[0%] flex-col items-stretch mt-2 self-start">
          <div className="text-black text-xs">{title}</div>
          {renderInputOrSelect()}
        </div>
      </div>
    </div>
  );
}

function ProfileActions({ isEditMode, onSubmit, onDelete }) {
  return (
    <div className="flex justify-around p-4">
      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-400 text-white py-2 px-4 "
        onClick={onSubmit}
      >
        Submit
      </button>
      {isEditMode && (
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-red-400 text-white py-2 px-4 "
          onClick={onDelete}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default ProfileCard;
