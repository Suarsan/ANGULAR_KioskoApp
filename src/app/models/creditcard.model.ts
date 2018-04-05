export class CreditcardModel {
  private ownerName: string;
  private name: string;
  private creditcardNumber: string;
  private expirationDate: string;
  private securityCode: string;

  constructor(
    ownerName?: string,
    name?: string,
    creditcardNumber?: string,
    expirationDate?: string,
    securityCode?: string
  ) {
    this.ownerName = ownerName;
    this.name = name;
    this.creditcardNumber = creditcardNumber;
    this.expirationDate = expirationDate;
    this.securityCode = securityCode;
  }

  public get OwnerName(): string {
    return this.ownerName;
  }

  public set OwnerName(value: string) {
    this.ownerName = value;
  }

  public get Name(): string {
    return this.name;
  }

  public set Name(value: string) {
    this.name = value;
  }

  public get CreditcardNumber(): string {
    return this.creditcardNumber;
  }

  public set CreditcardNumber(value: string) {
    this.creditcardNumber = value;
  }

  public get ExpirationDate(): string {
    return this.expirationDate;
  }

  public set ExpirationDate(value: string) {
    this.expirationDate = value;
  }
  public get SecurityCode(): string {
    return this.securityCode;
  }

  public set SecurityCode(value: string) {
    this.securityCode = value;
  }
}
