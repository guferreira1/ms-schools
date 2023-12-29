export enum DisciplineEnum {
  BIOLOGY = 'BIOLOGY',
  ART = 'ART',
  GEOGRAPHY = 'GEOGRAPHY',
  SOCIOLOGY = 'SOCIOLOGY',
}

export const getDisciplineEnumDescription = (
  discipline: DisciplineEnum | string | undefined,
): string => {
  switch (discipline) {
    case DisciplineEnum.ART:
      return 'Artes';
    case DisciplineEnum.GEOGRAPHY:
      return 'Geografia';
    case DisciplineEnum.SOCIOLOGY:
      return 'Sociologia';
    case DisciplineEnum.BIOLOGY:
      return 'Biologia';
    default:
      return 'Disciplina não registrada.';
  }
};
