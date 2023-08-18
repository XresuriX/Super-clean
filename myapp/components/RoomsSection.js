import React from 'react';
import front from "../public/front.png"
import liveroom from "../public/liveroom.png"
import cleanKitchen from "../public/cleanKitchen.png"
import broom from "../public/broom.png"
import Image from 'next/image';


const RoomItem = ({ imageSrc, altText, title }) => (
  <a
    href="#"
    className="relative"
  >
    <Image src={imageSrc} className="w-full h-full object-cover" alt={altText} />
    <div className="absolute bottom-0 left-2/4 -translate-x-2/4 text-white font-medium uppercase text-xl md:text-2xl font-barlow z-10 px-4 mb-14 text-center w-full tracking-widest">{title}</div>
  </a>
);

const RoomsSection = () => {
  const rooms = [
    {
      imageSrc: front,
      altText: 'Room',
      title: 'Room',
    },
    {
      imageSrc: liveroom,
      altText: 'Livingroom',
      title: 'LivingRoom',
    },
    {
      imageSrc: cleanKitchen,
      altText: 'CleanKitchen',
      title: 'CleanKitchen',
    },
    {
        imageSrc: front,
        altText: 'Room',
        title: 'Room',
      },
      {
        imageSrc: liveroom,
        altText: 'Livingroom',
        title: 'LivingRoom',
      },
      {
        imageSrc: cleanKitchen,
        altText: 'CleanKitchen',
        title: 'CleanKitchen',
      },
  ];

  return (
    <section className="py-16 px-3">
      <div className="container mx-auto">
        <h2 className="font-normal text-3xl sm:text-[46px] text-center mb-3">Results and Room</h2>
          <div className="grid gap-10 md:grid-cols-2 py-10">
          <p className="text-black opacity-60 font-light text-base sm:text-lg font-barlow first-letter:text-4xl first-letter:font-bold first-letter:tracking-[.03em]">
          VKS Cleaning is your trusted partner in creating pristine and inviting spaces. With a passion for cleanliness and a commitment to excellence, we specialize in delivering top-tier cleaning solutions that transform environments.
          </p>
          <ul className="py-5 sm:py-9 px-7 bg-secondary">
            <li className="grid items-center grid-cols-[32px_auto] my-1">
              <img src="https://images.pexels.com/photos/3977512/pexels-photo-3977512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="broom" />
              <span className="text-white text-base font-light ml-2">Hands on cleaning approach</span>
            </li>
            <li className="grid items-center grid-cols-[32px_auto] my-1">
              <img src="https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="mop" />
              <span className="text-white font-barlow text-base font-light ml-2">Efficent and Repectful</span>
            </li>
            <li className="grid items-center grid-cols-[32px_auto] my-1">
              <img src="https://images.pexels.com/photos/4108683/pexels-photo-4108683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="spounge" />
              <span className="text-white font-barlow text-base font-light ml-2">One Stop Shop for all Cleaning Needs</span>
            </li>
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[8px]">
          {rooms.map((room, index) => (
            <RoomItem
              key={index}
              imageSrc={room.imageSrc}
              altText={room.altText}
              title={room.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
