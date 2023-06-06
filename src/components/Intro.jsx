import React from 'react';

function Intro() {

   return (
      <div className="flex items-center
      justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-3xl dark:text-white md:text-5xl mb-1 md:mb-3 font-bold">Michael Dillahunty</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Computer Science @ the University of Missouri - Columbia</p>
         <p className="text-sm max-w-xl mb-6 font-bold">This is my bio</p>
      </div>
   )
}

export default Intro;