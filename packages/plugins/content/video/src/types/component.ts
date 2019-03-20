import { ContentPluginProps } from '@cybertec/ory-editor-core/lib/service/plugin/classes';
import { VideoState } from './state';
import { VideoSettings } from './settings';

export type VideoProps = ContentPluginProps<VideoState> & VideoSettings;
