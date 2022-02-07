import styled from "styled-components";

const Value = styled.div`
    color: ${props => props.color === 'out' ? '#C70000' : '#03AC00'};
    padding-right: 10px;
`

export default Value;