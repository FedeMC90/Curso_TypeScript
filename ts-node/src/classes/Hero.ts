import powers from "../data/powers";

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get power(): string {
    return powers.find(power => power.id === this.powerId )?.desc || 'Not Found';
  }
}

export class Hero2 {}
export class Hero3 {}
export class Hero4 {}

const PI = 3.1415;
const miNombre = "Federico";
