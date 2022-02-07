import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../assets/img/logo.svg";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { Container, Form, Input, Button, StyledLink } from "../../components/FormComponents";

export default function In() {
  const [formData, setFormData] = useState({ value: '', description: '', type: 'in' })
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

    console.log({ ...formData })
    const promise = api.registerTransaction({ ...formData });

    

    promise.then((response) => {
      navigate("/transactions");
    });
    promise.catch(() => {

      alert('Erro, tente novamente');
    });
  }

  return (
    <Container>

      <Form onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="Valor"
          name="value"
          onChange={handleChange}
          value={parseInt(formData.value)}
          required
        />
        <Input
          type="text"
          placeholder="Descrição"
          name="description"
          onChange={handleChange}
          value={formData.description}
          required
        />

        <Button type="submit">
          Salvar entrada
        </Button>
      </Form>

    </Container>
  );
}