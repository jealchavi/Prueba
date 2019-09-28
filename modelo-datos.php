<?php 

if (isset($_POST['accion']) && $_POST['accion']=='enviar') {

        $nombre=$_POST['nombre'];
        $email=$_POST['email'];
        $mensaje=$_POST['mensaje'];
    
        $respuesta=array(
            'nombre'=>$nombre,
            'email'=>$email,
            'mensaje'=>$mensaje
        );
    
    
        echo json_encode($respuesta);
    
}
    







?>