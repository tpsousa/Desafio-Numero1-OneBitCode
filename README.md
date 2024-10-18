# 🤖 Automação para Marcar Aulas como Concluídas

## 🏆 O Desafio

Depois que a plataforma mudou, **os alunos ficaram sem o progresso das aulas**. Agora, a única solução seria ir manualmente e clicar em "Concluir" em cada aula... **MAS NÓS SOMOS ALUNOS DA ONEBITCODE**! 💻😎

Por que gastar tempo com isso se podemos automatizar esse processo ultilizando Node? 🤘🔥

Então, o objetivo aqui é simples: fazer um script que marque as aulas automaticamente como concluídas, para que a gente possa focar no que interessa... aprender! 😅

## 🚀 A Solução: Usando o Playwright

A ferramenta escolhida foi o **Playwright**, porque é fácil, prático e faz tudo o que precisamos: controlar o navegador, fazer login, e marcar as aulas. Sem dor de cabeça!

### **Por que escolhi o Playwright?**
- **Super fácil de usar**: A API dele é suave, até parece que você tá tomando café enquanto programa ☕.
- **Multinavegador**: Roda em Chrome, Firefox, Safari... e até em um *toaster* se precisar! 🖥️.
- **Instalação rápida**: Em minutos você tá rodando. Menos código, mais eficiência! 🔥

## 🧰 O Que Esse Script Faz?
O script é seu novo ajudante virtual 🤖. Ele:
1. **Faz login** na plataforma automaticamente com suas credenciais.
2. Acessa o curso e os módulos escolhidos.
3. **Marca todas as aulas** como concluídas, uma por uma, com um delay de 5 segundos (para não levantar suspeitas 😜).

## ⚙️ Como Usar?

### 1. **Pré-requisitos**
- Tenha **Node.js** instalado (se não tiver, [baixa aqui](https://nodejs.org/)).

### 2. **Clone o Repositório**
Abra o terminal e clone o repositório:

```bash
git clone <link-do-repositorio>
cd automacao-aulas-playwright
3. Instalar as Dependências
Rode o seguinte comando:

bash
Copiar código
npm install
4. Configure o Script
Abra o arquivo marcarAulas.js e faça essas pequenas alterações:

Substitua URL_DA_PLATAFORMA_DE_LOGIN pela URL da página de login da sua plataforma.
Insira seu email e senha no lugar de SEU_EMAIL e SUA_SENHA.
Coloque a URL do curso que você quer automatizar em URL_DO_CURSO.
Ajuste NUMERO_DE_AULAS com o número total de aulas.
5. Execute o Script
Agora, só rodar o script com:

bash
Copiar código
node marcarAulas.js
6. Relaxe e aproveite!
O script vai abrir o navegador, fazer login e começar a marcar suas aulas automaticamente. Vai por mim, é quase mágico! ✨

🛠️ O que esse script resolve?
Economiza tempo: Menos cliques, mais foco no conteúdo.
Automatização sem dor: Faz tudo sozinho, só você ajustar e rodar.
Flexível: Fácil de customizar para outros cursos ou plataformas.
📦 Tecnologias Utilizadas
Node.js: O bom e velho JavaScript rodando fora do navegador.
Playwright: A estrela do show, que faz o browser trabalhar por você.
🤔 Por que essa solução é tão boa?
Automação Completa: Desde o login até o "Concluir aula", você não precisa fazer nada.
Delay configurado: O delay de 5 segundos entre cada ação faz parecer que você está clicando de verdade, então a plataforma nem vai perceber.
Simples de usar: Em questão de minutos, você pode rodar essa automação e marcar quantas aulas quiser.
