import React from 'react';
import tw from 'tailwind-styled-components';

import Button from './button/Button';

const ModalContainer = tw.div`
w-full
max-w-md
mx-auto
rounded-lg
overflow-hidden
bg-white
border
`

const Backdrop = tw.div`
  fixed
  inset-0
  flex
  items-center
  justify-center
  z-10
  p-4
  bg-black
  bg-opacity-70
`;

interface IConfirmModal {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}


function ConfirmModal({ isOpen, onCancel, onConfirm }:IConfirmModal) {
  if (!isOpen) {
    return null;
  }

  return (
    <Backdrop>
      <ModalContainer>
        <div className='p-4 bg-orange-point'>
          <h4 className="font-bold text-white">Confirm Delete</h4>
        </div>
        <div className='p-4'>
          <p className=' mb-4 text-center'>Are you sure you want to delete this question?</p>
          <div className="flex items-center justify-center">
            <Button
              customStyle='mx-2 text-black bg-gray-200 border-gray-300 px-3 py-1 rounded-md hover:bg-gray-300 active:bg-gray-400'
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              customStyle='mx-2 bg-blue text-white px-3 py-1 rounded-md hover:bg-blue-text'
              onClick={onConfirm}
            >
              Confirm
            </Button>
          </div>
        </div>
      </ModalContainer>
    </Backdrop>
  )
}

export default ConfirmModal;