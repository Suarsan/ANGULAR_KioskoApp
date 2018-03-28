import { CreditcardModel } from './creditcard.model';

export class WalletModel {
  private userId: string;
  private creditcards: Array<CreditcardModel>;

  constructor(userId: string, creditcards: Array<CreditcardModel>) {
    this.userId = userId;
    creditcards === undefined ? this.creditcards = [] : this.creditcards = creditcards;
  }


	public get UserId(): string {
		return this.userId;
	}

	public set UserId(value: string) {
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
