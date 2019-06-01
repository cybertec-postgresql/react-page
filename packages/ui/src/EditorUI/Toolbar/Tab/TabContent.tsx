import * as React from 'react';

import { ContentPlugin } from '@cybertec/react-page-core/lib/service/plugin/classes';

import TabContainer from './TabContainer';
import Item from '../Item';

interface TabContentProps {
  plugin: ContentPlugin;
}

const TabContent: React.SFC<TabContentProps> = ({ plugin }) => {
  const initialState = plugin.createInitialState();
  return (
    <TabContainer>
      <Item
        plugin={plugin}
        insert={{
          content: {
            plugin,
            state: initialState,
          },
        }}
      />
    </TabContainer>
  );
};

export default TabContent;
