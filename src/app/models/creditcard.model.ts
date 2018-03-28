export class CreditcardModel {
  private userId: string;
  private owner: string;
  private creditcardNumber: string;
  private expirationDate: string;
  private securityCode: number;

  constructor(
    userId?: string,
    owner?: string,
    creditcardNumber?: string,
    expirationDate?: string,
    securityCode?: number
  ) {
    this.userId = userId;
    this.owner = owner;
    this.creditcardNumber = creditcardNumber;
    this.expirationDate = expirationDate;
    this.securityCode = securityCode;
  }

  public get UserId(): string {
    return this.owner;
  }

  public set UserId(value: string) {
    this.owner = value;
  }
  public get Owner(): string {
    return this.owner;
  }

  public set Owner(value: string) {
    this.owner = value;
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
  public get SecurityCode(): number {
    return this.securityCode;
  }

  public set SecurityCode(value: number) {
    this.securityCode = value;
  }
}
