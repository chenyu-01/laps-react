import React, { useState } from 'react';
import jobIcon from '../../assets/job_icon.png';
import mailIcon from '../../assets/Mail.png';
import authIcon from '../../assets/Auth_icon.png';

function ProfileCard({ mode, person, onClose }) {
  const [name, setName] = useState(person ? person.name : '');
  const [mail, setMail] = useState(person ? person.mail : '');
  const [authName, setAuthName] = useState(person ? person.authName : '');
  const [careerTitle, setCareerTitle] = useState(
    person ? person.careerTitle : ''
  );
  const [error, setError] = useState('');

  const isEditMode = mode === 'edit';

  const handleResponse = async (request) => {
    try {
      const response = await request;
      if (response.ok) {
        onClose();
      } else {
        const errorMessage = `Error: ${response.statusText}`;
        setError(errorMessage);
      }
    } catch (error) {
      const errorMessage = `Error: ${error.message}`;
      setError(errorMessage);
    }
  };

  const handleSubmit = () => {
    const data = {
      name,
      mail,
      authName,
      careerTitle,
    };
    console.log('Submitting:', data);
    // TODO: Submit
    onClose();
  };
  const handleDelete = () => {
    const data = {
      name,
      mail,
      authName,
      careerTitle,
    };
    console.log('Submitting:', data);
    // TODO: Submit
    onClose();
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
          title="Mail Address"
          value={mail}
          editable={!isEditMode}
          onChange={setMail}
          iconSrc={mailIcon}
        />
        <ProfileDetailSection
          title="Career Title"
          value={careerTitle}
          editable={true} //
          onChange={setCareerTitle}
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
          <option value="Type1">Type1</option>
          <option value="Type2">Type2</option>
          <option value="Type3">Type3</option>
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
