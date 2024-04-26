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

// import { uploadPhoto, createUser } from './utils.js';

// function handleProfileSignup() {
//   Promise.all([uploadPhoto(), createUser()])
//     .then((values) => {
//       console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
//     })
//     .catch(() => {
//       console.log('Signup system offline');
//     });
// }

// export default handleProfileSignup;
