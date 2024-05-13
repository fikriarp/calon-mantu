const inputName = document.getElementById("inputName"),
  inputGender = document.getElementById("inputGender"),
  inputOld = document.getElementById("inputOld"),
  buttonInput = document.getElementById("buttonInput"),
  formUser = document.getElementById("formUser"),
  sectionDialog = document.getElementById("sectionDialog"),
  buttonSpeed = document.getElementById("buttonSpeed"),
  buttonNext = document.getElementById("buttonNext"),
  typed = document.getElementById("typed"),
  imgCharacter = document.getElementById("imgCharacter"),
  imgLatar = document.getElementById("imgLatar"),
  question = document.getElementById("question"),
  bgm = document.getElementById("bgm"),
  audioClick = document.getElementById("audioClick"),
  audioObject = document.getElementById("audioObject"),
  soundObject = document.getElementById("soundObject"),
  answer = document.getElementById("answer"),
  characterName = document.getElementById("characterName"),
  buttonAnswer = document.getElementById("buttonAnswer"),
  answerInput = document.getElementById("answerInput"),
  listQuestion = document.querySelectorAll("li"),
  logoWrapper = document.querySelector(".wrapper-logo");

const USER_KEY = "users";

const character = ["Darling", "Camer"]; 

const jurusanKuliahPopuler = [
  "Teknik",
  "Informatika",
  "Ilmu",
  "Komputer",
  "Elektro",
  "Mesin",
  "Sipil",
  "Kedokteran",
  "Hukum",
  "Ekonomi",
  "Psikologi",
  "Arsitektur",
  "Desain",
  "Grafis",
  "Akuntansi",
  "Manajemen",
  "Bisnis",
  "Pendidikan",
  "Farmasi",
  "Hubungan",
  "Kimia",
  "Fisika",
  "DKV"
];


let populer = false;

// Ketika memilih kuliah
buttonAnswer.addEventListener('click', function(){
  audioClick.play();
})

answer.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = answerInput.value;
  let words = input.split(" ");
  const wordsLower = words.map(e => e.toLowerCase())
  const name = inputName.value;
    const old = inputOld.value;
    
    addUser(name, old);
    users.forEach((user) => {
      const { name, gender, old, jawaban } = user;
  for (let i = 0; i <= wordsLower.length; i++) {
    let check = wordsLower[i];
    let firstCheckerWord = jurusanKuliahPopuler.find(
      (jurusan) => jurusan.toLowerCase() === check
    );
    console.log(firstCheckerWord);
    if (firstCheckerWord) {
      answer.style.display = "none"
      buttonNext.style.display = "inline"
      console.log(firstCheckerWord)
      populer = true;
      dialogData.push({
        dialog: `Wah jurasan kamu sedang banyak dibutuhkan perusahaan`,
        character: "/assets/ayah.png",
        bg: "/assets/familyroom.jpg",
      })
      dialogData.push({
        dialog: `semoga lancar kuliahnya ya`,
        character: "/assets/ayah.png",
        bg: "/assets/familyroom.jpg",
      })
      dialogData.push({
        dialog: `Nak, tolong buatkan teh untuk ${name}`,
        character: "/assets/ayah.png",
        bg: "/assets/familyroom.jpg",
      })
      dialogData.push({
        dialog: `Iya Ayah ini lagi dibuat`,
        character: "/assets/wanita.png",
        bg: "/assets/kitchen.jpg",
        })
        dialogData.push({
          dialog: `"Ting.. Ting.. Ting.." (Menagaduk Teh)`,
          character: "/assets/wanita.png",
          bg: "/assets/kitchen.jpg",
          })
        dialogData.push({
          dialog: `Selesai`,
          character: "/assets/wanita.png",
          bg: "/assets/kitchen.jpg",
          })
        dialogData.push({
          dialog: `ini Tehnya`,
          character: "/assets/wanita.png",
          bg: "/assets/familyroom.jpg",
          })
        dialogData.push({
          dialog: `Silahkan diminum ${name}`,
          character: "/assets/ayah.png",
          bg: "/assets/familyroom.jpg",
          })
        dialogData.push({
          dialog: `Semoga kamu suka ya`,
          character: "/assets/wanita.png",
          bg: "/assets/familyroom.jpg",
          pertanyaan: ["Kenapa cuman teh", "Terimaksih, aku suka kok", "Ini teh atau kehidupan sih. PAHIT BANGET"],
          })
        break; // Menghentikan looping setelah ditemukan kata yang sesuai
    }
   else if (!populer && firstCheckerWord == undefined) {
      answer.style.display = "none"
      buttonNext.style.display = "inline"
      // Cek apakah kata ditemukan
      dialogData.push({
        dialog: `Baru dengar saya, itu pasti kurang dibutuhkan perusahan`,
        character: "/assets/ayah.png",
        bg: "/assets/familyroom.jpg",
      })
       dialogData.push({
        dialog: `Tetapi tidak apa-apa, kamu harus kembangin skill kamu yang lainnya ya`,
        character: "/assets/ayah.png",
        bg: "/assets/familyroom.jpg",
      })
      dialogData.push({
        dialog: `Nak, tolong buatkan teh untuk ${name}`,
        character: "/assets/ayah.png",
        bg: "/assets/familyroom.jpg",
      })
      dialogData.push({
        dialog: `Iya Ayah ini lagi dibuat`,
        character: "/assets/wanita.png",
        bg: "/assets/kitchen.jpg",
        })
        dialogData.push({
          dialog: `"Ting.. Ting.. Ting.." (Menagaduk Teh)`,
          character: "/assets/wanita.png",
          bg: "/assets/kitchen.jpg",
          })
        dialogData.push({
          dialog: `Selesai`,
          character: "/assets/wanita.png",
          bg: "/assets/kitchen.jpg",
          })
        dialogData.push({
          dialog: `ini Tehnya`,
          character: "/assets/wanita.png",
          bg: "/assets/familyroom.jpg",
          })
        dialogData.push({
          dialog: `Silahkan diminum ${name}`,
          character: "/assets/ayah.png",
          bg: "/assets/familyroom.jpg",
          })
        dialogData.push({
          dialog: `Semoga kamu suka ya`,
          character: "/assets/wanita.png",
          bg: "/assets/familyroom.jpg",
          pertanyaan: ["Kenapa cuman teh", "Terimaksih, aku suka kok", "Ini teh atau kehidupan sih. PAHIT BANGET"],
        })
      break; // Menghentikan looping setelah ditemukan kata yang sesuai
    }
  }
  i++
  dialogDua()
});
})

