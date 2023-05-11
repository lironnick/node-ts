# NodeJS com TypeScript

Neste template você encontrará:

- [Node](https://nodejs.org/en)
- [typescript](https://www.typescriptlang.org/)
- [tsx](https://www.npmjs.com/package/tsx)
- [tsup](https://www.npmjs.com/package/tsup)
- [vitest](https://vitest.dev/)
- [zod](https://zod.dev/)

## Inicializando projeto em NodeJS

Criar uma pasta

    mkdir <Nome da projeto>
    cd <Nome da projeto>

Comando para criar o projeto em nodeJs

    yarn init -y

Vai ser gerado um arquivo package.json

```json
{
  "name": "node-ts",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

Instalar as `Libs`

    yarn add typescript -D
    yarn add tsx -D
    yarn add tsup -D
    yarn add vitest -D
    yarn add zod -D

Na raiz do projeto criar um diretorio `src` e um arquivo server.ts

    Pode usar o Editor de codigo ex `VScode`

Adicionar algumas informaçãos no package.json

```json
{
  "name": "node-ts",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "tsx src/server.ts",
    "start:dev": "tsx watch src/server.ts",
    "build": "tsup src",
    "test": "vitest"
  },
  "devDependencies": {
    "tsup": "^6.7.0",
    "tsx": "^3.12.7",
    "typescript": "^5.0.4",
    "vitest": "^0.31.0",
    "zod": "^3.21.4"
  }
}
```

# typescript

TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.

# tsx

Para simular um ambiente que o `TS` consigo ser executado.

Usando TSX na maneira abaixo só ira executar uma vez

    tsx src/server.ts

Usando TSX na maneira abaixo só ira executar toda vez que tiver uma auteração no codigo.

    tsx watch src/server.ts

# tsup

Para transforma o codigo `TS` em `JS` e realizar o build da aplicação

    tsup src

# vitest

Para gerar testes da sua aplicação

    vitest

# zod

`Lib` para validar e transformar informações, como: nome não pode ser vazio entre outros

```javascript
import z from 'zod';

const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa de 3 caracteres.' })
    .transform((name) => name.toLocaleUpperCase()),
  age: z
    .number()
    .min(18, { message: 'você precisa ser maior de idade' }),
});

type User = z.infer<typeof userSchema>;

function saveUserToDatabase(user: User) {
  const { name, age } = userSchema.parse(user);
  console.log(name, age);
}

saveUserToDatabase({
  name: 'diego',
  age: 19,
});
```
