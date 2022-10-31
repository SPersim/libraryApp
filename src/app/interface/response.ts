import { Time } from "@angular/common";
import { bookCopy } from "./book-copy";
import { Customer } from "./customer";

export interface Response {
  timeStamp: Time;
  statusCode: number;
  status: HttpStatus;
  reason: string;
  message: string;
  developerMessage: string;
  data: { bookCopy?: bookCopy,
          bookCopies?: bookCopy[],
          customer?: Customer,
          customers?: Customer[] }
}
