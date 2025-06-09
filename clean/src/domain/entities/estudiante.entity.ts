export class Estudiante {
  constructor(
    public id: string,
    public nombre: string,
    public defensaId: string | null = null,
    public notaDocumento: number | null = null,
    public notaPropuesta: number | null = null,
    public documentacionCompleta: boolean = false,
    public aprobadoRevisor1: boolean = false,
    public aprobadoRevisor2: boolean = false,
    public listoParaDefensa: boolean = false
  ) {}
}
