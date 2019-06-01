import { LayoutPluginProps } from '@cybertec/react-page-core/lib/service/plugin/classes';
import { BackgroundState } from './state';
import { BackgroundSettings } from './settings';

export type BackgroundProps = LayoutPluginProps<BackgroundState> & BackgroundSettings;
