import { ConflictError } from './conflict.errors';
import { PrismaClientError } from './prisma.client.error';

export class NotNullConstraintError extends ConflictError {
  constructor(err: PrismaClientError) {
    const field = err.meta.target;

    super(`This field: ${field} canoot be null.`);
  }
}
