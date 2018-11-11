import {MigrationInterface, QueryRunner} from 'typeorm';

// tslint:disable-next-line:class-name
export class initRight1540588631018 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO "right"(id, libelle) VALUES(1, 'remi')`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
