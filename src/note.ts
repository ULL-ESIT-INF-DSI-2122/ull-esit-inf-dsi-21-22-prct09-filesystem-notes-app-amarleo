const color: string[] = ['Red', 'Blue', 'Green', 'Yellow'];
export type noteColor = 'Red' | 'Blue' | 'Green' | 'Yellow';

export const isNoteColor = (x: any): x is noteColor => color.includes(x);
export class Note {
  private _title: string;
  private _body: string;
  private _color: noteColor;

  constructor(
      title: string,
      body: string,
      color: noteColor,
  ) {
    this._title = title;
    this._body = body;
    this._color = color;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get body(): string {
    return this._body;
  }

  set body(value: string) {
    this._body = value;
  }

  get color(): noteColor {
    return this._color;
  }

  set color(value: noteColor) {
    this._color = value;
  }
}
