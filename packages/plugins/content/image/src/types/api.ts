import { ImageLoaded, ImageUploaded } from '@cybertec/ory-editor-ui/lib/ImageUpload';

export interface ImageApi {
  handleImageLoaded: (image: ImageLoaded) => void;
  handleImageUploaded: (image: ImageUploaded) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}