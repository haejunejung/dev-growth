import {HStack, VStack, Text} from '@/shared/ui';
import {ReactNode} from 'react';

export default function Group({children}: {children: ReactNode}) {
  return <VStack>{children}</VStack>;
}

function GroupHeader({children}: {children: ReactNode}) {
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="20"
      paddingVertical="20"
    >
      {children}
    </HStack>
  );
}

function GroupTitle({title}: {title: string}) {
  return <Text textStyle="T5">{title}</Text>;
}

function GroupOption({option, color}: {option: string; color: string}) {
  return (
    <Text textStyle="C2-bold" color={color}>
      {option}
    </Text>
  );
}

function GroupSection({children}: {children: ReactNode}) {
  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      paddingHorizontal="20"
      paddingVertical="20"
    >
      {children}
    </VStack>
  );
}

Group.Header = GroupHeader;
Group.Title = GroupTitle;
Group.Option = GroupOption;
Group.Section = GroupSection;
