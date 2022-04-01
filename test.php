<?php
session_start();
if (isset($_SESSION['id']) && $_POST['csrf'] == $_SESSION['token'])
	echo "transaction done";
else
	echo "please provide id";