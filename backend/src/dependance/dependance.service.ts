import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dependance } from './dependance.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { ImageService } from 'src/image/image.service';

@Injectable()
export class DependanceService {
  constructor(
    @InjectRepository(Dependance)
    private readonly dependanceRepository: Repository<Dependance>,
    private readonly imageService: ImageService,
  ) {}

  findAll() {
    return this.dependanceRepository.find();
  }

  async findAllByBien(id: string) {
    const dependances: Dependance[] = await this.dependanceRepository.find({
      dependanceBien: id,
    });
    for (let i = 0; i < dependances.length; i++) {
      dependances[
        i
      ].dependanceImages = await this.imageService.findAllByDependance(
        dependances[i].dependanceId,
      );
    }
    return dependances;
  }

  findById(id: string) {
    return this.dependanceRepository.findOne({ dependanceId: id });
  }

  async create(data: Partial<Dependance>) {
    const dependance = new Dependance(data);
    const dependanceInserted = await this.dependanceRepository.save(dependance);
    return this.dependanceRepository.findOne({
      dependanceId: dependanceInserted.dependanceId,
    });
  }

  async update(
    dependanceId: string,
    dependance: Partial<Dependance>,
  ): Promise<Dependance> {
    await this.dependanceRepository.update(dependanceId, dependance);

    return this.dependanceRepository.findOne(dependanceId, {
      relations: ['images'],
    });
  }

  async delete(id): Promise<DeleteResult> {
    return await this.dependanceRepository.delete(id);
  }
}
