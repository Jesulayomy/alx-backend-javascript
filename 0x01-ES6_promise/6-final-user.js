import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([signResult, uploadResult]) => [
      {
        status: signResult.status,
        value: signResult.status === 'fulfilled' ? String(signResult.value) : String(signResult.reason),
      },
      {
        status: uploadResult.status,
        value:
          uploadResult.status === 'fulfilled'
            ? String(uploadResult.value) : String(uploadResult.reason),
      },
    ]);
}
