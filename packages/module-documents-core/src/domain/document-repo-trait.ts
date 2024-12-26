import { IResult } from "rich-domain";
import { DocumentAggregate } from "./document.ar";

export interface DocumentRepoTrait {
  save(document: DocumentAggregate): Promise<IResult<void>>;
}
