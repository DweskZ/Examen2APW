export class CrearDocenteDto {
  constructor(
    public readonly nombre: string,
    public readonly email: string,
    public readonly titulo: string,
    public readonly especialidad: string,
    public readonly roles: ('Revisor' | 'Presidente' | 'Tutor')[]
  ) {}
}