
const saat = document.getElementById("saat");
const dakika = document.getElementById("dakika");
const saniye = document.getElementById("saniye");

// Kutucuklar   
const secilensaat = document.getElementById("secilensaat");
const secilendk = document.getElementById("secilendk");
const secilensn = document.getElementById("secilensn");

//Butonlar
const baslat = document.getElementById("baslat");
document.querySelector('#baslat').disabled = false;

const sifirla = document.getElementById("sifirla");

let dur = false;

secilensaat.addEventListener("change", () => {
    saat.textContent = secilensaat.value < 10 ? "0" + secilensaat.value : secilensaat.value;
})

secilendk.addEventListener("change", () => {
    dakika.textContent = secilendk.value < 10 ? "0" + secilendk.value : secilendk.value;
});

secilensn.addEventListener("change", () => {
    saniye.textContent = secilensn.value < 10 ? "0" + secilensn.value : secilensn.value;
} )


 jQuery('#secilensaat' || '#secilendk' || '#secilensn' ).on('input propertychange paste', function(){
    document.querySelector('#baslat').disabled = false;
});


baslatButonu.addEventListener("click", starter);
sifirlaButonu.addEventListener("click", () => {
    dur = true ;
    saat.textContent = "00";
    dakika.textContent = "00";
    saniye.textContent = "00";
    secilendk.value = "00";
    secilensn.value ="00";
    secilensaat.value = "00"; 

});

baslatButonu.addEventListener("click", startTimer);

function starter(){
    dur = false;
    startTimer;
}

function startTimer() {
    
    let dk = dakika.textContent;
    let sn = saniye.textContent;
    let st = saat.textContent;

    const interval = setInterval(() => {
        sn--;
        sn = sn < 10 ? "0" + sn : sn;
        if (sn == "0-1") {
            
            dk--;
            sn = 59;
        }

        if ((dk==00 && sn==00) || (dk==00 && sn==00)) {
            clearInterval(interval);
            window.alert("SÜRE DOLDU !")
            secilenst.value = "00";
            secilensn.value = "00";
            secilendk.value = "00";
        }

        if (dur) {
            clearInterval(interval); 
            return;           
        }

        dakika.textContent = dk;
        saniye.textContent = sn;
        saat.textContent = st;
    }, 1000);
}


/* kapat düğmesinin oluşturulması ve bütün listelere eklenmesi */
const liste = document.getElementsByTagName("li");
var i;
for (i = 0 ; i<liste.length ; i++){
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild("txt");
    liste[i].appendChild(span);
}

/* liste ögesini gizlemek için kapat düğmesine tıklama */
const close = document.getElementsByClassName("close");
var i;
for (i=0 ; i<close.length ; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    } 
}

/* "Ekle" düğmesine tıklandığında yeni bir liste öğesi oluşturur */
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }


//bubble animation
    