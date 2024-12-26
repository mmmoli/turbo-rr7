import type { IResult } from 'rich-domain';
import type { DocumentAggregate } from './document.ar';

export interface DocumentRepoTrait {
  save(document: DocumentAggregate): Promise<IResult<void>>;
}
