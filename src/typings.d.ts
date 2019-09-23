// Type definitions for jquery-slotmachine 4.0.1
// Project: https://github.com/josex2r/jQuery-SlotMachine
// Definitions by: Alberto Carvalho <https://github.com/albertorcf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'jquery-slotmachine/lib/slot-machine' {
  interface Options {
    active?: number;
    delay?: number;
    auto?: boolean;
    spins?: number;
    randomize?: Function;
    onComplete?: Function;
    inViewport?: boolean;
    direction?: 'up' | 'down';
    transition?: 'ease-in-out' | 'ease' | 'linear' | 'ease-in' | 'ease-out';
  }
  
  class SlotMachine {
    constructor(
      element: HTMLElement,
      options?: Options
    );

    // Properties
    nextActive: number;
    nextIndex: number;
    prevIndex: number;
    random: number;
    running: boolean;
    stopping: boolean;
    visible: boolean;
    visibleTile: number;
    active: number;
    randomize: Function;
    direction: 'up' | 'down';
    transition: 'ease-in-out' | 'ease' | 'linear' | 'ease-in' | 'ease-out';

    // Methods
    shuffle(spins: number, onComplete: Function): number;
    stop(onStop: Function): number;
    next(): number;
    prev(): number;
    run(): void;
    destroy(): void;
  }

  export = SlotMachine;
}
