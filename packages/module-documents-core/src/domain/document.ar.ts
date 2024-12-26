import { Aggregate, Result, Ok, UID } from "rich-domain";

export interface DocumentProps {
  id?: UID;
  createdAt?: Date;
  updatedAt?: Date;
}

export class DocumentAggregate extends Aggregate<DocumentProps> {
  private constructor(props: DocumentProps) {
    super(props);
  }

  public static create(props: DocumentProps): Result<DocumentAggregate> {
    return Ok(new DocumentAggregate(props));
  }
}
