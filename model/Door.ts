export class Door {
  private number: number;
  private haveGift: boolean;
  private isSelected: boolean;
  private isOpen: boolean;

  constructor(
    number: number,
    haveGift = false,
    isSelected = false,
    isOpen = false
  ) {
    this.number = number;
    this.haveGift = haveGift;
    this.isSelected = isSelected;
    this.isOpen = isOpen;
  }

  getNumber() {
    return this.number;
  }

  getHaveGift() {
    return this.haveGift;
  }

  getIsSelected() {
    return this.isSelected;
  }

  getIsOpen() {
    return this.isOpen;
  }

  alterIsOpen() {
    const isOpen = !this.getIsOpen;

    return new Door(this.number, this.haveGift, this.isSelected, isOpen);
  }

  alterHaveGift() {
    const haveGift = !this.getHaveGift;

    return new Door(this.number, haveGift, this.isSelected, this.isOpen);
  }

  alterIsSelected() {
    const isSelected = !this.getIsSelected;

    return new Door(this.number, this.haveGift, isSelected, this.isOpen);
  }
}
