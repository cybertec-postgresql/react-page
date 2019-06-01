import { BackgroundRendererProps } from './renderer';
import { BackgroundControlsProps } from './controls';
import { ContentPluginConfig } from '@cybertec/react-page-core/lib/service/plugin/classes';
import { RGBColor } from '@cybertec/react-page-ui/lib/ColorPicker';
import { ImageUploadType } from '@cybertec/react-page-ui/lib/ImageUpload';
import { ModeEnum } from './modeEnum';

export type BackgroundSettings = {
  Renderer: React.ComponentType<BackgroundRendererProps>;
  Controls: React.ComponentType<BackgroundControlsProps>;
  defaultPlugin: ContentPluginConfig;
  enabledModes?: ModeEnum;
  defaultBackgroundColor?: RGBColor;
  defaultGradientColor?: RGBColor;
  defaultGradientSecondaryColor?: RGBColor;
  defaultMode?: ModeEnum;
  defaultModeFlag?: ModeEnum;
  defaultDarken?: number;
  defaultLighten?: number;
  defaultHasPadding?: boolean;
  defaultIsParallax?: boolean;
  imageUpload: ImageUploadType;
};