let users = [];
let i = -1;
let speeder = 40;
let dialogData = [];
let dialog = new Typed("#typed", {
  strings: [
    "Selamat datang kami akan membawa kamu ke dunia dimana kamu akan bertemu calon mertua",
  ],
  typeSpeed: 50,
  onComplete: function () {},
});

function gameOver(detik){
  setTimeout(function(){
    const main = document.querySelector("main");
   main.innerHTML = `<div class="wrapper-nt">
   <img class="nt-on" src="/assets/nt.png" alt="">
  </div>`;
    main.style.background = "#333"
    main.style.display ="flex"
    main.style.justifyContent ="center"
    main.style.alignContent ="center"
  }, detik)
} 

function dialogDua() {
  dialog.reset();
  dialog.strings = [dialogData[i].dialog];
  imgCharacter.setAttribute("src", dialogData[i].character);
  imgLatar.setAttribute("src", dialogData[i].bg);
  buttonNext.style.display = "inline";
  if (dialogData[i].hasOwnProperty("pertanyaan")) {
    listQuestion[0].innerText = "A. " + dialogData[i].pertanyaan[0];
    listQuestion[1].innerText = "B. " + dialogData[i].pertanyaan[1];
    listQuestion[2].innerText = "C. " + dialogData[i].pertanyaan[2];
    question.style.display = "flex";
    buttonNext.style.display = "none";
    question.style.animation = "transparan 1.5s ease-in";
  } else {
    question.style.display = "none";
  }

  if (i == 5) {
    bgm.src = "/assets/familyRoom.mp3";
    bgm.load();
  } else if(i == 8){
    buttonNext.style.display = "none"
  }

  // Mengubah nama charcter di Dialog
  if(dialogData[i].character == "/assets/wanita.png"){
    characterName.innerText = character[0];
  } else if(dialogData[i].character == "/assets/ayah.png") {
    characterName.innerText = character[1];
  } else if(dialogData[i].character == ""){
    characterName.innerHTML ="";
  }

  // Mengubah Tema 
  if(dialogData[i].bg == ""){
    document.querySelector(".latar").style.background = "#fff"
  } else{
    document.querySelector(".latar").style.background = "none"
  }

  // memunculkan object
  if(i == 14){
    // TeH
    document.querySelector('.object')
    .src = "/assets/tea.png";
    document.querySelector('.wrapper-object')
    .style.display = "flex";
    audioObject.play();
  } else if (i == 15){
    document.querySelector('.wrapper-object')
    .style.display = "none";
  }


}

