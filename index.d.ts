import React from 'react';
import { ViewProps } from 'react-native';


export declare interface BlurhashProps extends ViewProps {
  /**
   * The blurhash string to use. Example: `LGFFaXYk^6#M@-5c,1J5@[or[Q6`.
   */
  blurhash: string;
  /**
   * The width (resolution) to decode to. Higher values decrease performance, use `16` for large lists, otherwise you can increase it to `32`.
   * @default 32
   */
  decodeWidth?: number;
  /**
   * The height (resolution) to decode to. Higher values decrease performance, use `16` for large lists, otherwise you can increase it to `32`.
   * @default 32
   */
  decodeHeight?: number;
  /**
   * Adjusts the contrast of the output image. Tweak it if you want a different look for your placeholders.
   * @default 1.0
   */
  decodePunch?: number;
  /**
   * Adjusts the resize mode of the image.
   * @default 'cover'
   */
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center';
}

export declare class Blurhash extends React.Component<BlurhashProps> {
  public render(): React.ReactNode;
}
