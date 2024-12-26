import { CreateDocumentUseCase } from "@repo/module-documents-core";
import { documentRepo } from "../impl/document-repo";

export const createDocument = new CreateDocumentUseCase({
  documentRepo,
});
