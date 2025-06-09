// domain/use-cases/crear-defensa.use-case.ts

import { Defensa } from '../../entities/defensa.entity';
import { CrearDefensaDto } from '../../dtos/defensa/crear-defensa.dto';
import { DefensaRepository } from '../../repositories/defensa.repository';

export class CrearDefensaUseCase {
  constructor(
    private readonly defensaRepository: DefensaRepository
  ) {}

  async execute(dto: CrearDefensaDto): Promise<Defensa> {
    return await this.defensaRepository.create(dto);
  }
}
