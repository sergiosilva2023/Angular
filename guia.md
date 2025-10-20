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

## Criar novo componente, todos os componentes são classes javascript
ng g c card

## Decoreters
@Component
@NgModule ({declarations: [todos os Components e pipes]})
imports: [BrowserModule], (o imports é para todos os modules)