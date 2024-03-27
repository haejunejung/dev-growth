import {ROUTES} from '@/shared/consts';
import {useIconStore} from '@/shared/stores';

import {HStack, Image, ShadowBox, Text, VStack} from '@/shared/ui';
import Link from 'next/link';

interface TabItemProps {
  href: string;
  icon: string;
  name: string;
}

function TabItem({href, icon, name}: TabItemProps) {
  return (
    <Link href={href}>
      <VStack alignItems="center">
        <Image src={icon} alt={name} width={24} height={24} />
        <Text textStyle="C2" color="black">
          {name}
        </Text>
      </VStack>
    </Link>
  );
}

function BottomNavigator() {
  const {icons} = useIconStore.getState();
  const tabs = [
    {
      href: ROUTES.YOUTUBE,
      icon: icons.IcYoutube,
      name: '유튜브',
    },
    {
      href: ROUTES.BLOG,
      icon: icons.IcBlog,
      name: '블로그',
    },
    {
      href: ROUTES.COMMUNITY,
      icon: icons.IcCommunity,
      name: '커뮤니티',
    },
    {
      href: ROUTES.SETTING,
      icon: icons.IcSetting,
      name: '설정',
    },
  ];
  return (
    <ShadowBox
      width={350}
      height={60}
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 350,
        padding: '10px',
        position: 'fixed',
        bottom: 10,
        transform: 'translateX(20px)',
        backgroundColor: 'white',
        zIndex: 2,
      }}
    >
      <HStack
        gap="20"
        alignItems="center"
        justifyContent="space-around"
        height="100%"
      >
        {tabs.map(tab => (
          <TabItem
            key={tab.name}
            href={tab.href}
            icon={tab.icon}
            name={tab.name}
          />
        ))}
      </HStack>
    </ShadowBox>
  );
}

export default BottomNavigator;
