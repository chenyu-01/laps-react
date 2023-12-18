import React from 'react';
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
  authName,
  email,
}) {
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
    <header className="flex w-full items-stretch justify-between gap-5">
      <div className="flex items-stretch justify-between gap-2.5">
        <ImageComponent
          src={PictureSrc}
          alt="Picture"
          className="w-10 h-10" // Tailwind class for width and height
        />
        <TextComponent className="text-black text-lg font-semibold self-center">
          {Name}
        </TextComponent>
      </div>
      <TextComponent className="text-cyan-700 text-xs leading-5 capitalize self-start">
        {Type}
      </TextComponent>
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
