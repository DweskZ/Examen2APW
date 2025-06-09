// domain/dtos/defensa/asignar-estudiantes.dto.ts

export class AsignarEstudiantesDto {
  private constructor(
    public readonly defensaId: string,
    public readonly estudianteIds: string[]
  ) {}

  static create(props: { [key: string]: any }): [string?, AsignarEstudiantesDto?] {
    const { defensaId, estudianteIds } = props;

    if (!defensaId) return ['El ID de la defensa es obligatorio', undefined];
    if (!Array.isArray(estudianteIds) || estudianteIds.length === 0)
      return ['Debe proporcionar al menos un estudiante', undefined];

    return [undefined, new AsignarEstudiantesDto(defensaId, estudianteIds)];
  }
}
