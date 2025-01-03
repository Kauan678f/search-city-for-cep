import { useEffect, useState } from "react";
export default function Home() {
    const [cep, setCep] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [dados, setDados] = useState(null);
    async function findCity() {
        // console.log(dados)
        const url = `https://apicep.bacode.com.br/cep/${cep}`;
        if (cep.length != 9) {
            setDados(null);
            setErrorMessage("Digite o CEP corretamente, no formato XXXXX-XXX.");
            return;
        }
        const response = await fetch(url);
        if (!response.ok) {
            const error = await response.json();
            setDados(null);
            setErrorMessage(error.errorMessage);
            return;
        }
        const data = await response.json();
        setErrorMessage('');
        setDados(data.response);
    }
    useEffect(() => {
        console.log(dados);
    }, [dados]);
    return (<div className="home">
      <div className="container">
        <h1>Buscar Cidade por CEP</h1>
        {/* <div>
          <label htmlFor="">Estado:</label>
          <section></section>
        </div> */}
        <div className="one">
          <h2>CEP:</h2>
          <input type="text" value={cep} placeholder="ex..: 12345-678" onChange={(e) => { setCep(e.target.value); }}/>
        </div>
        <div className="two">
          <button onClick={findCity}>Buscar Cidade</button>

          {dados && (<div className="responseMessage">
              <div><strong>Cep:</strong> {dados.cep}</div>
              <div><strong>Cidade:</strong> {dados.localidade}</div>
              <div><strong>UF:</strong> {dados.uf}</div>
              <div><strong>logradouro:</strong> {dados.logradouro}</div>
              <div><strong>bairro:</strong> {dados.bairro}</div>
              <div><strong>regiao:</strong> {dados.regiao}</div>
              <div><strong>ibge:</strong> {dados.ibge}</div>
              <div><strong>ddd:</strong> {dados.ddd}</div>
            </div>)}

          {errorMessage != '' &&
            <div className="errorMessage">{errorMessage}</div>}
          
        </div>
      </div>
    </div>);
}