// List Pertanyaan sound klik
listQuestion[0].addEventListener("click", function () {
  audioClick.play();
});
listQuestion[1].addEventListener("click", function () {
  audioClick.play();
});
listQuestion[2].addEventListener("click", function () {
  audioClick.play();
});

// Menjawab Pertanyaan 
question.addEventListener("click", function (e) {
  buttonNext.style.display = "none"
  if (
    e.target.textContent == "A. " + dialogData[i].pertanyaan[0] ||
    e.target.textContent == "B. " + dialogData[i].pertanyaan[1] ||
    e.target.textContent == "C. " + dialogData[i].pertanyaan[2]
  ) {
    const name = inputName.value;
    const gender = inputGender.value;
    const old = inputOld.value;
    const jawaban = e.target.textContent;
    console.log(jawaban)
    addUser(name, gender, old, jawaban);
    users.forEach((user) => {
      const { name, gender, old, jawaban } = user;
      if(jawaban == "A. Mager"){
        dialogData.push({
          dialog: `Ga sopan kali kamu`,
          character: "/assets/ayah.png",
          bg: "/assets/familyroom.jpg",
        });
        gameOver(1750);
      } else if (jawaban == "B. Ga Ada kendaraan" 
      || jawaban == "C. Belum dapat waktu yang pas"){
        dialogData.push({
          dialog: `Alasan saja, kamu kegiatannya apa sekarang?`,
          character: "/assets/ayah.png",
          bg: "/assets/familyroom.jpg",
          pertanyaan: ["Kuliah", "Kerja", "Pengagguran"],
        });
        buttonNext.style.display = "none"
      } 
      
      if (jawaban == "A. Kuliah") {
        console.log(jawaban)
        answer.style.display = "flex"
        dialogData.push({
          dialog: `Kamu jurusan apa memangnya?`,
          character: "/assets/ayah.png",
          bg: "/assets/familyroom.jpg",
        });
      } else if (jawaban == "B. Kerja") {
        dialogData.push({
          dialog: `Bekerja dimana?`,
          character: "/assets/ayah.png",
          bg: "/assets/familyroom.jpg",
        });
      } else if (jawaban == "C. Pengagguran") {
        dialogData.push({
          dialog: `Mending Kamu cari kegiatan dulu`,
          character: "/assets/ayah.png",
          bg: "/assets/familyroom.jpg",
        });
        gameOver(2500)
      }

      if(jawaban == "A. Kenapa cuman teh"){
        dialogData.push({
          dialog: `Kamu ga tau tata keramah ya. Mending kamu pergi sana. JAUHI ANAK SAYA`,
          character: "/assets/ayah.png",
          bg: "/assets/familyroom.jpg",
        });
        gameOver(2500);
      }
     else if(jawaban == "B. Terimaksih, aku suka kok"){
        dialogData.push({
          dialog: `Aku senang kamu suka`,
          character: "/assets/wanita.png",
          bg: "/assets/familyroom.jpg",
        });
        dialogData.push({
          dialog: `Ibu kemana?`,
          character: "/assets/ayah.png",
          bg: "/assets/familyroom.jpg",
        });
        dialogData.push({
          dialog: `Ibu kepasar yah, karena tau ${name}
          mau datang kerumah jadinya ibu belanja bahan masakan untuk makan malam kita`,
          character: "/assets/wanita.png",
          bg: "/assets/familyroom.jpg",
        });
        dialogData.push({
          dialog: `Nantinya aku akan bantu ibu untuk masak`,
          character: "/assets/wanita.png",
          bg: "/assets/familyroom.jpg",
        });
        dialogData.push({
          dialog: `Ayah nanti lagi ya tanya tanya ${name}nya. Aku mau ajak dia ke taman kita`,
          character: "/assets/wanita.png",
          bg: "/assets/familyroom.jpg",
        });
        dialogData.push({
          dialog: `Iya oke, nanti kalau ibu udah pulang, balik kerumah lagi yaa`,
          character: "/assets/ayah.png",
          bg: "/assets/familyroom.jpg",
        });
        dialogData.push({
          dialog: `Okee... Ayah. Yuk.. ${name}`,
          character: "/assets/wanita.png",
          bg: "/assets/familyroom.jpg",
        });
        dialogData.push({
          dialog: `Menuju ketaman`,
          character: "",
          bg: "",
        });
        dialogData.push({
          dialog: `Sampai Di taman`,
          character: "",
          bg: "/assets/taman.jpg",
        });
        dialogData.push({
          dialog: `Maaf ya ${name} ayah banyak tanya`,
          character: "/assets/wanita.png",
          bg: "/assets/taman.jpg",
        });
        dialogData.push({
          dialog: `Aku senang akhirnya dua orang laki-laki yang aku sayang dapat saling mengenal`,
          character: "/assets/wanita.png",
          bg: "/assets/taman.jpg",
        });
      }
      i++;
      dialogDua();
    });
    console.log(jawaban);
  }
});

