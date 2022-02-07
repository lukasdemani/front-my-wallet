import { useNavigate, useLocation } from "react-router-dom";
import { Container, Text } from "./style";
import useAuth from "../../hooks/useAuth";
import { pathsWithoutHeaderAndMenu }  from "../../App";

export default function Header() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(auth.name)
  return (
    <Container>

      <Text>
         {auth.name}
      </Text>
    </Container>
  );
}