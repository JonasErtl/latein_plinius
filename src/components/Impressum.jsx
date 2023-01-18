import React from 'react'

const Impressum = () => {
  return (
    <div className="bg-gradient-to-r from-white to-gray-200 h-screen pt-10 pb-10">
      <h1 className='text-center text-3xl pb-4 text-gray-700'>Impressum</h1>
    <div className='bg-gradient-to-tr from-gray-50 to-werid flex justify-center mx-14 h-auto rounded shadow-xl text-gray-600 text-center text-xl pt-5 pb-5'>
      Bei dieser Website handelt es sich um ein von Schülern erstelltes Projekt.<br />
      Für die Informationen auf dieser Website wird keine Gewähr übernommen.<br/>
      Es werden keine Nutzerdaten erhoben.<br/>
      Der Quellcode dieser Seite ist offen und unter der GPL-3.0 license lizensiert.<br/>
    </div>
    <div className='flex justify-center'>
    <a href='https://github.com/JonasErtl/latein_plinius' className='bg-gradient-to-r from-red-400 to-blue-500 text-white rounded text-xl content-center mx-5 my-2 px-1'>GitHub</a>
    <a href="mailto: Plinius-Kontakt@proton.me" className='bg-gradient-to-r from-red-400 to-blue-500 ... text-white rounded text-xl my-2 px-1'>Kontakt</a>
    </div>
    </div>
  )
}

export default Impressum