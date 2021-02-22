

//JAVASCRİPT KISMINDA BAZI EKSİKLİKLERİM VAR ELİMDEN GELDİĞİNCE EMEK VERDİM.....
if (document.getElementById) {//UYE OL VE GİRİŞYAP SEKMELERİNE TIKLADIĞINDA İLGİLİ BÖLÜMÜN AÇILMASI SAĞLANDI..
    document.write() }
    
    var divNum = new Array("girisyap","uyeol");
    function openClose(theID) {
    for(var i=0; i < divNum.length; i++) {
    if (divNum[i] == theID) {
    if (document.getElementById(divNum[i]).style.display == "block") { document.getElementById(divNum[i]).style.display = "none" }
    else {
    document.getElementById(divNum[i]).style.display = "block"
    }
    } else {
    document.getElementById(divNum[i]).style.display = "none"; }
    }
    }
  
 
function gmailKontrol() {//GİRİŞYAP GMAİL İÇİN YAZILDI 
  
  var email = document.getElementById("fname").value;
  var atpos=email.indexOf("@");
  var dotpos=email.lastIndexOf(".");
  if ( atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length ){
    
    document.getElementById("sonuc").innerHTML="Bu alan boş bırakılamaz";
    //document.getElementById("sonuc").style.color ="red";
    document.getElementById("fname").style.border ="1px solid red";
  }}

  function sifreKontrol(){// ŞİFRE KONTOROLLÜ İÇİN YAZILDI ...
    var sifre= document.getElementById("pwd").value;
    var say=sifre.length;
  if( say==null || say==""|| say<6){
    document.getElementById("sonuc1").innerHTML="Bu alan boş bırakılamaz";
    document.getElementById("pwd").style.border ="1px solid red";

  }}


function adKontrol(){// BU KISIM UYE OL İÇİN YAPILDI VALİDASYONLAR VE REGEXLER YAPILDI AMA RENK KISMI OLMADI..
  var e=document.getElementById("firstname").value;
  var sayi=e.length;
  if ( sayi==null || sayi=="" ||  sayi>3 || sayi<=24){
    //document.getElementById("sonuc6").innerHTML="Bu alan boş bırakılamaz";
    //document.getElementById("firstname").style.border ="1px solid red";
  
  }

}
function soyKontrol(){
  var k=documeny.getElementById("surname").value;
  var uzunluk=k.length;
  if(uzunluk==null || uzunluk==""|| uzunluk>3|| uzunluk<=24){
    //document.getElementById("sonuc2").innerHTML="Bu alan boş bırakılamaz";
    //document.getElementById("surname").style.border ="1px solid red";

  }
}


function postaKontrol(){
  var posta=document.getElementById("email").value;
  var atpos=posta.indexOf("@");
  var dotpos=posta.lastIndexOf(".");
  if ( atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length ){
    document.getElementById("sonuc3").innerHTML="Bu alan boş bırakılamaz"; 
    document.getElementById("sonuc3").style.color ="red";
  
}
}
function passwordKontrol(){//onBlur() fonksiyonu kullandımm..
 var z = document.getElementById("pwd1").value;
 if ( z == null || z == "" )
 {
  document.getElementById("sonuc4").innerHTML="Bu alan boş bırakılamaz";
  document.getElementById("sonuc4").style.color ="red";

 }}

 function pwKontrol(){//ŞİFRE VE ŞİFRE ONAYI KONTROL ETME SAĞLANDI...
  var  x = document.getElementById("pwd1").value;
  var  y = document.getElementById("pwd2").value;
 if ( !(x == y) )
 {
  document.getElementById("sonuc5").innerHTML="Şifreler birbiriyle uyuşmamaktadır";
  document.getElementById("sonuc5").style.color ="red";
  document.getElementById("pwd1").style.border ="1px solid red";
  document.getElementById("pwd2").style.border ="1px solid red";

 }

}

function form_kontrol()// Rıza Metni checkbox’ı tiklandiktan sonra Üye Ol butonu aktif hale getirmek..
{
    if(document.getElementById("firstname").value.length == 0)
        document.getElementById("gonder").disabled = true;
    else if(document.getElementById("surname").value.length == 0)
        document.getElementById("gonder").disabled = true;
    else if(document.getElementById("email").value.length == 0)
        document.getElementById("gonder").disabled = true;
        else if(document.getElementById("pwd1").value.length == 0)
        document.getElementById("gonder").disabled = true;
        else if(document.getElementById("pwd2").value.length == 0)
        document.getElementById("gonder").disabled = true;
        else if(document.getElementById("onay").checked == false)
        document.getElementById("gonder").disabled = true;
    else
        document.getElementById("gonder").disabled = false;
}