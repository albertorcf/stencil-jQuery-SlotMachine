import { Component, Prop, Element, Method, h } from "@stencil/core";
import SlotMachine from 'jquery-slotmachine/lib/slot-machine';

@Component({
  tag: "slot-machine",
  styleUrl: "slot-machine.css"
})
export class MySlotMachine {
  @Element() el: HTMLElement;

  @Prop() imagesDir: string = '';
  @Prop() images: string;
  @Prop() active: number = 0;
  @Prop() width: string = '100px';
  @Prop() height: string = '100px';

  @Method()
  async shuffle() {
    this.machine.shuffle(5, this.onComplete);
  }

  @Method()
  async next() {
    this.machine.next();
  }

  @Method()
  async prev() {
    this.machine.prev();
  }

  machine: SlotMachine;

  componentDidLoad() {
    var el: any;
    el = this.el.querySelector('.slotMachine');
    this.machine = new SlotMachine(el, { 
      active: this.active || 0, 
    });
  }

  onComplete(active: any){
    console.log('active=', active);
  }

  render() {
    return (
      <div class="slotMachine" style={{
        width: this.width || "100px",
        height: this.height || "100px"
      }}>
        {JSON.parse(this.images.replace(/'/g, '"')).map((img: string, i: number) => {
          console.log(img, i);
          let cls = 'slot slot' + i;
          let bkg = 'url(' + this.imagesDir + img + ')';
          return <div class={cls} style={{backgroundImage: bkg, height: this.height}}></div>
        })}
      </div>
    );
  }
}