import React from 'react';

const CreativeDesignCard = ({name, symbol, horoscope , bordered = false }) => {
  return (

    <div className={`w-64 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden ${bordered ? 'border-2 border-black' : ''}`}>
      <h1 className="font-bold text-xl">{symbol}</h1>
      <p className="text-sm text-zinc-500 leading-6">
      {name}
      </p>
      <div>{horoscope}</div>
    </div>
  );
};

export default CreativeDesignCard;