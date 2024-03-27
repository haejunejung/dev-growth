import {ROUTES} from '@/shared/consts';
import {useIconStore} from '@/shared/stores';

import {HStack, Image, ShadowBox, VStack} from '@/shared/ui';
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
      name: 'Home',
    },
    {
      href: ROUTES.BLOG,
      icon: icons.IcBlog,
      name: 'Blog',
    },
    {
      href: ROUTES.COMMUNITY,
      icon: icons.IcCommunity,
      name: 'Community',
    },
    {
      href: ROUTES.SETTING,
      icon: icons.IcSetting,
      name: 'Setting',
    },
  ];
  return (
    <ShadowBox
      width={350}
      height={60}
      style={{
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        maxWidth: 350,
        padding: '24px 0',
        position: 'fixed',
        bottom: 20,
        transform: 'translateX(20px)',
        backgroundColor: 'white',
        zIndex: 2,
      }}
    >
      <HStack
        gap="20"
        alignItems="center"
        justifyContent="space-around"
        hegiht="100%"
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
