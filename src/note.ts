const color: string[] = ['Red', 'Blue', 'Green', 'Yellow', ''];
export type noteColor = 'Red' | 'Blue' | 'Green' | 'Yellow' | '';

/**
 * IsNoteColor type guardian
 * @param x any param
 * @returns true if it is incluyed on color string
 */
export const isNoteColor = (x: any): x is noteColor => color.includes(x);

/**
 * Note class
 */
export class Note {
  private _title: string;
  private _body: string;
  private _color: noteColor;

  /**
   * Note constructor
   * @param title title of the new note
   * @param body body of the new note
   * @param color color of the new note
   */
  constructor(
      title: string,
      body: string = '',
      color: noteColor = '',
  ) {
    this._title = title;
    this._body = body;
    this._color = color;
  }

  /**
   * Title getter
   */
  get title(): string {
    return this._title;
  }

  /**
   * title setter
   * @param value String that contains a new title
   */
  set title(value: string) {
    this._title = value;
  }

  /**
   * Body getter
   */
  get body(): string {
    return this._body;
  }

  /**
   * body setter
   * @param value String that contains a new body
   */
  set body(value: string) {
    this._body = value;
  }

  /**
   * Color getter
   */
  get color(): noteColor {
    return this._color;
  }

  /**
   * color setter
   * @param value String that contains a new color
   */
  set color(value: noteColor) {
    this._color = value;
  }
}
