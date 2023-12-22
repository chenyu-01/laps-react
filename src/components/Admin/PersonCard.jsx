import React from 'react';
import { useEffect, useState } from 'react';
import workIcon from '../../assets/busi_person.png';
import timerIcon from '../../assets/mail.png';

function ImageComponent({ src, alt, className }) {
  return (
    <img
      loading="lazy"
      src={src}
      className={`aspect-square object-contain overflow-hidden max-w-full ${className}`}
      alt={alt}
    />
  );
}

function TextComponent({ children, className }) {
  return <div className={`${className}`}>{children}</div>;
}

export default function PersonCardComponent({
  PictureSrc,
  name,
  type,
  email,
  id,
}) {
  const [authName, setAuthName] = useState('');

  const API_URL = 'http://localhost:8080/api/admin';

  useEffect(() => {
    getAuthName(id);
  }, []);

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
        //parse response
        const data = await response.json();
        setAuthName(data.name);
      }
    } catch (error) {
      console.error('Error fetching person data:', error);
    }
  };

  return (
    <div className="shadow-lg bg-white flex flex-col items-stretch mt-5 px-5 py-3.5 rounded-lg">
      <Header PictureSrc={PictureSrc} Name={name} Type={type} />
      <UserInfo AuthName={authName} />
      <Leavingemail email={email} />
    </div>
  );
}

function Header({ PictureSrc, Name, Type }) {
  return (
    <header className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2.5">
        <ImageComponent
          src={PictureSrc}
          alt="Picture"
          className="w-10 h-10" // Tailwind class for width and height
        />
        <div className="max-w-[calc(100%-2rem)] whitespace-normal">
          <TextComponent className="text-black text-sm font-semibold">
            {Name}
          </TextComponent>
        </div>
      </div>
      <div className="flex-shrink-0">
        <TextComponent className="text-cyan-700 text-xs leading-5 capitalize">
          {Type}
        </TextComponent>
      </div>
    </header>
  );
}
function UserInfo({ AuthName }) {
  return (
    <div className="flex items-stretch justify-between gap-2 mt-3 py-1.5 rounded-lg">
      <ImageComponent
        src={workIcon}
        alt="Author"
        className="w-7 h-7" // Tailwind class for width and height
      />
      <div className="flex flex-col justify-center grow">
        <TextComponent className="text-xs text-black">
          Authorize by
        </TextComponent>
        <TextComponent className="text-xs text-black font-semibold mt-1.5">
          {AuthName}
        </TextComponent>
      </div>
    </div>
  );
}

function Leavingemail({ email }) {
  return (
    <div className="flex items-stretch justify-between gap-2.5 mt-2 py-2 rounded-lg">
      <ImageComponent
        src={timerIcon}
        alt="E-mail"
        className="w-7 h-7" // Tailwind class for width and height
      />
      <div className="flex flex-col justify-center grow">
        <TextComponent className="text-xs text-black">E-mail</TextComponent>
        <TextComponent className="text-xs text-black font-semibold mt-1">
          {email}
        </TextComponent>
      </div>
    </div>
  );
}
