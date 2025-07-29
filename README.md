# Chat App 💬

Uma aplicação de chat em tempo real construída com React, Express.js e Socket.IO.

## 🚀 Tecnologias Utilizadas

### Frontend
- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Ferramenta de build rápida para desenvolvimento
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **Socket.IO Client** - Cliente para comunicação em tempo real

### Backend
- **Express.js** - Framework web para Node.js
- **Socket.IO** - Biblioteca para comunicação bidirecional em tempo real
- **Node.js** - Runtime JavaScript do lado servidor

## 📁 Estrutura do Projeto

```
chat-app/
├── backend/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── package.json
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── eslint.config.js
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── main.jsx
│       ├── index.css
│       └── assets/
└── README.md
```

## ⚡ Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd chat-app
```

### 2. Configuração do Backend
```bash
cd backend
npm install
npm run dev
```

O servidor será executado na porta `4000`.

### 3. Configuração do Frontend
Em um novo terminal:
```bash
cd frontend
npm install
npm run dev
```

O frontend será executado na porta `5173`.

## 🎯 Como Usar

1. Abra seu navegador e acesse `http://localhost:5173`
2. Digite uma mensagem no campo de texto
3. Clique em "Send" para enviar a mensagem
4. Abra várias abas ou dispositivos para testar o chat em tempo real
5. As mensagens aparecerão instantaneamente para todos os usuários conectados

## 🔧 Funcionalidades

- ✅ **Mensagens em tempo real** - Comunicação instantânea entre usuários
- ✅ **Interface responsiva** - Design adaptável para diferentes dispositivos
- ✅ **Conexão automática** - Detecção automática de conexão/desconexão
- ✅ **Histórico de mensagens** - Visualização das mensagens no chat
- ✅ **Design moderno** - Interface limpa usando Tailwind CSS

## 🛠️ Scripts Disponíveis

### Backend
- `npm run dev` - Executa o servidor em modo desenvolvimento com nodemon

### Frontend
- `npm run dev` - Executa o servidor de desenvolvimento Vite
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter ESLint

## 🌐 Configuração de CORS

O backend está configurado para aceitar conexões do frontend na porta `5173`:

```javascript
cors: {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST']
}
```

## 🔄 Socket.IO Events

### Cliente para Servidor
- `send-message` - Envia uma nova mensagem

### Servidor para Cliente
- `receive-message` - Recebe mensagens de outros usuários

## 📱 Responsividade

A aplicação utiliza Tailwind CSS com classes responsivas para garantir uma boa experiência em:
- 📱 Dispositivos móveis
- 💻 Tablets
- 🖥️ Desktops

## 🚧 Melhorias Futuras

- [ ] Sistema de salas/rooms
- [ ] Autenticação de usuários
- [ ] Histórico persistente de mensagens
- [ ] Notificações push
- [ ] Emoji picker
- [ ] Compartilhamento de arquivos
- [ ] Status online/offline dos usuários

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou entrar em contato.

---

Feito com ❤️ e muito ☕
