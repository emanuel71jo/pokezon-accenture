import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateItems1627582175206 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "items",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "pokeId",
            type: "number",
          },
          {
            name: "pokeName",
            type: "varchar",
          },
          {
            name: "orderId",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKOrder",
            referencedTableName: "orders",
            referencedColumnNames: ["id"],
            columnNames: ["orderId"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("items");
  }
}
