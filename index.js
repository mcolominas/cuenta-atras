import dayjs from 'dayjs';

const finCurso = dayjs('2027-01-21');
const hoy = dayjs();

console.log('Quedan ' + finCurso.diff(hoy, 'day') + ' días para terminar el curso!');
