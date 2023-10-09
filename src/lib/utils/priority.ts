type Priority = 'High' | 'Medium' | 'Low';

export const determinePriority = (point: number): Priority => {
  if (point < 1 || point > 100) {
    throw new Error('Point must be between 1 and 100');
  }

  if (point >= 70) {
    return 'High';
  }
  if (point >= 40) {
    return 'Medium';
  }
  return 'Low';
};
