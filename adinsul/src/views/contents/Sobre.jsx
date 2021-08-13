import React from "react"
import { useParams } from 'react-router-dom'

const Sobre = props => {


    return (
        <div>

            <h1><center>Sobre</center></h1><br></br>

            <h3>A diabetes é a quarta comorbidade que mais mata no mundo e que cada 10 segundos mais uma contrai a doença, segundo o Dr. Rodrigo Lamounier. 
                O Brasil atualmente ocupa o 4º lugar como o país com maior número de pessoas diabéticas no mundo, o Ministério da Saúde no ano de 2013 apresentou 
                dados onde nos últimos 6 anos houve um aumento de 40% da população que possuem diabetes.
                
                <br></br>
                <br></br>

                Nós alunos do 3º ano de Desenvolvimento de Sistemas integrado ao ensino médio desenvolvemos um Projeto de TCC se baseando em uma das missões
                presentes na agenda 2030 da ONU, mais especificamente na área da saúde, o projeto se consiste na construção de um dispositivo administrador de insuli (AdInsul),
                nele o usuário tem a possibilidade de programar os horários que ocorrerão a(s) aplicação(ões) e as unidades (UI) que serão aplicadas, o AdInsul é um dispositivo portatil
                e que permitirá com que o usuário não se preocup em para o que está fazendo para aplicar a insulina, tendo que tira-lo apenas na hora de trocar a agulha de aplicação.

                <br></br>
                <br></br>

                O projeto se estrutura a partir de uma placa Arduino uno r3 que será programada com as linguagens C++ (linguagem padrão do Arduino) e JavaScript, que dá suporte ao componente 
                bluetooth module hc-05 que será necessária para a comunicação entre software-usuário tendo em vista que as configurações de dosagem e hora de aplicação serão feitas pelo próprio a partir de seu celular, 
                o app será feito utilizando principalmente do React Native. Vale lembrar que as unidades de insulina são determinadas pelo médico.
            </h3>

            <br></br>


            <h2><center>Componentes do grupo:</center></h2><br></br>

            <h3>Nome: Leonardo Basílio Diniz <br></br>
                Curso: Desenvolvimento de sistemas 
                <br></br><br></br>

                Nome: Lucas Henrique Masson <br></br>
                Curso: Desenvolvimento de sistemas
                <br></br><br></br>

                Nome: Matheus Lopes de Almeida Tiago <br></br>
                Curso: Desenvolvimento de sistemas
                <br></br><br></br>

                Nome: Samuel Pereira Luciano <br></br>
                Curso: Desenvolvimento de sistemas
                <br></br><br></br>

                Nome: Sofia Pereira Gomes <br></br>
                Curso: Desenvolvimento de sistemas

                <br></br><br></br>
                Nome: Vitor Hugo de Souza <br></br>
                Curso: Desenvolvimento de sistemas
            
            </h3>
        </div>


    )
}

export default Sobre