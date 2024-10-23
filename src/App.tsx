import React from 'react';
import styled from 'styled-components';


const App: React.FC = () => {
  return (
    <div>
      <Header>Meu Aplicativo</Header>
      <Hero>Bem-vindo ao nosso site!</Hero>
      <Form>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" placeholder="Digite seu nome" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Digite seu email" required />

        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" placeholder="Digite sua mensagem" required></textarea>

        <button type="submit">Enviar</button>
      </Form>
      <JobList>
        <JobCard>Vaga 1</JobCard>
        <JobCard>Vaga 2</JobCard>
      </JobList>
    </div>
  );
};

export default App;
