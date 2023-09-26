// webflow.d.ts

declare namespace wfdexWebflowApiTypes {
  // Define a type representing the allowed size options
  export type AllowedSize = 'default' | 'comfortable' | 'large';

  // Define the interface for custom size options
  interface ExtensionSizeOptions {
    width: string;
    height: string;
  }

  // Define the interface for the Webflow API
  interface WebflowAPI {
    setExtensionSize(size: AllowedSize | ExtensionSizeOptions): Promise<void>;
  }
}

// Declare the webflow object with the WebflowAPI interface
declare const webflow: wfdexWebflowApiTypes.WebflowAPI;
