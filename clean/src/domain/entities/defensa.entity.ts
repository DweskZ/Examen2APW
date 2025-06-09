// domain/entities/defensa.entity.ts

export class Defensa {
  constructor(
    public id: string,
    public tema: string,
    public tipoDefensa: 'Pre-defensa' | 'Defensa Final',
    public salaId: number | null,
    public horarioId: string | null, //
    public presideJuradoId: string,
    public revisor1Id: string,
    public revisor2Id: string,
    public estado: 'Pendiente' | 'Completada' = 'Pendiente',
    public estudianteIds: string[] = []
  ) {}
}
