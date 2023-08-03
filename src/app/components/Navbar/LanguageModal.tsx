import * as React from 'react';

export interface ILanguageModalProps {
    isOpen:boolean,
    onClose: () => void;

}

export default function LanguageModal (props: ILanguageModalProps) {
    
   
  return (
    <div className={`fixed top-10 left-0 right-0  flex items-center justify-center ${props.isOpen ? 'visible' : 'hidden'}`}>
      <div
        className={`fixed inset-0 z-90 bg-black opacity-50 ${props.isOpen ? 'visible' : 'hidden'}`}
        onClick={() => {
            props.onClose();
          }}
      ></div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full relative z-100">
        {/* Close button in the top right */}
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700"
          onClick={() => {
            props.onClose();
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal content goes here */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Language And Region</h2>
          <hr />
          <div>
            <h3 className='font-semibold'>Choose a Language and Region</h3>
            <div className='overflow-y-auto'>
                <ul className='flex justify-between items-center space-y-2'>
                    <li className='p-3 hover:text-yallow_300 rounded text-offwhite_50 cursor-pointer'>Bangla</li>
                    <li className='p-3 hover:text-yallow_300 rounded text-offwhite_50 cursor-pointer'>English</li>
                    <li className='p-3 hover:text-yallow_300 rounded text-offwhite_50 cursor-pointer'>Hindi</li>
                    <li className='p-3 hover:text-yallow_300 rounded text-offwhite_50 cursor-pointer'>Urdu</li>
                    
                </ul>
                <ul className='flex justify-between items-center space-y-2'>
                    <li className='p-3 hover:text-yallow_300 rounded text-offwhite_50 cursor-pointer'>Bangla</li>
                    <li className='p-3 hover:text-yallow_300 rounded text-offwhite_50 cursor-pointer'>English</li>
                    <li className='p-3 hover:text-yallow_300 rounded text-offwhite_50 cursor-pointer'>Hindi</li>
                    <li className='p-3 hover:text-yallow_300 rounded text-offwhite_50 cursor-pointer'>Urdu</li>
                    
                </ul>
                <ul className='flex justify-between items-center space-y-2'>
                    <li className='p-3 hover:text-yallow_300 rounded text-offwhite_50 cursor-pointer'>Bangla</li>
                    <li className='p-3 hover:text-yallow_300 rounded text-offwhite_50 cursor-pointer'>English</li>
                    <li className='p-3 hover:text-yallow_300 rounded text-offwhite_50 cursor-pointer'>Hindi</li>
                    <li className='p-3 hover:text-yallow_300 rounded text-offwhite_50 cursor-pointer'>Urdu</li>
                    
                </ul>
                <ul className='flex justify-between items-center space-y-2'>
                    <li className='p-3 hover:text-yallow_300 rounded text-offwhite_50 cursor-pointer'>Bangla</li>
                    <li className='p-3 hover:text-yallow_300 rounded text-offwhite_50 cursor-pointer'>English</li>
                    <li className='p-3 hover:text-yallow_300 rounded text-offwhite_50 cursor-pointer'>Hindi</li>
                    <li className='p-3 hover:text-yallow_300 rounded text-offwhite_50 cursor-pointer'>Urdu</li>
                    
                </ul>
                
               
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
