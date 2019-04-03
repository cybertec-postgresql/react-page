import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { ContentPlugin, LayoutPlugin } from '@cybertec/ory-editor-core/lib/service/plugin/classes';

import VerticalTabs from './VerticalTabs';
import TabIndicator from '../Tab/TabIndicator';
import TabContent from '../Tab/TabContent';

const styles = ({}) => ({
  drawerContentContainer: {
    height: '100%',
  },
  tabContent: {
    backgroundColor: 'rgb(249, 249, 249)',
    height: window.innerHeight,
    overflowX: 'hidden' as 'hidden',
    overflowY: 'scroll' as 'scroll',
    padding: '0 5px',
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
  layout: LayoutPlugin[];
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
    const { classes, content, layout, widgetGroups } = this.props;
    const { activeTab } = this.state;

    const widgets = [...content, ...layout].sort((a, b) => a.text.localeCompare(b.text));
    const groupedWidgets = activeTab !== -1 &&
      widgets.filter((c) => c.group === widgetGroups[activeTab])
        .map((plugin: ContentPlugin | LayoutPlugin, index) => (
          <TabContent key={index} plugin={plugin} />
        ));
    const generalWidgets = activeTab === -1 &&
      widgets.filter((c) => c.group === undefined)
        .map((plugin: ContentPlugin | LayoutPlugin, index) => (
          <TabContent key={index} plugin={plugin} />
        ));
    const withoutWidgets = activeTab !== -1 &&
        !groupedWidgets.length && <Typography>No widgets for this group</Typography>;

    return (
      <Grid container={true}  className={classes.drawerContentContainer}>
        <Grid item={true} xs={4} className={classes.tabIndicators}>
          <VerticalTabs
            value={activeTab}
            onChange={this.handleChangeTab}
            indicatorColor="secondary"
            textColor="secondary"
          >
            {widgetGroups.map((widgetName: string, index) => (
              <TabIndicator key={index} label={widgetName.toUpperCase()} />
            ))}

            <TabIndicator label="General" value={-1} />
          </VerticalTabs>
          </Grid>
          <Grid item={true} xs={8} className={classes.tabContent}>
            <Grid container={true} spacing={8}>
              {withoutWidgets}

              {groupedWidgets}

              {generalWidgets}
            </Grid>
          </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Tabs);
