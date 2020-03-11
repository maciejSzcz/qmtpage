import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const Error = styled.div`
  font-size: 1.1rem;
  color: red;
`;

const NotFoundPage = () => (
  <Layout>
    <Error>Nie znaleziono strony o podanym adresie. Proszę spróbować ponownie</Error>
  </Layout>
);

export default NotFoundPage;
