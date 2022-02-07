import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../assets/img/logo.svg";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { Container, Form, Input, Button, StyledLink } from "../../components/FormComponents";

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { auth, login } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (auth && auth.token) {
  //     navigate("/transactions");
  //   }
  // }, []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const promise = api.login({ ...formData });

    promise.then((response) => {
      login(response.data);
      navigate("/transactions");
    });
    promise.catch(() => {

      alert('Erro, tente novamente');
    });
  }

  return (
    <Container>
      <img alt="logo.svg" src={Logo} />

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <Input
          type="password"
          placeholder="senha"
          name="password"
          onChange={handleChange}
          value={formData.password}
          required
        />

        <Button type="submit">
          Entrar
        </Button>
      </Form>

      <StyledLink to="/signup">
        Primeira vez? Cadastre-se!
      </StyledLink>
    </Container>
  );
}