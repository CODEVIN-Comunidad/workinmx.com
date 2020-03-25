(function(){
	emailjs.init("user_R6Wrwd2cLFZtPzwJ681kt");
})();

var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

	var params = myform.serializeArray().reduce(function(obj, item) {
	     obj[item.name] = item.value;
	     return obj;
  	}, {});

  // Change to your service ID, or keep using the default service
  var service_id = "receive_messages";

  var template_id = "send_message";
  myform.find("button").text("Enviando mensaje...");
  emailjs.send(service_id, template_id, params)
  	.then(function(){ 
       alert("Mensaje enviado");
       myform.find("button").text("Enviar mensaje"); 
     }, function(err) {
       alert("El mensaje no fue enviado\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Enviar mensaje");
    });

  return false;
}
);