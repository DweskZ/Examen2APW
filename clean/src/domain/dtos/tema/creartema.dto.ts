export class CrearTemaDto {
  constructor(
    public readonly nombre: string,
    public readonly descripcion?: string
  ) {}
}
