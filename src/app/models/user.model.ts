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
  private _likedMagazines: string;
  private _recommendedMagazines: string;
  private _cart: string;
  private _downloadedMagazines: string;

  constructor( email: string,
               pass: string,
               id?: string,
               name?: string,
               lastName?: string,
               birthdate?: string,
               addresses?: Array<AddressModel>,
               likedMagazines?: string,
               recommendedMagazines?: string,
               cart?: string,
               downloadedMagazines?: string
                ) {
    this._id = id;
    this._name = name;
    this._lastName = lastName;
    this._email = email;
    this._pass = pass;
    this._birthdate = birthdate;
    this._addresses = addresses;
    this._likedMagazines = likedMagazines;
    this._recommendedMagazines = recommendedMagazines;
    this._cart = cart;
    this._downloadedMagazines = downloadedMagazines; }

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

  public get LastName(): string {
    return this._lastName;
  }

  public set LastName(value: string) {
    this._lastName = value;
  }

  public get Email(): string {
    return this._email;
  }

  public set Email(value: string) {
    this._email = value;
  }

  public get Pass(): string {
    return this._pass;
  }

  public set Pass(value: string) {
    this._pass = value;
  }

  public get Birthdate(): string {
    return this._birthdate;
  }

  public set Birthdate(value: string) {
    this._birthdate = value;
  }

  public get Addresses(): Array<AddressModel> {
    return this._addresses;
  }

  public set Addresses(value: Array<AddressModel>) {
    this._addresses = value;
  }

  public get LikedMagazines(): string {
    return this._likedMagazines;
  }

  public set LikedMagazines(value: string) {
    this._likedMagazines = value;
  }

  public get RecommendedMagazines(): string {
    return this._recommendedMagazines;
  }

  public set RecommendedMagazines(value: string) {
    this._recommendedMagazines = value;
  }

  public get Cart(): string {
    return this._likedMagazines;
  }

  public set Cart(value: string) {
    this._likedMagazines = value;
  }

  public get DownloadedMagazines(): string {
    return this._likedMagazines;
  }

  public set DownloadedMagazines(value: string) {
    this._likedMagazines = value;
  }
}
