import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return createUser()
    .then(({firstName, lastName }) => {
      uploadPhoto()
      .then(({ body }) => {
        console.log(`${body} ${firstName} ${lastName}`);
      })
      .catch(() => console.log('Signup system offline'));
    })
      .catch(() => console.log('Signup system offline'));
}
