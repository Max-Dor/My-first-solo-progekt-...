<?php

ini_set('default_socket_timeout', 3); 
$debug = true;
$user = 'info@three-bears.org';
$pass = '2Z4i1Q6j';
$host = 'ssl://server136.hosting.reg.ru';
$port = 465;
$to = 'regrutesthosting@yandex.ru';
$from = 'info@three-bears.org';
$template = "Subject: =?UTF-8?B?VGVzdCBFbWFpbA==?=\r\n"
."To: <$to>\r\n"
."From: $from\r\n"
."MIME-Version: 1.0\r\n"
."Content-Transfer-Encoding: base64\r\n\r\n"
."VGVzdCBFbWFpbAo=\r\n.";

function smtp_mail($to, $from, $message, $user, $pass, $host, $port, $debug)
{
        $pure_host = str_replace("ssl://","",$host);
        $h = fsockopen($host, $port);
        if ($debug){
                echo "Connection to $host by port $port:".PHP_EOL;var_dump($h);
        }
        if ($h){
                $data = array(
                        0,
                        "EHLO $pure_host",
                        'AUTH LOGIN',
                        base64_encode($user),
                        base64_encode($pass),
                        "MAIL FROM: <$from>",
                        "RCPT TO: <$to>",
                        'DATA',
                        $message
                );
                foreach($data as $c) 
                {
                        if ($debug){
                                echo "->SEND COMMAND: ".$c.PHP_EOL;
                        }
                        $c && fwrite($h, "$c\r\n");
                        while(substr($resp = fgets($h, 256), 3, 1) != ' '){}
                        if ($debug){
                            echo "<-RECIEVED COMMAND: ".$resp.PHP_EOL;
                        }
                }
                fwrite($h, "QUIT\r\n");
                return "LAST RECIEVED COMMAND : ".$resp;
        } else {echo "Connection error".PHP_EOL;}
}
if (isset($_SERVER['REQUEST_URI'])){echo "<pre>";}
echo (smtp_mail($to, $from, $template, $user, $pass, $host, $port, $debug));