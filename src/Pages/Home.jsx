import styled from "styled-components";

export default function Home() {
    return (
        <Total>
            <RegisteLogin>
                <Login>Entra</Login> <Register>Cadastro</Register>
            </RegisteLogin>

        </Total>
    )





}

const Total = styled.div`
    width: 100%;
    height: 100%; 
    background-color: #535bf2;
`
const RegisteLogin = styled.div`
     width: 100%;
    height: 18px;
    display: flex;
    background-color: #ed7a16;
    margin-top: 0px;
    
`
const Login = styled.div`
    width: 80px;
    height: 18px;
    display: flex;
    background-color: #cd1ac1;
    margin-left: 50px;
`
const Register = styled.div`
    width: 80px;
    height: 18px;
    display: flex;
    background-color: #18f005;
    margin-left: 22px;
`