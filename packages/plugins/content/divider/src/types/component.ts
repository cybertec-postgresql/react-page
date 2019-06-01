import { ContentPluginProps } from '@cybertec/react-page-core/lib/service/plugin/classes';
import { DividerState } from './state';
import { DividerSettings } from './settings';

export type DividerProps = ContentPluginProps<DividerState> & DividerSettings;
