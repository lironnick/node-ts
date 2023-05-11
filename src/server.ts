import z from 'zod';

const userSchema = z.object({
    name: z.string()
    .min(3, { message: 'O nome precisa de 3 caracteres.'})
    .transform(name => name.toLocaleUpperCase()),
    age: z.number().min(18, { message: 'você precisa ser maior de idade'})
});

type User = z.infer<typeof userSchema>

// interface User {
//     name: string
//     age: number
// }

function saveUserToDatabase(user: User) {
    const { name, age } = userSchema.parse(user);
    console.log(name, age);
}


saveUserToDatabase({
    name: 'diego',
    age: 19
})