// Next
buttonNext.addEventListener("click", function () {
  i++;
  dialogDua();
  audioClick.play();
});

buttonSpeed.addEventListener("click", function () {
  audioClick.play();
  if (buttonSpeed.textContent === "Speed") {
    dialog.typeSpeed = 10;
    buttonSpeed.innerText = "Normal speed";
  } else if (buttonSpeed.textContent == "Normal speed") {
    dialog.typeSpeed = 50;
    buttonSpeed.innerText = "Speed";
  }
});

formUser.style.display = "flex";
buttonNext.style.display = "none";

function saveData() {
  sessionStorage.setItem(USER_KEY, JSON.stringify(users));
}

// Submit User Awal Permainan
formUser.addEventListener("submit", (e) => {
  e.preventDefault();
  audioClick.play();
  const name = inputName.value;
  const gender = inputGender.value;
  const old = inputOld.value;
  console.log(users);
  // Ketika Gender tidak bernilai Pria atau Wanita
  if (gender.toLowerCase() !== "wanita" && gender.toLowerCase() !== "pria") {
    alert("Harus diisi Pria atau Wanita");
    console.log(gender);
  }
  // Ketika Gender bernilai Pria
  else if (gender.toLowerCase() === "pria") {
    console.log("pria");
    i++;
    bgm.src = "/assets/musikPertemuan.mp3";
    bgm.load();
    addUser(name, gender, old);
    users.forEach((user) => {
      const { name, gender, old } = user;
      dialogData.push({
        dialog: `Selamat Datang ${name}`,
        character: "/assets/wanita.png",
        bg: "/assets/house.jpg",
      });
      dialogData.push({
        dialog: `Aku senang kamu datang ke rumah aku ${name}`,
        character: "/assets/wanita.png",
        bg: "/assets/house.jpg",
      });
      dialogData.push({
        dialog: `${name}, Ayah ingin sekali berjumpa`,
        character: "/assets/wanita.png",
        bg: "/assets/house.jpg",
      });
      dialogData.push({
        dialog: `Ayo Masuk`,
        character: "/assets/wanita.png",
        bg: "/assets/house.jpg",
      });
      dialogData.push({
        dialog: `Ayah ini ${name}`,
        character: "/assets/wanita.png",
        bg: "/assets/house.jpg",
      });
      dialogData.push({
        dialog: `Silahkan Masuk`,
        character: "/assets/ayah.png",
        bg: "/assets/familyroom.jpg",
      });
      dialogData.push({
        dialog: `Kenapa baru sekarang ke rumah`,
        character: "/assets/ayah.png",
        bg: "/assets/familyroom.jpg",
        pertanyaan: ["Mager", "Ga Ada kendaraan", "Belum dapat waktu yang pas"],
      });
      
      dialogDua(name);
      imgCharacter.setAttribute("src", dialogData[i].character);
      formUser.style.display = "none";
    });
  } else if (gender.toLowerCase() === "wanita") {
    alert("Belum tersedia, Mohon isi gender dengan Pria");
  }
  logoWrapper.style.display = "none"
  imgLatar.style.filter = "blur(0)";
});

function addUser(name, gender, old, jawaban) {
  old = parseInt(old);
  const user = {
    id: +new Date(),
    name,
    gender,
    old,
    jawaban,
  };

  if (user.length == 0) {
    users.push(user);
  } else {
    users = [];
    users.push(user);
  }
  saveData();
}

document.addEventListener("DOMContentLoaded", function () {
  const storedUsers = sessionStorage.getItem(USER_KEY);
  if (storedUsers) {
    users = JSON.parse(storedUsers);
  }
});

bgm.src = "/assets/musikAwal.mp3";
bgm.load();
