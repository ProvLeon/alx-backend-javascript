import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return createUser()
    .then(({ firstName, lastName }) => {
      return uploadPhoto().then(({ body }) => {
        console.log(`${body} ${firstName} ${lastName}`);
      });
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
