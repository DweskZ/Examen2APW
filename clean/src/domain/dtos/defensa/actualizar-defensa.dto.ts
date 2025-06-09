export class ActualizarDefensaDto {
  private constructor(
    public readonly id: string,
    public readonly tipoDefensa?: 'Pre-defensa' | 'Defensa Final',
    public readonly estado?: 'Pendiente' | 'Completada',
    public readonly salaId?: number,
    public readonly horarioId?: string,
    public readonly presideJuradoId?: string,
    public readonly revisor1Id?: string,
    public readonly revisor2Id?: string
  ) {}

  static create(props: { [key: string]: any }): [string?, ActualizarDefensaDto?] {
    const { id } = props;
    if (!id) return ['El ID de la defensa es obligatorio', undefined];

    return [undefined, new ActualizarDefensaDto(
      id,
      props.tipoDefensa,
      props.estado,
      props.salaId,
      props.horarioId,
      props.presideJuradoId,
      props.revisor1Id,
      props.revisor2Id
    )];
  }
}