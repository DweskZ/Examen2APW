export class Docente {
  constructor(
    public id: string,
    public nombre: string,
    public email: string,
    public titulo: string,
    public especialidad: string,
    public roles: ('Revisor' | 'Presidente' | 'Tutor')[]
  ) {}
}
