import {ReactNode} from 'react';
import {Spacer, VStack} from '@/shared/ui';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <VStack>
      <Spacer height="40" />
      <VStack
        backgroundColor="white"
        height="100%"
        style={{
          minHeight: '100vh',
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
        }}
      >
        {children}
      </VStack>
      <Spacer height="100" backgroundColor="white" />
    </VStack>
  );
}
