import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary-600 mb-4">
            POC Auto Generate
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Projeto Next.js com TypeScript, ESLint, Prettier e Tailwind CSS
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl">
          <Card>
            <h2 className="text-xl font-semibold text-primary-700 mb-2">
              ⚡ Next.js 15
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Framework React com App Router e performance otimizada
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-primary-700 mb-2">
              🔷 TypeScript
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Tipagem estática para maior segurança e produtividade
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-primary-700 mb-2">
              🎨 Tailwind CSS
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Framework CSS utilitário com theming customizável
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-primary-700 mb-2">
              ✅ ESLint
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Análise estática de código para qualidade e consistência
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-primary-700 mb-2">
              💎 Prettier
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Formatação automática de código para melhor legibilidade
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-primary-700 mb-2">
              🌙 Theme Support
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Suporte a temas claro e escuro com CSS Variables
            </p>
          </Card>
        </div>

        <div className="mt-8 flex gap-4">
          <Button variant="primary">
            Começar Desenvolvimento
          </Button>
          <Button variant="outline">
            Ver Documentação
          </Button>
        </div>
      </div>
    </main>
  );
}