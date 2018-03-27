export class CreditCardModel {
  private id: string;
  private owner: string;
  private accountNumber: string;
  private expirationDate: string;
  private securityCode: number;

  constructor(
    id?: string,
    owner?: string,
    accountNumber?: string,
    expirationDate?: string,
    securityCode?: number
  ) {
    this.id = id;
    this.owner = owner;
    this.accountNumber = accountNumber;
    this.expirationDate = expirationDate;
    this.securityCode = securityCode;
  }

  public get Id(): string {
    return this.id;
  }

  public set Id(value: string) {
    this.id = value;
  }

  public get Owner(): string {
    return this.owner;
  }

  public set Owner(value: string) {
    this.owner = value;
  }

  public get AccountNumber(): string {
    return this.accountNumber;
  }

  public set AccountNumber(value: string) {
    this.accountNumber = value;
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

  public set SecurityCOde(value: number) {
    this.securityCode = value;
  }
}
