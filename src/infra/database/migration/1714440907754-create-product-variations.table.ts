import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

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
        name: 'configurableProductId',
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
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
    await queryRunner.createForeignKey(
      'product_variation',
      new TableForeignKey({
        columnNames: ['configurableProductId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'configurable_product',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
