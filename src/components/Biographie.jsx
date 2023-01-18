import React from 'react'
import Animation from './Animation'

const Zusammenfassung = () => {
  return (
    <div className="bg-gradient-to-r from-white to-white h-screen pt-10 pb-10">
      <div className="bg-gradient-to-r from-white to-white h-screen pt-10 pb-10">
        <h1 className="text-center text-3xl pb-5 text-gray-700 ">
         Biographie Gaius Plinius Caecilius Secundus
        </h1>
    <div className='bg-gradient-to-tr from-gray-50 to-werid flex justify-center mx-14 h-auto rounded shadow-xl text-gray-600 text-center text-xl py-3'>
      <p>
• Geboren zwischen 61 und 62 n. Chr. in Novum Comum <br/>
• Plinius Vater stirbt früh daher wird er von seinem Onkel adoptiert<br/>
• Plinius, geht früh nach Rom erhält Rhetorikunterricht bei Quintilian<br/>
• Plinius wird Anwalt <br/>
• Heiratet mehrere Frauen ist jedoch früh Wittwer <br/>
• Durchläuft ein Beispiellosen Cursus Honorum <br/>
• Bekleidet das Amt des Suffektkonsuls um 100 n. Chr.<br/>
• Danach Stadthalter von Bithynien <br/>
• Tod um 113 n.Chr. <br/>
<br/>
Seine Werke<br/>
• 16 Reden<br/>
• Dichtungen<br/>
• 10 Bücher <br/>
      </p>
      </div>
      <div className='flex justify-center'>
      <a href='https://de.wikipedia.org/wiki/Plinius_der_J%C3%BCngere' className='bg-gradient-to-r from-red-400 to-blue-500 text-white rounded text-xl my-2 px-1 mx-5'>Plinius Wikipedia</a>
      <a href='https://www.alte-sprachen.de/Plinius/plinius-info.htm' className='bg-gradient-to-r from-red-400 to-blue-500 text-white rounded text-xl my-2 px-1 mx-5'>alte-sprachen.de</a>
      <a href='https://www.fachdidaktik.klassphil.uni-muenchen.de/studium_lehre/lehrverans/winter_1213/interpretationsuebung/hierl_plinius.pdf' className='bg-gradient-to-r from-red-400 to-blue-500 text-white rounded text-xl my-2 mx-5 px-1'>Fachdidaktik Uni München</a>
      </div>
    </div>
    </div>
  )
}

export default Zusammenfassung