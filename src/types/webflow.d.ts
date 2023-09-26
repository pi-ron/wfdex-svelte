// types/webflow.d.ts

declare namespace Webflow {
  interface ExtensionSizeOptions {
    width: string;
    height: string;
  }

  interface WebflowAPI {
    setExtensionSize(size: ExtensionSizeOptions): Promise<void>;
  }
}

declare const webflow: Webflow.WebflowAPI;
