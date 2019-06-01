import { BackgroundProps } from './component';
import { RGBColor } from '@cybertec/react-page-ui/lib/ColorPicker';
import { ImageLoaded } from '@cybertec/react-page-ui/lib/ImageUpload';

export interface BackgroundRendererExtraProps {
  backgroundColorPreview?: RGBColor;
  gradientDegPreview?: number;
  gradientDegPreviewIndex?: number;
  gradientOpacityPreview?: number;
  gradientOpacityPreviewIndex?: number;
  gradientColorPreview?: RGBColor;
  gradientColorPreviewIndex?: number;
  gradientColorPreviewColorIndex?: number;
  darkenPreview?: number;
  lightenPreview?: number;
  imagePreview?: ImageLoaded;
}

export type BackgroundRendererProps = BackgroundProps & BackgroundRendererExtraProps;
