export class AddressModel {

  private _addressName: string;
  private _address: string;
  private _city: string;
  private _postcode: string;
  private _country: string;

  constructor(addressName: string, address: string, city: string, postcode: string, country: string) {
    this._addressName = addressName;
    this._address = address;
    this._city = city;
    this._postcode = postcode;
    this._country = country; }

  public get AddressName(): string {
    return this._addressName;
  }

  public set AddressName(value: string) {
    this._addressName = value;
  }

  public get Address(): string {
    return this._address;
  }

  public set Address(value: string) {
    this._address = value;
  }

  public get City(): string {
    return this._city;
  }

  public set City(value: string) {
    this._city = value;
  }

  public get Postcode(): string {
    return this._postcode;
  }

  public set Postcode(value: string) {
    this._postcode = value;
  }

  public get Country(): string {
    return this._country;
  }

  public set Country(value: string) {
    this._country = value;
  }
}
