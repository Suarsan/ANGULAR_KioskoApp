export class PublisherModel {

  private _id: string | number;
  private _name: string;

  constructor(id: string | number, name: string) {
    this._id = id;
    this._name = name; }

  public get Id(): string | number {
    return this._id;
  }

  public set Id(value: string | number) {
    this._id = value;
  }

  public get Name(): string {
    return this._name;
  }

  public set Name(value: string) {
    this._name = value;
  }
}
