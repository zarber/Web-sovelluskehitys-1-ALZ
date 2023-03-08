## Group Activities

> Work in group to solve these tasks.

## Task 1

- Refer to the file `userModel.js` and discuss how passwords are salted before Hashing.

- Inside the `src` folder:
  - Run `npm install`
  - Run `npm run dev`
- Use POSTMAN to test the endpoints:
  - Alternatively, you can use `REST VS code extension`
  - Examples:

```http
POST http://localhost:4000/api/workouts
{
    "title":"Workout 1",
    "reps":40,
    "load":10
}
```

```http
POST http://localhost:4000/api/user/signup
{
    "email": "sami@sami.fi",
    "password": "45RFgh##@$"
}
```

```http
POST http://localhost:4000/api/user/login
{
    "email": "mirja@mirja.fi",
    "password": "45RFgh##@$"
}
```

## Task 2

- Refer to the file `userModel.js` and discuss how passwords are salted before Hashing.

## Task 3

1. Which statements about hash functions are TRUE?

- [] A hash function cannot be reversed to infer the input.
- [] Using the same input in a hash function will always return the same output.
- [] A hash function can be reversed to infer the input.
- [] Using the same input in a hash function will sometimes return the same output.
- [] Using the same input in a hash function will never return the same output.

2. What is a Rainbow Table?

- [] A hash table containing plain-text passwords connected to their hashed version.
- [] A hash function that applies an algorithm to convert a plain-text password to a hashed version.
- [] A hash function that can be used to reverse the hashing of a hashed password to get the plain-text password as the output.
- [] A list of leaked passwords obtained by a malicious user.

3. How does a malicious user use a Rainbow Table to gain access to user accounts?

- [] They match a leaked hashed password to a hashed password that is already in their Rainbow Table, and use that to obtain the plain-text password.
- [] They use a script to run leaked hashed passwords from the Rainbow Table through login forms until they gain access.
- [] They trigger XSS and CSRF attacks after finding compromised passwords.

4. Which statement is TRUE about encoding and hashing information?

- [] Encoded information can be reversed by anyone, but hashed information can never be reversed.
- [] Hashed information can be reversed by anyone who has a private key, but encoded information be reversed by anyone.
- [] Encoded and hashed information CANNOT be reversed under any circumstances.
- [] Both encoded and hashed information CAN be reversed by anyone who has a private key.

5. How does the signature of a JWT ensure that the information transmitted within it is not tampered with?

- [] The signature is created by hashing the header, payload, and a secret key. You can verify that the information has not been tampered with by re-hashing the information with the secret key, and checking that the new hash is identical to the original hash.
- [] The signature includes a private key. When the signature is decoded, you can verify that the correct secret key is used, and verify that the payload content match the content encrypted in the signature.
- [] The signature only contains a secret key. If it is missing or incorrect, the information transmitted is unverified and considered untrustworthy.

6. Which statements are true about JavaScript's built-in methods and JWTs?

- [] JavaScript built-in methods can be used to encode and decode the payload of a JWT.
- [] JavaScript built-in methods can be used to isolate the individual sections of a JWT string.
- [] It is better to use the jsonwebtoken package to manage JWTs then to try to use JavaScript methods to manage them yourself.
- [] JavaScript built-in methods can be used to verify a JWT signature.

7. Why should sensitive information never be stored in a JWT?
