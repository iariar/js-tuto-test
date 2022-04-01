<?php

session_start();

$_SESSION['id'] = 1;
$token = random_bytes(16);
$token = base64_encode($token);
$_SESSION['token'] = $token;
?>
<form action="/test.php" method="POST">
	<input type="hidden" name="csrf" value="<?=$token?>"/>
	<input type="submit" value="give money"/>
</form>