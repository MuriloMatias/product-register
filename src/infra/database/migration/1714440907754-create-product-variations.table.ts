import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProductVariationsTable1714440907754
  implements MigrationInterface
{
  private table = new Table({
    name: 'product_variation',
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'uuid',
      },
      {
        name: 'attribute',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'value',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'product_id',
        type: 'uuid',
        isNullable: false,
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
    foreignKeys: [
      {
        name: 'PRODUCT_VARIATION',
        columnNames: ['product_id'],
        referencedTableName: 'configurable_product',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
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
