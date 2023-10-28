import { randomUUID } from "crypto";

export class Post {
  private _id: string;
  private _title: string;
  private _text: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor({ id, title, text }: { id?: string; title: string; text: string }) {
    this._id = id ?? randomUUID();
    this._title = title;
    this._text = text;
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get text(): string {
    return this._text;
  }

  public set text(text: string) {
    this._text = text;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public set updatedAt(updatedAt: Date) {
    this._updatedAt = updatedAt;
  }
}
