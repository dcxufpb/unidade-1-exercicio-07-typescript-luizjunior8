function dados_loja_param(nome_loja: string,
  logradouro: string,
  numero: number,
  complemento: string,
  bairro: string,
  municipio: string,
  estado: string,
  cep: string,
  telefone: string,
  observacao: string,
  cnpj: string,
  inscricao_estadual: string) {

    if (!nome_loja){
      throw new Error (`O campo nome da loja é obrigatório`)
    }
  
    if (!logradouro){
      throw new Error (`O campo logradouro do endereço é obrigatório`)
    }
  
    let _numero : string = numero ? `${numero}` : "s/n"  
  
    if (!municipio){
      throw new Error (`O campo município do endereço é obrigatório`)
    }
  
    if (!estado){
      throw new Error (`O campo estado do endereço é obrigatório`)
    }
  
    if (!cnpj){
      throw new Error (`O campo CNPJ da loja é obrigatório`)
    }
  
    if (!inscricao_estadual){
      throw new Error (`O campo inscrição estadual da loja é obrigatório`)
    }  
  
    let _complemento : String = complemento ? ` ${complemento}` : ""
  
    let _bairro : String = bairro ? `${bairro} - ` :  ""
  
    let _cep : String = ""
    let _telefone : String = ""
  
    if (cep){
      _cep = `CEP:${cep}`
  
      if (telefone){
        _telefone = ` Tel ${telefone}`
      } 
    }else{
      _telefone = `Tel ${telefone}`
    }
  
    let _observacao : String = observacao ? `${observacao}` : ""
  
  
      return `${nome_loja}
${logradouro}, ${_numero}${_complemento}
${_bairro}${municipio} - ${estado}
${_cep}${_telefone}
${_observacao}
CNPJ: ${cnpj}
IE: ${inscricao_estadual}
`
}

module.exports = dados_loja_param;
