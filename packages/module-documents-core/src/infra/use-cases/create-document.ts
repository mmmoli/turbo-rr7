import { CreateDocumentUseCase } from "../../application";
import { documentRepo } from "../impl/document-repo";

export const createDocument = new CreateDocumentUseCase({
  documentRepo,
});
