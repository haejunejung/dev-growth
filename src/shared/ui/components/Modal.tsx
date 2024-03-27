'use client';

import emotionStyled from '@emotion/styled';
import {Property} from 'csstype';
import React, {ReactNode, useCallback} from 'react';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const ModalBackground = emotionStyled.div<{
  backgroundColor?: Property.BackgroundColor;
}>(props => ({
  display: 'flex',
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  top: 0,
  left: 0,
  backgroundColor: props.backgroundColor ?? 'rgba(0, 0, 0, 0.5)',
  zIndex: 1,
}));

const ModalContent = emotionStyled.div<{
  backgroundColor?: Property.BackgroundColor;
  width?: Property.Width;
  height?: Property.Height;
  paddingHorizontal?: Property.Padding;
  paddingVertical?: Property.Padding;
  border?: Property.Border;
  borderRadius?: Property.BorderRadius;
  gap?: Property.Gap;
}>(props => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  width: props.width ?? '50%',
  height: props.height ?? '50%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  marginLeft: 'auto',
  marginRight: 'auto',
  zIndex: 2,
  padding: `${props.paddingVertical} ${props.paddingHorizontal}`,
  gap: props.gap,
  border: props.border,
  borderRadius: props.borderRadius,
}));

function Modal({children, isOpen, handleClose}: ModalProps) {
  const closeModal = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      if (event.target === event.currentTarget) {
        handleClose();
      }
    },
    [handleClose],
  );

  if (isOpen) {
    return (
      <ModalBackground onClick={closeModal}>
        <ModalContent>{children}</ModalContent>
      </ModalBackground>
    );
  }
}

export default Modal;
