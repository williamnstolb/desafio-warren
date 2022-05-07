const willHaveClass = (list, limitMinStudants) => {
  const delays = (list.filter(arrivalTime => arrivalTime < 0)).length;
  return (delays >= limitMinStudants) ? 'Aula cancelada' : 'Aula normal';
}

export default willHaveClass;