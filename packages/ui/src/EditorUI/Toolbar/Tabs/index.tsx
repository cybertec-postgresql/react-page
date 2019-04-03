import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { ContentPlugin } from '@cybertec/ory-editor-core/lib/service/plugin/classes';

import VerticalTabs from './VerticalTabs';
import TabIndicator from '../Tab/TabIndicator';
import TabContent from '../Tab/TabContent';

const styles = ({}) => ({
  drawerContentContainer: {
    height: '100%',
  },
  tabContent: {
    backgroundColor: 'rgb(249, 249, 249)',
    height: '100%',
    overflowY: 'scroll' as 'scroll',
  },
  tabIndicators: {
    backgroundColor: 'rgb(214, 217, 220)',
  },
  tabRoot: {
    minWidth: 72,
  },
  tabSelected: {
    backgroundColor: 'rgb(249, 249, 249)',
  },
});

type TabsProps = {
  content: ContentPlugin[];
  widgetGroups: string[];
} & WithStyles<typeof styles>;

interface TabsState {
  activeTab: number;
}

class Tabs extends React.Component<TabsProps, TabsState> {
  public readonly state = {
    activeTab: 0,
  };

  handleChangeTab = ({}, activeTab) => {
    this.setState({ activeTab });
  }

  render() {
    const { classes, content, widgetGroups } = this.props;
    const { activeTab } = this.state;

    return (
      <Grid container={true}  className={classes.drawerContentContainer}>
        <Grid item={true} xs={9} className={classes.tabContent}>
          <Grid container={true} spacing={8}>
            {content.filter((c: ContentPlugin) => c.group === widgetGroups[activeTab])
              .map((plugin: ContentPlugin, index) => {
                return <TabContent key={index} plugin={plugin} />;
              })}

            {activeTab === widgetGroups.length && content.filter((c: ContentPlugin) => !c.group)
              .map((plugin: ContentPlugin, index) => {
                return <TabContent key={index} plugin={plugin} />;
              })}
            </Grid>
        </Grid>
        <Grid item={true} xs={3} className={classes.tabIndicators}>
          <VerticalTabs
            value={activeTab}
            onChange={this.handleChangeTab}
            indicatorColor="secondary"
            textColor="secondary"
          >
            {widgetGroups.map((widgetName: string) => (
              <TabIndicator label={widgetName.toUpperCase()} />
            ))}

            <TabIndicator label="General" />
          </VerticalTabs>
          </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Tabs);
