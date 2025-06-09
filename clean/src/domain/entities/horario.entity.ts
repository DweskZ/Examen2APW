// domain/entities/horario.entity.ts

export class HorarioReservado {
  constructor(
    public id: string,
    public salaId: number,
    public horaInicio: Date,
    public horaFin: Date,
    public defensaId: string | null = null // si quieres vincular desde aquí también
  ) {}
}
