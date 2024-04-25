import { EntitySchemaColumnOptions } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export const BaseColumnSchemaPart = {
  id: {
    type: String,
    primary: true,
    default: () => `'${uuidv4()}'`,
  } as EntitySchemaColumnOptions,
  createdAt: {
    name: 'created_at',
    type: 'timestamp with time zone',
    createDate: true,
  } as EntitySchemaColumnOptions,
  updatedAt: {
    name: 'updated_at',
    type: 'timestamp with time zone',
    updateDate: true,
  } as EntitySchemaColumnOptions,
};
