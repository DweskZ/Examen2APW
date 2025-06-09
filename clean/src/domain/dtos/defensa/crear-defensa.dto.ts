export class CrearDefensaDto {
  private constructor(
    public readonly tema: string,
    public readonly tipoDefensa: 'Pre-defensa' | 'Defensa Final',
    public readonly salaId: number | null,
    public readonly horarioId: string | null,
    public readonly presideJuradoId: string,
    public readonly revisor1Id: string,
    public readonly revisor2Id: string,
    public readonly estudianteIds: string[]
  ) {}

  static create(props: { [key: string]: any }): [string?, CrearDefensaDto?] {
    const {
      tema, tipoDefensa, salaId, horarioId,
      presideJuradoId, revisor1Id, revisor2Id, estudianteIds
    } = props;

    if (!tema || !tipoDefensa || !presideJuradoId || !revisor1Id || !revisor2Id)
      return ['Faltan campos obligatorios', undefined];

    if (!Array.isArray(estudianteIds) || estudianteIds.length === 0)
      return ['Debe asignarse al menos un estudiante', undefined];

    return [undefined, new CrearDefensaDto(
      tema, tipoDefensa, salaId ?? null, horarioId ?? null,
      presideJuradoId, revisor1Id, revisor2Id, estudianteIds
    )];
  }
}