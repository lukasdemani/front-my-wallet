import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/img/logo.svg";
import api from "../../services/api";
import { Container, Form, Input, Button, StyledLink } from "../../components/FormComponents";

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', password: '', passwordTest: '' });

    function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
      e.preventDefault();

      const promise = api.signUp({
        ...formData
      });

      promise.then(() => {
        navigate("/");
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
          type="text"
          placeholder="Nome"
          name="name"
          onChange={handleChange}
          value={formData.name}
          required
        />
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
          placeholder="Senha"
          name="password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <Input
          type="password"
          placeholder="Confirme a senha"
          name="passwordTest"
          onChange={handleChange}
          value={formData.passwordTest}
          required
        />

        <Button type="submit">
          Cadastrar
        </Button> 
      </Form>

      <StyledLink to="/">
        Já tem uma conta? Entre agora!
      </StyledLink>
    </Container>
  );
}