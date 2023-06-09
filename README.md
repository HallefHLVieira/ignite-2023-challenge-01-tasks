# ignite-2023-challenge-01-tasks
Este é um projeto criado para resolver o desafio do módulo 1 do ignite da rocketseat. Foi abordado neste projeto, temas como:

- Streams de leitura, escrita e transformação;
- Regex para validaç~ao de rotas manualmente;
- Criação de servidor web utilizando libs nativas do NodeJS;
- leitura de arquivos com o file system;

E o bônus do desafio foi usar uma biblioteca não vista no primeiro módulo juntto com streams para ler um arquivo CSV e fazer a inserção de dados em massa no banco de dados. Para isso foi uusada a lib 'csv-parse'.

O objetivo desse primeiro módulo, não foi exatamente criar uma API, más entender como funciona uma API NodeJS por baixo dos panos utilizando libs como fastfy ou express.

# Para testar, basta clonar o projeto em uma pasta local em suua máquina

` npm install `

` npm run dev `

# Rotas da aplicação

Creando uma nova task:

` curl --request POST \
  --url http://localhost:3333/tasks \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "Task name",
	"description": "Task description"
}'
`
Listando todas as tasks:

` curl --request GET \
  --url http://localhost:3333/tasks \
  --header 'Content-Type: application/json'
  `

Atualizando uma task:

`curl --request PUT \
  --url http://localhost:3333/tasks/rere \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "Thhis is a new task name",
	"description": "This is a new task description"
}'
`

Alterando status da task para concluído

`curl --request PATCH \
  --url 'http://localhost:3333/tasks/close/e7d60f47-e19a-4252-9a59-c1a20e0f90ea?search=' \
  --header 'Content-Type: application/json'
  `

Deletando uma task

`curl --request DELETE \
  --url http://localhost:3333/tasks/e7d60f47-e19a-4252-9a59-c1a20e0f90ea \
  --header 'Content-Type: application/json'
  `