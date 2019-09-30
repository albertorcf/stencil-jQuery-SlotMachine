/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface SlotMachine {
    'active': number;
    'height': string;
    'images': string;
    'imagesDir': string;
    'next': () => Promise<void>;
    'prev': () => Promise<void>;
    'shuffle': () => Promise<void>;
    'width': string;
  }
}

declare global {


  interface HTMLSlotMachineElement extends Components.SlotMachine, HTMLStencilElement {}
  var HTMLSlotMachineElement: {
    prototype: HTMLSlotMachineElement;
    new (): HTMLSlotMachineElement;
  };
  interface HTMLElementTagNameMap {
    'slot-machine': HTMLSlotMachineElement;
  }
}

declare namespace LocalJSX {
  interface SlotMachine extends JSXBase.HTMLAttributes<HTMLSlotMachineElement> {
    'active'?: number;
    'height'?: string;
    'images'?: string;
    'imagesDir'?: string;
    'width'?: string;
  }

  interface IntrinsicElements {
    'slot-machine': SlotMachine;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


