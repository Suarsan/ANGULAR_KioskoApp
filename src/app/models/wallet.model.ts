import { CreditcardModel } from './creditcard.model';

export class WalletModel {
  private userId: string | number;
  private creditcards: Array<CreditcardModel>;

  constructor(userId: string | number, creditcards: Array<CreditcardModel>) {
    this.userId = userId;
    creditcards === undefined ? this.creditcards = [] : this.creditcards = creditcards;
  }


	public get UserId(): string | number {
		return this.userId;
	}

	public set UserId(value: string | number) {
		this.userId = value;
	}

	public get Creditcards(): Array<CreditcardModel> {
		return this.creditcards;
	}

	public set Creditcards(value: Array<CreditcardModel>) {
		this.creditcards = value;
  }

  public pushCreditcard(creditcard: CreditcardModel) {
    this.creditcards.push(creditcard);
  }

}
