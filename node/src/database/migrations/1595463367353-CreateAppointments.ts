import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateAppointments1595463367353 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'appointments',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true,
              generationStrategy: 'uuid',
            },
            {
              name: 'provider',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'date',
              type: 'timestamp with time zone', // anothers bd's is only 'timestamp'
              isNullable: false
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('appointments');
    }

}
