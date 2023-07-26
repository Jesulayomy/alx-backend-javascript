import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([signResult, uploadResult]) => [
      {
        status: signResult.status,
        value: signResult.status === 'fulfilled' ? signResult.value : signResult.reason,
      },
      {
        status: uploadResult.status,
        value:
          uploadResult.status === 'fulfilled'
            ? uploadResult.value : uploadResult.reason.message,
      },
    ]);
}
