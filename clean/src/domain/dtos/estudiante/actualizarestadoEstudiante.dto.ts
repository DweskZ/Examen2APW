export class ActualizarEstadoEstudianteDto {
  private constructor(
    public readonly estudianteId: string,
    public readonly notaDocumento?: number,
    public readonly notaPropuesta?: number,
    public readonly documentacionCompleta?: boolean,
    public readonly aprobadoRevisor1?: boolean,
    public readonly aprobadoRevisor2?: boolean,
    public readonly listoParaDefensa?: boolean
  ) {}

  static create(props: { [key: string]: any }): [string?, ActualizarEstadoEstudianteDto?] {
    const { estudianteId } = props;
    if (!estudianteId) return ['El ID del estudiante es obligatorio', undefined];

    return [undefined, new ActualizarEstadoEstudianteDto(
      estudianteId,
      props.notaDocumento,
      props.notaPropuesta,
      props.documentacionCompleta,
      props.aprobadoRevisor1,
      props.aprobadoRevisor2,
      props.listoParaDefensa
    )];
  }
}