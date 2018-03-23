import { MagazineModel } from './magazine.model';
import { AddressModel } from './address.model';

export class UserModel {

  private _id: string;
  private _name: string;
  private _lastName: string;
  private _email: string;
  private _pass: string;
  private _birthdate: string;
  private _addresses: Array<AddressModel>;
  private _likedMagazines: Array<MagazineModel>;

  constructor( email: string,
               pass: string,
               id?: string,
               name?: string,
               lastName?: string,
               birthdate?: string,
               addresses?: Array<AddressModel>,
               likedMagazines?: Array<MagazineModel> ) {
    this._id = id;
    this._name = name;
    this._lastName = lastName;
    this._email = email;
    this._pass = pass;
    this._birthdate = birthdate;
    this._addresses = addresses;
    this._likedMagazines = likedMagazines; }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get pass(): string {
    return this._pass;
  }

  public set pass(value: string) {
    this._pass = value;
  }

  public get birthdate(): string {
    return this._birthdate;
  }

  public set birthdate(value: string) {
    this._birthdate = value;
  }

  public get addresses(): Array<AddressModel> {
    return this._addresses;
  }

  public set addresses(value: Array<AddressModel>) {
    this._addresses = value;
  }

  public get likedMagazines(): Array<MagazineModel> {
    return this._likedMagazines;
  }

  public set likedMagazines(value: Array<MagazineModel>) {
    this._likedMagazines = value;
  }
}
