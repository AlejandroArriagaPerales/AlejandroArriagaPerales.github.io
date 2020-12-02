<?php
    $servidor = "localhost";
    $usuario = "root";
    $contrasena="";
    $bd="libreria";

    $conexion = mysqli_connect($servidor,$usuario,$contrasena,$bd);

    if(isset($_GET['titulo'])){
                    
                    $titulito = $_GET["titulo"];
                    $autorito = $_GET["autor"];
                    $editorialito = $_GET["editorial"];
                    $enlacesito = $_GET["enlace"];
                    $preciosito = $_GET["precio"];
    
                    $consulta="INSERT INTO libros values(NULL, '$titulito', '$editorialito', '$autorito' ,'$enlacesito', '$preciosito')";
                    mysqli_query($conexion,$consulta);
                    
    }
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<header>
        <p>Nombre: Alejandro Arriaga Perales</p>
        <p>Materia: Programación Web</p>
        <p>Ejercicio: Inventario de Libros PHP</p>
   </header>

   <main>

   <h1>Lista de Libros</h1>
   <a href="registrar.php">Nueva</a>
   <table>
    
    <tr>
        <th>ID</th>
        <th>Titulo</th>
        <th>Editorial</th>
        <th>Autor</th>
        <th>Enlace</th>
        <th>Precio</th>
        
    </tr>
    

    <tbody>
        <?php

        $consulta = "SELECT * FROM libros";
      
    
        $registros = mysqli_query($conexion, $consulta);
            if($registros->num_rows>0){
                while($fila = $registros->fetch_assoc()){
        ?>
        <tr>
        <th>
                <?php
                echo $fila["id"];
                ?>
        </th>
            <th>
                <?php
                echo $fila["titulo"];
                ?>
            </th>
            <th>
                <?php
                echo $fila["editorial"];
                ?>
            </th>
            <th>
                <?php
                echo $fila["autor"];
                ?>
            </th>
            <th>
                <?php
                echo $fila["enlace"];
                ?>
            </th>
            <th>
                <?php
                echo $fila["precio"];
                ?>
            </th>
            
            


        </tr>


        <?php
                }
            }
        ?>
        


    </tbody>

    </table>

    <?php
    mysqli_close($conexion);
?>

</main>



<footer>



</footer>



    
</body>
</html>