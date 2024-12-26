import { Ok, type IResult } from "rich-domain";
import type { DocumentRepoTrait, DocumentAggregate } from "../../domain";

export class InMemoryDocumentRepo implements DocumentRepoTrait {
  private documents: DocumentAggregate[] = [];

  async save(document: DocumentAggregate): Promise<IResult<void>> {
    this.documents.push(document);
    return Ok();
  }
}
