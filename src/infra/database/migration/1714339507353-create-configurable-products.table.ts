import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateConfigurableProductsTable1714339507353
  implements MigrationInterface
{
  private table = new Table({
    name: 'configurable_product',
    uniques: [{ name: 'UNIQUE_CONFIGURABLE_NAME', columnNames: ['name'] }],
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'uuid',
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
        isUnique: true,
      },
      {
        name: 'description',
        type: 'text',
      },
      {
        name: 'salePrice',
        type: 'int',
      },
      {
        name: 'createdAt',
        type: 'timestamp',
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'updatedAt',
        type: 'timestamp',
        isNullable: false,
        default: 'now()',
      },
    ],
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
