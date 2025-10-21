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