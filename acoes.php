<?php

if($_REQUEST['identifier'] == 'newversion'){
    $dados = $_REQUEST['dados'];

    $filename = "./db/note.json";

    if (file_exists($filename)) {
        $fp = fopen("./db/note.json", "w");
        $escreve = fwrite($fp, $dados);       
        // Fecha o arquivo
        fclose($fp);

    } else {
        $fp = fopen("./db/note.json", "a");
        $escreve = fwrite($fp, $dados);       
        // Fecha o arquivo
        fclose($fp);
    }
    var_dump($dados);
}
