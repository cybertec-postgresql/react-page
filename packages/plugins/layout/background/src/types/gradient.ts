import { RGBColor } from '@cybertec/react-page-ui/lib/ColorPicker';

export type Gradient = {
  opacity: number;
  deg: number;
  colors?: { color: RGBColor }[];
};
