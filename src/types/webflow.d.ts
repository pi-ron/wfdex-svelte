// webflow.d.ts

declare namespace Webflow {
  // Define a type representing the allowed size options
  export type AllowedSize = 'default' | 'comfortable' | 'large';

  interface ExtensionSizeOptions {
    width: string;
    height: string;
  }

  interface WebflowAPI {
    setExtensionSize(size: AllowedSize | ExtensionSizeOptions): Promise<void>;
  }
}

declare const webflow: Webflow.WebflowAPI;
