export interface BandInterface {
  name: string,
  members: number
}

export class Band {
  constructor(private name: string, private members: number) {
  }

  public getName(): string {
    return this.name;
  }

  public getMembers(): number {
    return this.members;
  }
}
