export class ReservarHorarioDto {
  constructor(
    public readonly salaId: number,
    public readonly horaInicio: Date,
    public readonly horaFin: Date
  ) {}
} 