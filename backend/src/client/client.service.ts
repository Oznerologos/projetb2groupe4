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

  async create(data: Partial<Client>) {
    const client = new Client(data);
    const clientInserted = await this.clientRepository.save(client);
    return this.clientRepository.findOne({
      clientId: clientInserted.clientId,
    });
  }

  async update(client: Client): Promise<UpdateResult> {
    return await this.clientRepository.update(client.clientId, client);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.clientRepository.delete(id);
  }
}
