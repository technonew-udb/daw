var i = 1;
var data = [""];

function getId(x){
	return document.getElementById(x);

}

function increment(){
i += 1;
}

	var cont= 0;
	var cnts= 1;
function agregarPregunta(){
	var id = []
	for (var i = 0; i < 10; i++) {
		if (i == 0) {
			var text = 'nuevaPregunta';
		id.push(text);
		}
		if(i > 0){
		var text = 'nuevaPregunta'+i;
		id.push(text);
		}
	}
	
	var variable = '"'+id[cont]+'"';
	if (cont==0) {
		var res =  getId(id[cont]);
	}else {
		var res =  getId(id[cont]);
		
	}
	












	
	if (res) {
	var txt = '';
	txt+='div class="input-group mb-3" style="margin-top: 10px">'
	txt+='<label for="basic-url" style="margin-top: 10px; margin-right: 10px;color: black" >Imagen de su test</label>'
	txt+= '<div class="input-group-append">'
                                       
	 txt+=' <input class="btn btn-outline-secondary" type="file" id="seleccionArchivos" accept="image/*"  style="margin-top: 10px"></button>'
	 txt+='</div>'
                                  
	 txt+= '<img id="imagenPrevisualizacion" width="600px" height="300px" class="rounded mx-auto d-block img-fluid" src="img/imagen pregunta.png" >'
        txt+='</div>'
	txt+='<div class="card-body"><div class="input-group mb-3">';
	txt+='<input type="text" class="form-control" placeholder="Escriba la pregunta" aria-label="Username" aria-describedby="basic-addon1" id="pregunta">'
	txt+='</div><div class="input-group mb-3">';
	txt+=' <div class="input-group-prepend"> <div class="input-group-text">';
	txt+=' <input type="checkbox" aria-label="Checkbox for following text input">';
	txt+=' </div> </div>';
	txt+=' <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Respuesta 1" id="preguntaRes">'
    txt+=' </div><div class="input-group mb-3">';
	txt+=' <div class="input-group-prepend"> <div class="input-group-text">';
	txt+=' <input type="checkbox" aria-label="Checkbox for following text input">';
	txt+=' </div> </div>';
	txt+=' <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Respuesta 2" id="preguntaRes">'
    txt+=' </div><div class="input-group mb-3"><div class="input-group-prepend">';
    txt+='<div class="input-group-text"><input type="checkbox" aria-label="Checkbox for following text input">';
    txt+='</div> </div><input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Respuesta 3" id="preguntaRes">';
    txt+=' </div><div class="input-group mb-3"> <div class="input-group-prepend">';
    txt+=' <div class="input-group-text"> <input type="checkbox" aria-label="Checkbox for following text input" >';
    txt+=' </div> </div><input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Respuesta 4" id="preguntaRes">';
    txt+='</div><input type="button" class="btn btn-primary" value="Agregar otra pregunta" onclick="agregarPregunta()">';
    txt+='</div><div id="'+id[cnts]+'"></div>';
	
	}
	
 


	res.innerHTML = txt;
	cont++;
	cnts++;

	           

}

function Crear(){

var contenedorp = document.createElement("div");
var contenedors = document.createElement("div");
titulo = document.createElement("h5");
var contenedorsub1 = document.createElement("div");
var contenedorsub2 = document.createElement("div");
var contenedorsub3 = document.createElement("input");
var contenedors1 = document.createElement("input");

var contenedors2 = document.createElement("div");
var contenedorss2 = document.createElement("div");
var contenedorsss2 = document.createElement("input");
increment();


contenedors1.setAttribute("type", "text");
contenedors1.setAttribute("placeholder", "Escriba las pregunta");
contenedorsub1.setAttribute("id", "contenedorsub1 " + i);
contenedorsub1.appendChild(contenedors1); //es un input hijo del contenededor sub 1 quien es uno de los 3 contenedores de s



contenedorsub2.appendChild(contenedors2);
contenedors2.appendChild(contenedorss2);
contenedorss2.appendChild(contenedorsss2);



contenedorsub3.setAttribute("type", "button");
contenedorsub3.setAttribute("value", "Agregar otra pregunta");
contenedorsub3.setAttribute("onclick", "Crear()");







contenedors.appendChild(contenedorsub1);
contenedors.appendChild(contenedorsub2);
contenedors.appendChild(contenedorsub3);
contenedors.setAttribute("id", "contenedors" + i);
texto= document.createTextNode("Escribe las preguntas: ");
titulo.appendChild(texto);
contenedorp.appendChild(titulo);
contenedorp.appendChild(contenedors);
contenedorp.setAttribute("id", "c_preguntas" + i);
document.getElementById("headeer").appendChild(contenedorp);
}