function validaForm(){
	let validaCod=document.forms["cadastrar"]["codigo"].value;
	let validaTit=document.forms["cadastrar"]["titulo"].value;
	let validaAut=document.forms["cadastrar"]["autor"].value;
	let validaDat=document.forms["cadastrar"]["data"].value;
	let validaClassind=document.forms["cadastrar"]["classind"].value;
	let validaRad=document.forms["cadastrar"]["radio"].value;

	if(validaCod == ""){
		alert("O codigo deve ser preenchido!");
		return false;
	}
	if(validaTit == ""){
		alert("O titulo deve ser preenchido!");
		return false;
	}
	if(validaAut == ""){
		alert("O autor/a deve ser preenchido!");
		return false;
	}
	if(validaDat == ""){
		alert("O data deve ser preenchido!");
		return false;
	}
	if(validaClassind == ""){
		alert("O Classind deve ser preenchido!");
		return false;
	}
	if(validaRad == ""){
		alert("O gênero deve ser marcado!");
		return false;
	}
}

function insere(){
	let cod=document.forms["cadastrar"]["codigo"].value;
	let tit=document.forms["cadastrar"]["titulo"].value;
	let aut=document.forms["cadastrar"]["autor"].value;
	let dat=document.forms["cadastrar"]["data"].value;
	let classind=document.forms["cadastrar"]["classind"].value;
	let rad=document.forms["cadastrar"]["radio"].value;

	let inserir=window.document.getElementById("inserirTabela");
	inserir.innerHTML=`<th scope="row">${cod}</th>`;
	inserir.innerHTML+=`<td>${tit}</td>`;
	inserir.innerHTML+=`<td>${aut}</td>`;
	inserir.innerHTML+=`<td>${dat}</td>`;
	inserir.innerHTML+=`<td>${rad}</td>`;
	inserir.innerHTML+=`<td>${classind}</td>`;
}