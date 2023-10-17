import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { isModalOpen } from '~/recoil/isModalOpen';

export default function useModal() {
  const modalRef = useRef<HTMLDivElement>(null);

  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);

  useEffect(() => {
    document.addEventListener('mousedown', closeModal);
    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [openModal]);

  function closeModal(e: MouseEvent) {
    if (isClickedOutside(e, modalRef, openModal)) {
      setOpenModal(false);
    }
  }

  function unShowModal() {
    setOpenModal(false);
  }

  function showModal() {
    setOpenModal(true);
  }

  return { modalRef, closeModal, unShowModal, showModal, openModal };
}

export function isClickedOutside(e: MouseEvent, refTarget: any, openModal: boolean) {
  return openModal && refTarget.current === e.target;
}
