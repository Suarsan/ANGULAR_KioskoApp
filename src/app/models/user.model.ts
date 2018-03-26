import { MagazineModel } from './magazine.model';
import { AddressModel } from './address.model';

export class UserModel {

  private id: number;
  private name: string;
  private lastName: string;
  private email: string;
  private pass: string;
  private birthdate: string;
  private addresses: Array<AddressModel>;
  private likedMagazines: Array<string>;
  private recommendedMagazines: Array<string>;
  private cart: Array<string>;
  private downloadedMagazines: Array<string>;

  constructor( id: number,
               email: string,
               pass: string,
               name?: string,
               lastName?: string,
               birthdate?: string,
               addresses?: Array<AddressModel>,
               likedMagazines?: Array<string>,
               recommendedMagazines?: Array<string>,
               cart?: Array<string>,
               downloadedMagazines?: Array<string>
                ) {
    this.id = id;
    this.email = email;
    this.pass = pass;
    name === undefined ? this.name = '' : this.name = name ;
    lastName === undefined ? this.lastName = '' : this.lastName = lastName ;
    birthdate === undefined ? this.birthdate = '' : this.birthdate = birthdate ;
    addresses === undefined ? this.addresses = [] : this.addresses = addresses ;
    likedMagazines === undefined ? this.likedMagazines = [] : this.likedMagazines = likedMagazines ;
    recommendedMagazines === undefined ? this.recommendedMagazines = [] : this.recommendedMagazines = recommendedMagazines;
    cart === undefined ? this.cart = [] : this.cart = cart ;
    downloadedMagazines === undefined ? this.downloadedMagazines = [] : this.downloadedMagazines = downloadedMagazines; }

  public get Id(): number {
    return this.id;
  }

  public set Id(value: number) {
    this.id = value;
  }

  public get Name(): string {
    return this.name;
  }

  public set Name(value: string) {
    this.name = value;
  }

  public get LastName(): string {
    return this.lastName;
  }

  public set LastName(value: string) {
    this.lastName = value;
  }

  public get Email(): string {
    return this.email;
  }

  public set Email(value: string) {
    this.email = value;
  }

  public get Pass(): string {
    return this.pass;
  }

  public set Pass(value: string) {
    this.pass = value;
  }

  public get Birthdate(): string {
    return this.birthdate;
  }

  public set Birthdate(value: string) {
    this.birthdate = value;
  }

  public get Addresses(): Array<AddressModel> {
    return this.addresses;
  }

  public set Addresses(value: Array<AddressModel>) {
    this.addresses = value;
  }

  public get LikedMagazines(): Array<string> {
    return this.likedMagazines;
  }

  public set LikedMagazines(value: Array<string>) {
    this.likedMagazines = value;
  }

  public get RecommendedMagazines(): Array<string> {
    return this.recommendedMagazines;
  }

  public set RecommendedMagazines(value: Array<string>) {
    this.recommendedMagazines = value;
  }

  public get Cart(): Array<string> {
    return this.likedMagazines;
  }

  public set Cart(value: Array<string>) {
    this.likedMagazines = value;
  }

  public get DownloadedMagazines(): Array<string> {
    return this.likedMagazines;
  }

  public set DownloadedMagazines(value: Array<string>) {
    this.likedMagazines = value;
  }
}
