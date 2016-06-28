<?php
 
$ip = "";
$arg1 = "";
 
if (!empty($_SERVER['HTTP_CLIENT_IP'])) 
{
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} 
elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) 
{
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} 
else
{
    $ip = $_SERVER['REMOTE_ADDR'];
}
 
Header("Content-type: text/javascript");
echo "var my_ip = '$ip';";
echo "var arg1 = '".$arg1."';";

?>
