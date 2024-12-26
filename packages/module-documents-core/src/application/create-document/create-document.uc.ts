import { Fail, type IResult, type IUseCase, Ok } from 'rich-domain';
import type { CreateDocumentDto } from './create-document-dto';
import { DocumentAggregate } from '../../domain/document.ar';
import type { DocumentRepoTrait } from '../../domain';

export interface CreateDocumentUseCaseDeps {
  documentRepo: DocumentRepoTrait;
}

export class CreateDocumentUseCase
  implements IUseCase<CreateDocumentDto, IResult<DocumentAggregate>>
{
  constructor(private readonly deps: CreateDocumentUseCaseDeps) {}

  async execute(_dto: CreateDocumentDto): Promise<IResult<DocumentAggregate>> {
    try {
      const documentResult = DocumentAggregate.create({});
      if (documentResult.isFail()) return Fail(documentResult.error());
      const doc = documentResult.value();

      const saveResult = await this.deps.documentRepo.save(doc);
      if (saveResult.isFail()) return Fail(saveResult.error());

      return Ok(doc);
    } catch (_error) {
      return Fail(
        'Internal Server Error on Create BudgetBox UseCase',
        'INTERNAL_SERVER_ERROR',
      );
    }
  }
}
