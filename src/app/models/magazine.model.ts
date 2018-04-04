import { PublisherModel } from './publisher.model';

export class MagazineModel {

  private id: string | number;
  private title: string;
  private owner: PublisherModel;
  private description: string;
  private category: string;
  private tags: Array<string>;
  private thumbnail: Array<string>;
  private downloadURL: Array<string>;
  private contentUrl: Array<string>;
  private rating: number;

  constructor(id?: string | number,
              title?: string,
              owner?: PublisherModel,
              description?: string,
              category?: string,
              tags?: Array<string>,
              thumbnail?: Array<string>,
              downloadURL?: Array<string>,
              contentUrl?: Array<string>,
              rating?: number) {
    this.id = id;
    this.title = title;
    this.owner = owner;
    this.description = description;
    this.category = category;
    this.tags = tags;
    this.thumbnail = thumbnail;
    this.downloadURL = downloadURL;
    this.contentUrl = contentUrl;
    this.rating = rating; }

  public get Id(): string | number {
    return this.id;
  }

  public set Id(value: string | number) {
    this.id = value;
  }

  public get Title(): string {
    return this.title;
  }

  public set Title(value: string) {
    this.title = value;
  }

  public get Owner(): PublisherModel {
    return this.owner;
  }

  public set Owner(value: PublisherModel) {
    this.owner = value;
  }

  public get Description(): string {
    return this.description;
  }

  public set Description(value: string) {
    this.description = value;
  }

  public get Category(): string {
    return this.category;
  }

  public set Category(value: string) {
    this.category = value;
  }

  public get Tags(): Array<string> {
    return this.tags;
  }

  public set Tags(value: Array<string>) {
    this.tags = value;
  }

  public get Thumbnail(): Array<string> {
    return this.thumbnail;
  }

  public set Thumbnail(value: Array<string>) {
    this.thumbnail = value;
  }

  public get DownloadURL(): Array<string> {
    return this.downloadURL;
  }

  public set DownloadURL(value: Array<string>) {
    this.downloadURL = value;
  }

  public get ContentUrl(): Array<string> {
    return this.contentUrl;
  }

  public set ContentUrl(value: Array<string>) {
    this.contentUrl = value;
  }

  public get Rating(): number {
    return this.rating;
  }

  public set Rating(value: number) {
    this.rating = value;
  }
}
