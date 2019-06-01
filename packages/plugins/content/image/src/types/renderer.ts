import { ImageProps } from './component';
import { ImageLoaded } from '@cybertec/react-page-ui/lib/ImageUpload';

export interface ImageRendererExtraProps {
  imagePreview?: ImageLoaded;
}

export type ImageRendererProps = ImageProps & ImageRendererExtraProps;
