import React from 'react'

const SectionTitle = ({text1, text2, text3, text4}) => {
  return (
    <div className='inline-flex items-center gap-3 px-3 border-r-2 border-l-2 border-gradient-from-[#FBD300] to-[#FFFFFF] rounded-tr-2xl rounded-bl-2xl'>
      <p className='text-white font-semibold'>{text1} {text2} {text3} {text4}</p>
    </div>
  );
};

export default SectionTitle;
