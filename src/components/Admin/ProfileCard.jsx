import React, { useState } from 'react';
import jobIcon from '../../assets/job_icon.png';
import emailIcon from '../../assets/mail.png';
import authIcon from '../../assets/Auth_icon.png';

function ProfileCard({ mode, person, onClose }) {
  const [name, setName] = useState(person ? person.name : '');
  const [email, setemail] = useState(person ? person.email : '');
  const [authName, setAuthName] = useState(person ? person.authName : '');
  const [role, setrole] = useState(person ? person.role : 'Employee');
  const [error, setError] = useState('');

  const isEditMode = mode === 'edit';

  const API_URL = 'http://localhost:8080/api/admin';

  const updateUser = async (userId, userData) => {
    try {
      const response = await fetch(`${API_URL}/${userId}`, {
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
      const password = 'Test?123';
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
        // 处理错误情况
        setError('Failed to delete user');
      }
    }
  };

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
        />
        {error && <div className="text-red-400 text-sm my-2">{error}</div>}
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
}) {
  const renderInputOrSelect = () => {
    if (editable && isSelect) {
      return (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border-none bg-transparent p-2 ml-5 mt-2.5 self-start"
        >
          <option value="Employee">Employee</option>
          <option value="Manager">Manager</option>
          <option value="Admin">Admin</option>
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
