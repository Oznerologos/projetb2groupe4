import { Departement } from "src/departement/departement.entity";

export default class CreateDepartements implements Seed {
    public async seed(factory: Factory, connection: Connection): Promise<any> {
      await connection
        .createQueryBuilder()
        .insert()
        .into(Departement)
        .values([{ firstName: 'Timber', lastName: 'Saw' }, { firstName: 'Phantom', lastName: 'Lancer' }])
        .execute()
    }
  }