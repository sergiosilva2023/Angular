## Angular 16 - módules

# Conceitos de componente
- Como criar componentes
- Como declarar componentes em modeus
- Problema na duplicação de componentes
- Como criar componentes filhos
- Como refencciar componentes de outros módulos (externos)
- Estratégias de estilização de componentes
    - Configuração de Inline Template e Inline Css
    -  :: ng-deep
    -   :host
- View Encapsulation
    - None
    - Emulated
    - ShadowDom

# Criar novo componente, todos os componentes são classes javascript
ng g c card

# Decoreters
@Component
@NgModule ({declarations: [todos os Components e pipes]})
imports: [BrowserModule], (o imports é para todos os modules)

# Dividir os componentes por módulos
- Na estrutura do projeto ao momento da componentização, ter em atenção para nem sempre criar todos os componentes no mesmo módulo
- Criar os modulos com os componentes espeficicos
- Não declarar componentes em 2 módulos

- Criar módulo (ng g m cards)

# Importar a Ref de outro módulo para aceder aos componentes desse módulo
- No app.module, importar a ref do módulo que tem os componentes e exportar os componentes dentro do próprio módulo

# Utilização de Interpolação
- Criar propriedades dentro da class do componente, dentro das chaves do export class; tipo = "Simples", preco = 100

# Encadeamento Opcional na Interpolação
- Atribuir um valor undefined para mais tarde receber a informação
- Erros de runtime, já não compila a solução
- Resolver com optional chain

# Template dentro do componente (prop "template")
- Colocar o template html do componente dentro do decorater do proprio componente
- template: `<div class="card-button">Comprar</div>`, é pouco aconselhado a menos que seja realmente pouco código
- Preferivél usar sempre templateUrl: './card-button.component.html', e atualizar o template html do componente
- ng g c inline --inline-template: gera o componente sem o template .html, ficando o template dentro inline.component.ts 

# Estilos CSS Dentro do Componente(prop "Styles")
- ng g c card-button-cancel --inline-style, gera o componente sem o template css, ficando o scss dentro do card-button-cancel.component.ts
- Commentar o ficheiro scss para teste // stylesUrls
- Criar styles, é sempre um array onde podemos criar vários objetos um para cada estilo com crazes styles ex: [`{.class1}`, `{.class2}`] 