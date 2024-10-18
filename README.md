# 🤖 Automação para Marcar Aulas como Concluídas

## 🏆 O Desafio
Com a migração para uma nova plataforma de aprendizado, muitos alunos perderam o progresso de suas aulas. A solução proposta pela plataforma era simples, mas tediosa: marcar manualmente cada aula como concluída.

**Nós somos alunos da OneBitCode!** Então, por que não automatizar isso? 🤘🔥

Este projeto visa resolver esse problema através de um script que marca automaticamente as aulas como concluídas, permitindo que você foque no aprendizado ao invés de tarefas repetitivas.

## 🚀 A Solução com Playwright

Para automatizar essa tarefa, escolhi o **Playwright**, uma biblioteca poderosa e fácil de usar que permite controlar navegadores como Chrome, Firefox e Safari diretamente por código.

### **Por que Playwright?**
- **Simplicidade**: Playwright tem uma API fácil de entender e usar.
- **Multiplataforma**: Funciona em múltiplos navegadores, garantindo flexibilidade.
- **Rápida Configuração**: É rápido para instalar e rodar, sem complicações.

## 🧰 O Que Esse Script Faz?
Este script resolve o problema de clicar manualmente no botão "Concluir aula". Ele:
1. Faz login automaticamente com suas credenciais.
2. Acessa o curso escolhido.
3. Marca todas as aulas como concluídas com um delay de 5 segundos entre cada aula.

## ⚙️ Como Usar?

### 1. **Pré-requisitos**
- **Node.js** instalado. [Baixe e instale aqui](https://nodejs.org/).

### 2. **Clonar o Repositório**
Abra o terminal e clone este repositório:

```bash
git clone <link-do-repositorio>
cd automacao-aulas-playwright
3. Instalar as Dependências
Instale as dependências do projeto:

bash
Copiar código
npm install
4. Configurar o Script
Abra o arquivo marcarAulas.js e faça as seguintes alterações:

Substitua URL_DA_PLATAFORMA_DE_LOGIN pela URL da página de login da plataforma.
Substitua SEU_EMAIL e SUA_SENHA pelas suas credenciais.
Substitua URL_DO_CURSO pela URL do curso que deseja automatizar.
Ajuste NUMERO_DE_AULAS para o número total de aulas.
5. Rodar o Script
Execute o script no terminal:

bash
Copiar código
node marcarAulas.js
6. Aproveite!
O script abrirá o navegador, fará login, acessará o curso e marcará todas as aulas como concluídas automaticamente.

🛠️ Problemas que Resolve
Economiza tempo: Não há mais necessidade de clicar repetidamente em "Concluir aula".
Automatização prática: A tarefa repetitiva é executada de forma automática.
Customizável: Você pode ajustar o script para diferentes cursos e aulas com facilidade.
📦 Tecnologias Utilizadas
Node.js: Plataforma para executar JavaScript fora do navegador.
Playwright: Biblioteca para controle automatizado de navegadores.
🤔 Por que é uma Solução Simples e Eficiente?
Automação Completa: O script cuida de toda a navegação, login e interação com a plataforma.
Delay Configurável: O atraso de 5 segundos entre marcações evita possíveis bloqueios no sistema.
Fácil de Usar: Com poucas modificações e a execução de um comando, qualquer um pode rodar essa automação.
