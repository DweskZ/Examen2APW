export class ActualizarSalaDto {
  constructor(
    public readonly id: number,
    public readonly nombre?: string,
    public readonly ubicacion?: string
  ) {}
}