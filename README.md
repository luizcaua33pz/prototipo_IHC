# Cultura-IA

Aplicativo web para descoberta de eventos culturais com assistente IA integrado.

## Funcionalidades

- **Descoberta de Eventos**: Lista de eventos culturais categorizados por tipo, localização e preço.
- **Sistema de Favoritos**: Salve seus eventos preferidos.
- **Login/Registro**: Sistema de autenticação para usuários.
- **Assistente IA**: Chatbot inteligente que recomenda eventos e responde perguntas sobre cultura.
- **Filtros Avançados**: Filtre eventos por categoria, localização e preço.

## Tecnologias

- **Frontend**: React + Vite
- **Estilos**: CSS customizado com Tailwind CSS
- **IA**: OpenAI GPT-4 via API
- **Deploy**: Vercel (com funções serverless)

## Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/luizcaua33pz/prototipo_IHC.git
   cd cultura-ia
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione sua chave da OpenAI:
     ```
     VITE_OPENAI_API_KEY=sua-chave-aqui
     ```

4. Execute o projeto:
   ```bash
   npm run dev
   ```

## Deploy no Vercel

1. Conecte seu repositório no Vercel.
2. Adicione a variável de ambiente `OPENAI_API_KEY` (sem VITE_) no painel do Vercel.
3. Deploy automático será feito.

## Estrutura do Projeto

```
src/
├── App.jsx          # Componente principal
├── Chatbot.jsx      # Assistente IA
├── LoginRegister.jsx # Sistema de login
├── App.css          # Estilos principais
└── index.css        # Estilos globais

api/
└── openai.js        # Função serverless para OpenAI

public/
└── assets/          # Imagens e ícones
```

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto é para fins educacionais e de prototipagem.
