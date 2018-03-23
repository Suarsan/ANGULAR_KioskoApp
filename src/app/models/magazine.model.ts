import { PublisherModel } from './publisher.model';

export class MagazineModel {

  private _id: string;
  private _title: string;
  private _owner: PublisherModel;
  private _description: string;
  private _tags: Array<string>;
  private _thumbnail: Array<string>;
  private _downloadURL: Array<string>;
  private _contentUrl: Array<string>;
  private _rating: number;

  constructor(id: string, title: string, owner: PublisherModel, description: string, tags: Array<string>, thumbnail: Array<string>, downloadURL: Array<string>, contentUrl: Array<string>, rating: number) {
    this._id = id;
    this._title = title;
    this._owner = owner;
    this._description = description;
    this._tags = tags;
    this._thumbnail = thumbnail;
    this._downloadURL = downloadURL;
    this._contentUrl = contentUrl;
    this._rating = rating; }

  public get Id(): string {
    return this._id;
  }

  public set Id(value: string) {
    this._id = value;
  }

  public get Title(): string {
    return this._title;
  }

  public set Title(value: string) {
    this._title = value;
  }

  public get Owner(): PublisherModel {
    return this._owner;
  }

  public set Owner(value: PublisherModel) {
    this._owner = value;
  }

  public get Description(): string {
    return this._description;
  }

  public set Description(value: string) {
    this._description = value;
  }

  public get Tags(): Array<string> {
    return this._tags;
  }

  public set Tags(value: Array<string>) {
    this._tags = value;
  }

  public get Thumbnail(): Array<string> {
    return this._thumbnail;
  }

  public set Thumbnail(value: Array<string>) {
    this._thumbnail = value;
  }

  public get DownloadURL(): Array<string> {
    return this._downloadURL;
  }

  public set DownloadURL(value: Array<string>) {
    this._downloadURL = value;
  }

  public get ContentUrl(): Array<string> {
    return this._contentUrl;
  }

  public set ContentUrl(value: Array<string>) {
    this._contentUrl = value;
  }

  public get Rating(): number {
    return this._rating;
  }

  public set Rating(value: number) {
    this._rating = value;
  }
}
