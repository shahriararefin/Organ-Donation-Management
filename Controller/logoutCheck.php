<?php
setcookie('flag', 'abc', time() - 10, '/');
header('location: ../views/login/login.html');
