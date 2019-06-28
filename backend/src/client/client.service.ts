import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  findAll() {
    return this.clientRepository.find();
  }

  findById(id: string) {
    return this.clientRepository.findOne({ clientId: id });
  }

  async findFirst() {
    let clients: Client[] = await this.clientRepository.find();
    return clients[0];
  }

  async create(data: Partial<Client>) {
    const client = new Client(data);
    const clientInserted = await this.clientRepository.save(client);
    return this.clientRepository.findOne({
      clientId: clientInserted.clientId,
    });
  }

  async update(clientId: string, client: Partial<Client>): Promise<Client> {
    await this.clientRepository.update(clientId, client);

    return this.clientRepository.findOne(clientId, {
      relations: ['images', 'propositions', 'biens'],
    });
  }

  async delete(id): Promise<DeleteResult> {
    return await this.clientRepository.delete(id);
  }
}
