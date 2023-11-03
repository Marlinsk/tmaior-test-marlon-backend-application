import { randomUUID } from "crypto";

export class Post {
  private _id: string;
  private title: string;
  private text: string;
  private createdAt: Date;
  private updatedAt: Date;

  constructor({
    id,
    title,
    text,
    createdAt,
    updatedAt,
  }: {
    id?: string;
    title: string;
    text: string;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this._id = id ?? randomUUID();
    this.title = title;
    this.text = text;
    this.createdAt = createdAt ?? new Date();
    this.updatedAt = updatedAt ?? new Date();
  }

  public get getId(): string {
    return this._id;
  }

  public get getTitle(): string {
    return this.title;
  }

  public set setTitle(title: string) {
    this.title = title;
  }

  public get getText(): string {
    return this.text;
  }

  public set setText(text: string) {
    this.text = text;
  }

  public get getCreatedAt(): Date {
    return this.createdAt;
  }

  public get getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public set setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
  }
}
