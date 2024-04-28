import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDigitalProduct1714322537901 implements MigrationInterface {
  private table = new Table({
    name: 'digital_product',
    uniques: [{ name: 'UNIQUE_NAME', columnNames: ['name'] }],
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
        name: 'downloadLink',
        type: 'varchar',
        length: '255',
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
