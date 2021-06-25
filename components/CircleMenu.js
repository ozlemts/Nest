import Logo from "@/components/Logo";
import { useState, useEffect } from 'react';

function CircleMenu() {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectedIdx = (index) => {
    setActiveIndex(index)
  }

  const circleElements = [
    {
      title:'Ideathon',
      desc:'Fikir Üretme',
      icon:'/moon.svg'
    },
    {
      title:'Hackathon',
      desc:'Prototip Üretme',
      icon:'/sun.svg'
    },
    {
      title:'Sprint',
      desc:'Yeni Ürün Geliştirme',
      icon:'/moon.svg'
    },
    {
      title:'Meetups',
      desc:'Deneyim Paylaşımı',
      icon:'/moon.svg'
    },
    {
      title:'Eğitim',
      desc:'Alana Özel Eğitimler',
      icon:'/moon.svg'
    },
    {
      title:'Mentorluk',
      desc:'1-1 Mentorlük',
      icon:'/moon.svg'
    }
  ]
  return (
    <div className="rotated-half-circle bg-blue-500 mx-auto my-16">
      <div className="circle-elements relative">
        <div>
          {circleElements.map((e, index) => (
            <div key={e} className={`item-${index} absolute`}
                 onClick={() => handleSelectedIdx(index)}>
              <div className={`reverse-${index}`}>
                <img
                  src={e.icon}
                  height="70"
                  width="70"
                  className="p-6 bg-white rounded-full shadow  hover:shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between flex-col pt-24 items-center">
        <div className="mb-20 text-center">
          <p className="text-2xl font-bold text-white">
            {circleElements[activeIndex].title}
          </p>
          <p className="text-xl text-white mt-1">{circleElements[activeIndex].desc}</p>
        </div>
        <div className="dark text-center pl-4">
          <Logo className="white"/>
        </div>

      </div>
    </div>
  );
}

export default CircleMenu;
