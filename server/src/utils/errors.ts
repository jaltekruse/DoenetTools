export class HttpError extends Error {
  private _httpCode: number;

  constructor(message: string, httpCode: number) {
    super(message);
    this._httpCode = httpCode;
  }

  get httpCode() {
    return this._httpCode;
  }
}
