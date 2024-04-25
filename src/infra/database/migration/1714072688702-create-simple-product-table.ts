import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSimpleProductTable implements MigrationInterface {
  private table = new Table({
    name: 'simple_products',
    uniques: [{ name: 'UNIQUE_NAME', columnNames: ['name'] }],
    columns: [
      {
        name: 'id',
        type: 'uuid',
        default: 'uuid_generate_v4()',
        isPrimary: true,
        isGenerated: true,
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
