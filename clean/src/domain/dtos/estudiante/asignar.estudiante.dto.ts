export class AsignarEstudiantesDto {
  constructor(
    public readonly defensaId: string,
    public readonly estudianteIds: string[]
  ) {}
}