// infrastructure/datasources/defensa-json.datasource.ts

import { Defensa } from '../../domain/entities/defensa.entity';
import { CrearDefensaDto } from '../../domain/dtos/defensa/crear-defensa.dto';
import { ActualizarDefensaDto } from '../../domain/dtos/defensa/actualizar-defensa.dto';
import { DefensaRepository } from '../../domain/repositories/defensa.repository';
import { v4 as uuid } from 'uuid';

export class DefensaJsonDatasource extends DefensaRepository {
  private defensas: Defensa[] = [];

  async create(dto: CrearDefensaDto): Promise<Defensa> {
    const defensa = new Defensa(
      uuid(),
      dto.tema,
      dto.tipoDefensa,
      dto.salaId,
      dto.horarioId,
      dto.presideJuradoId,
      dto.revisor1Id,
      dto.revisor2Id,
      'Pendiente',
      dto.estudianteIds
    );

    this.defensas.push(defensa);
    return defensa;
  }

  async findById(id: string): Promise<Defensa | null> {
    return this.defensas.find(d => d.id === id) ?? null;
  }

  async findAll(): Promise<Defensa[]> {
    return this.defensas;
  }

  async updateById(dto: ActualizarDefensaDto): Promise<Defensa> {
    const index = this.defensas.findIndex(d => d.id === dto.id);
    if (index === -1) throw new Error('Defensa no encontrada');

    const defensa = this.defensas[index];

    this.defensas[index] = {
      ...defensa,
      ...dto
    };

    return this.defensas[index];
  }

  async assignSala(defensaId: string, salaId: number): Promise<void> {
    const defensa = await this.findById(defensaId);
    if (!defensa) throw new Error('Defensa no encontrada');
    defensa.salaId = salaId;
  }

  async assignHorario(defensaId: string, horarioId: string): Promise<void> {
    const defensa = await this.findById(defensaId);
    if (!defensa) throw new Error('Defensa no encontrada');
    defensa.horarioId = horarioId;
  }

  async assignEstudiantes(defensaId: string, estudianteIds: string[]): Promise<void> {
    const defensa = await this.findById(defensaId);
    if (!defensa) throw new Error('Defensa no encontrada');
    defensa.estudianteIds = estudianteIds;
  }

  async markAsCompleted(defensaId: string): Promise<void> {
    const defensa = await this.findById(defensaId);
    if (!defensa) throw new Error('Defensa no encontrada');
    defensa.estado = 'Completada';
  }
}
