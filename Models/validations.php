<?php
function containsAt($variable)
{
    for ($i = 0; $i < strlen($variable); $i++) {
        if ($variable[$i] === '@') {
            return true;
        }
    }
    return false;
}
function hasDigit($x){
    for ($i = 0; $i < strlen($x); $i++) {
        if (ctype_digit($x[$i])) {
            return true;        
        }
    }
    return false;
    
}

function hasSpecialChar($x){
    for ($i = 0; $i < strlen($x); $i++) {
        if (!ctype_alnum($x[$i])) {
            return true;
        }
    }
    return false;
    
}

?>
