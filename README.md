# Devin Pharmacy App

Este é um projeto de aplicação web para gerenciamento de farmácias e medicamentos.

## Objetivo do Projeto

O objetivo desta aplicação é permitir o cadastro, listagem e gerenciamento de farmácias e medicamentos. Ela fornece uma interface amigável para administrar informações sobre medicamentos, incluindo detalhes como nome, descrição, laboratório, dosagem e preço. Além disso, permite o cadastro e exibição de informações sobre farmácias, incluindo nome, endereço, contato e localização geográfica.

## Sobre a Aplicação 

A aplicação desenvolvida visa solucionar o desafio de gerenciar informações relacionadas a medicamentos e farmácias, fornecendo uma plataforma para cadastro, visualização e busca de medicamentos e farmácias. O problema que ela resolve está relacionado à necessidade de facilitar o acesso a informações sobre medicamentos disponíveis em diferentes farmácias, bem como fornecer uma ferramenta eficaz para as farmácias cadastrarem e divulgarem seus produtos.

Com essa aplicação, os usuários podem:

 * Cadastrar informações sobre medicamentos, incluindo nome, descrição, laboratório, dosagem, preço e tipo.
 * Cadastrar informações sobre farmácias, incluindo nome fantasia, razão social, endereço, telefone e coordenadas geográficas.
 * Visualizar a lista de medicamentos disponíveis e detalhes sobre cada um deles.
 * Visualizar a lista de farmácias cadastradas e detalhes sobre cada uma delas.
 * Buscar medicamentos por nome.
 * Acessar informações sobre farmácias e medicamentos de forma rápida e fácil.

## Tecnologias Utilizadas

* React: Biblioteca JavaScript para construção de interfaces de usuário.
* React Router: Biblioteca para gerenciamento de rotas na aplicação.
* Styled Components: Biblioteca para estilização de componentes utilizando CSS-in-JS.
* Material-UI: Framework de UI que fornece componentes estilizados e prontos para uso.
* Context API: API do React para gerenciamento de estado global na aplicação.
* Leaflet: Biblioteca para renderização de mapas interativos.
* React Icons: Biblioteca para adicionar ícones populares à aplicação.
* Git e GitHub: Para controle de versão e hospedagem do código.

## Apresentando a aplicação

    [Vídeo de apresentação](google.com)
    
## Instalação


Siga as etapas abaixo para configurar e executar a aplicação em sua máquina local:

1. Clone o repositório para o seu ambiente local:

   ```sh
   git clone https://github.com/seu-usuario/devin_pharmacy.git
   ```

2. Acesse a pasta do projeto:

   ```sh
   cd devin_pharmacy
   ```

3. Instale as dependências do projeto usando npm ou yarn:

   ```sh
   npm install
   ```

4. Inicie a aplicação:

   ```sh
   npm start
   ```

   Acesse a aplicação em seu navegador em http://localhost:####.

## Requisitos Técnicos

- Node.js 
- npm ou yarn
- VsCode
- Navegador web moderno

## Requisitos da aplicação

O sistema possui os seguintes requisitos e funcionalidades:
### Página de Login

 * Campo de e-mail e senha.
 * Validação dos campos de entrada.
 * Redirecionamento para a página de Mapa após o login bem-sucedido.

### Página de Cadastro de Farmácia
   * Campos obrigatórios: Razão social, CNPJ, Nome Fantasia, E-mail, Celular, CEP, Logradouro/Endereço, Número, Bairro, Cidade, Estado, Latitude, Longitude.
   * Consulta de endereço automática através do CEP via API ViaCEP.
   * Validação dos campos obrigatórios.
   * Feedback de cadastro bem-sucedido.

### Página de Cadastro de Medicamentos

   * Campos obrigatórios: Nome do medicamento, Nome do laboratório, Dosagem do medicamento, Preço unitário do medicamento, Tipo do medicamento.
   * Tratamento de campos especiais (descrição e tipo).
   * Feedback de cadastro bem-sucedido.

### Página de Mapa

   * Renderização de mapa interativo com marcadores de farmácias cadastradas.
   * Exibição de informações da farmácia ao clicar no marcador.
   * Utilização da React Leaflet para exibição dos mapas.

### Página de Listagem de Medicamentos
   * Exibição de medicamentos em formato de card.
   * Barra de busca para buscar medicamentos.
   * Opção de filtro por preço e tipo.

### Página de Detalhes de Medicamentos

   * Exibição detalhada das informações do medicamento.

### Menu de Navegação

 * Navegação entre as páginas da aplicação.

### Estilização

* Criação de identidade visual única e intuitiva.
* Utilização de cores, formatos e estilos personalizados.
* Foco na usabilidade e responsividade.

## Melhorias Futuras

 * Autenticação de Usuário: Adicionar um sistema de autenticação de usuário para garantir que apenas usuários autenticados possam acessar as funcionalidades de cadastro e edição de medicamentos e farmácias. Isso aumentará a segurança e a privacidade dos dados.

 * Edição e Exclusão de Dados: Implementar a capacidade de editar e excluir informações sobre medicamentos e farmácias já cadastrados. Isso permitirá que os usuários corrijam erros ou atualizem informações conforme necessário.

 * Imagens de Medicamentos e Farmácias: Adicionar a funcionalidade de upload de imagens para medicamentos e farmácias, permitindo que os usuários associem imagens aos produtos e estabelecimentos.
    
 * Avaliações e Comentários: Incorporar um sistema de avaliações e comentários, onde os usuários possam compartilhar suas experiências com medicamentos e farmácias. Isso ajudará outros usuários a tomar decisões informadas.

 * Filtros Avançados: Implementar filtros de pesquisa avançados para medicamentos, como filtrar por tipo, preço ou laboratório. Isso facilitará a busca por medicamentos específicos.

 * Notificações: Adicionar a capacidade de enviar notificações aos usuários, informando sobre promoções de medicamentos, novos produtos ou atualizações nas farmácias cadastradas.

 * Controle de Acesso Avançado: Implementar diferentes níveis de acesso para usuários, como administradores e usuários comuns, cada um com permissões específicas para gerenciar dados.

 * Testes Automatizados: Desenvolver testes automatizados para garantir a robustez e a estabilidade da aplicação, reduzindo possíveis erros e falhas.

```
