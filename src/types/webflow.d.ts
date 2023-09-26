// webflow.d.ts

declare namespace wfdexWebflowApiTypes {
  // Define a type representing the allowed size options
  export type AllowedSize = 'default' | 'comfortable' | 'large';

  // Mapping object to hold the AllowedSize values
  export const AllowedSizeValues: { [key in AllowedSize]: key } = {
    default: 'default',
    comfortable: 'comfortable',
    large: 'large',
  };
  
  interface ExtensionSizeOptions {
    width: string;
    height: string;
  }

  interface WebflowAPI {
    setExtensionSize(size: AllowedSize | ExtensionSizeOptions): Promise<void>;
  }
}

declare const webflow: wfdexWebflowApiTypes.WebflowAPI;
