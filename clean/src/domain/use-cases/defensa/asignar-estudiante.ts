// domain/use-cases/asignar-estudiantes.use-case.ts

import { DefensaRepository } from '../../repositories/defensa.repository';
import { EstudianteRepository } from '../../repositories/estudiante.repository';
import { AsignarEstudiantesDto } from '../../dtos/defensa/asignar-estudiante.dto';
import { Estudiante } from '../../entities/estudiante.entity'

export class AsignarEstudiantesUseCase {
  constructor(
    private readonly defensaRepository: DefensaRepository,
    private readonly estudianteRepository: EstudianteRepository
  ) {}

  async execute(dto: AsignarEstudiantesDto): Promise<Estudiante[]> {
    const defensa = await this.defensaRepository.findById(dto.defensaId);
    if (!defensa) throw new Error('Defensa no encontrada');

    const estudiantes = await this.estudianteRepository.findManyByIds(dto.estudianteIds);

    // Asignar defensaId a cada estudiante
    estudiantes.forEach((e) => (e.defensaId = dto.defensaId));

    await this.estudianteRepository.saveMany(estudiantes);
    await this.defensaRepository.assignEstudiantes(dto.defensaId, dto.estudianteIds);

    return estudiantes;
  }
}
