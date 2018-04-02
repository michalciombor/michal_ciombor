<?PHP
	$adresat = 'michal.ciombor@gmail.com'; 	// pod ten adres zostanie wysłana 	// 
    $nazwa = $_POST['imie_i_nazwisko'];
	$email = $_POST['email'];
	$content = $_POST['wiadomosc'];
	$header = 	"From: '$email' \nContent-Type:".
			' text/plain;charset="iso-8859-2"'.
			"\nContent-Transfer-Encoding: 8bit";
	if (mail($adresat, 'List ze strony',$nazwa, $content, $header))
		echo '<p>działa</p>';
	else 
		echo '<p><b>NIE</b> wysłano maila!</p>';
?>