export class PublisherModel {

  private _id: string;
  private _name: string;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name; }

  public get Id(): string {
    return this._id;
  }

  public set Id(value: string) {
    this._id = value;
  }

  public get Name(): string {
    return this._name;
  }

  public set Name(value: string) {
    this._name = value;
  }
}
