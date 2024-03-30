'use client';

import dynamic from 'next/dynamic';

import 'react-notion-x/src/styles.css';
import {NotionRenderer} from 'react-notion-x';
import {Spacer} from '@/shared/ui';

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(m => m.Code),
);
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(m => m.Collection),
);
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then(m => m.Equation),
);
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then(m => m.Modal),
  {
    ssr: false,
  },
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NotionPage({recordMap}: {recordMap: any}) {
  return (
    <div style={{backgroundColor: 'white', border: '1px solid black'}}>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
        }}
      />
      <Spacer height="100" backgroundColor="white" />
    </div>
  );
}

export default NotionPage;
