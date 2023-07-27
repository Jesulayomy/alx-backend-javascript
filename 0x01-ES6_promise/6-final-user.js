import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => (
      result.map((structure) => ({
        status: structure.status,
        value: structure.status === 'fulfilled'
          ? structure.value
          : String(structure.reason),
      }))
    ));
}
