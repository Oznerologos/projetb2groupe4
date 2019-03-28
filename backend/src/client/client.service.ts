import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { Repository } from 'typeorm';

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
    return this.clientRepository.findOne({ idClient: id });
  }

  async create(data: Partial<Client>) {
    const client = new Client(data);
    const clientInserted = await this.clientRepository.save(client);
    return this.clientRepository.findOne({ idClient: clientInserted.idClient });
  }
}
