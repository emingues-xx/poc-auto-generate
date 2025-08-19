# POC Auto Generate

Projeto Next.js com TypeScript, configurado com ESLint, Prettier e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript 5.6** - Tipagem estática
- **Tailwind CSS 3.4** - Framework CSS utilitário
- **ESLint + Prettier** - Linting e formatação
- **CSS Variables** - Sistema de theming

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm run start
```

## 📁 Estrutura do Projeto

```
src/
├── app/              # App Router (Next.js 13+)
│   ├── globals.css   # Estilos globais e CSS variables
│   ├── layout.tsx    # Layout raiz da aplicação
│   └── page.tsx      # Página inicial
├── components/       # Componentes reutilizáveis
│   └── ui/          # Componentes de UI
│       ├── Button.tsx
│       └── Card.tsx
├── lib/             # Utilitários e configurações
│   └── utils.ts     # Funções utilitárias
└── types/           # Definições TypeScript
    └── index.ts     # Tipos comuns
```

## 🎨 Sistema de Theming

O projeto usa CSS Variables para suporte a temas:

```css
:root {
  --primary-500: #3b82f6;
  --background: #ffffff;
  --foreground: #0f172a;
}

[data-theme='dark'] {
  --background: #0f172a;
  --foreground: #f1f5f9;
}
```

## 🧩 Componentes

### Button
```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="md">
  Clique aqui
</Button>
```

### Card
```tsx
import { Card } from '@/components/ui/Card';

<Card variant="elevated">
  <h2>Título</h2>
  <p>Conteúdo do card</p>
</Card>
```

## 🛠️ Scripts Disponíveis

```bash
npm run dev         # Servidor de desenvolvimento
npm run build       # Build para produção
npm run start       # Servidor de produção
npm run lint        # Verificar código com ESLint
npm run type-check  # Verificar tipos TypeScript
```

## 📝 Padrões de Código

- **ESLint** configurado para Next.js
- **Prettier** para formatação consistente
- **TypeScript** para tipagem estática
- **Tailwind CSS** para estilização

## 🔧 Configuração

- `next.config.js` - Configuração do Next.js
- `tailwind.config.js` - Configuração do Tailwind CSS
- `tsconfig2.json` - Configuração do TypeScript
- `eslint.config.js` - Configuração do ESLint
- `prettier.config.js` - Configuração do Prettier

## 📖 Práticas Recomendadas

1. Use CSS Variables para theming
2. Organize componentes por funcionalidade
3. Mantenha tipos TypeScript atualizados
4. Siga os padrões de nomenclatura estabelecidos
5. Execute linting antes de commits