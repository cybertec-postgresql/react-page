import * as React from 'react';

import { ContentPlugin, LayoutPlugin } from '@cybertec/ory-editor-core/lib/service/plugin/classes';

import TabContainer from './TabContainer';
import Item from '../Item';

interface TabContentProps {
  plugin: ContentPlugin | LayoutPlugin;
}

const TabContent: React.SFC<TabContentProps> = ({ plugin }) => {
  const initialState = plugin.createInitialState();

  if ((plugin as LayoutPlugin).createInitialChildren) {
    const children = (plugin as LayoutPlugin).createInitialChildren();

    return (
      <TabContainer>
        <Item
          plugin={plugin}
          insert={{
            ...children,
            layout: {
              plugin,
              state: initialState,
            },
          }}
        />
      </TabContainer>
    );
  }

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
