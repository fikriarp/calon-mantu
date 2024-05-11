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
  answer = document.getElementById("answer"),
  characterName = document.getElementById("characterName"),
  buttonAnswer = document.getElementById("buttonAnswer"),
  answerInput = document.getElementById("answerInput"),
  listQuestion = document.querySelectorAll("li"),
  logoWrapper = document.querySelector(".wrapper-logo");

const USER_KEY = "users";

const character = ["Darling", "Om Papa"]; 

const jurusanKuliahPopuler = [
  "Teknik",
  "Informatika",
  "ilmu",
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
  "Hubungan"
];


let populer = false;

// Pertanyaan kuliah
buttonAnswer.addEventListener('click', function(){
  audioClick.play();
})

answer.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = answerInput.value;
  let words = input.split(" ");

  for (let i = 0; i <= words.length; i++) {
    let check = words[i];
    let firstCheckerWord = jurusanKuliahPopuler.find(
      (jurusan) => jurusan.toLowerCase() === check
    );
    console.log(firstCheckerWord);
    if (firstCheckerWord) {
      answer.style.display = "none"
      buttonNext.style.display = "inline"
      // Cek apakah kata ditemukan
      populer = true;
      dialogData.push({
        dialog: `Wah jurasan kamu sedang banyak dibutuhkan perusahaan`,
        character: "/assets/ayah.png",
        bg: "/assets/familyroom.jpg",
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
      break; // Menghentikan looping setelah ditemukan kata yang sesuai
    }
  }
  i++
  dialogDua()
});

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
  } else if(i == 10){
    buttonNext.style.display = "none"
  }

  // Mengubah nama charcter di Dialog
  if(i == 0){
    characterName.innerText = character[0]
  }
}

listQuestion[0].addEventListener("click", function () {
  audioClick.play();
});
listQuestion[1].addEventListener("click", function () {
  audioClick.play();
});
listQuestion[2].addEventListener("click", function () {
  audioClick.play();
});

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
    addUser(name, gender, old, jawaban);
    users.forEach((user) => {
      const { name, gender, old, jawaban } = user;
      if (jawaban) {
        dialogData.push({
          dialog: `Alasan saja, Emangnya kamu Kuliah atau Bekerja?`,
          character: "/assets/ayah.png",
          bg: "/assets/familyroom.jpg",
          pertanyaan: ["Kuliah", "Kerja", "Pengagguran"],
        });
        buttonNext.style.display = "none"
        i++;
        dialogDua();
      }
      if (jawaban == "A. Kuliah") {
        answer.style.display = "flex"
        dialogData.push({
          dialog: `Kamu jurusan apa memangnya?`,
          character: "/assets/ayah.png",
          bg: "/assets/familyroom.jpg",
        });
      } else if (jawaban == "B. Kerja") {
        dialogData.push({
          dialog: `kenapa ${name} tidak kuliah?`,
          character: "/assets/ayah.png",
          bg: "/assets/familyroom.jpg",
        });
      }

      i++;
      dialogDua();
    });
    console.log(jawaban);
  }
});

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


// Submit User
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
        pertanyaan: ["mager", "Ga Ada kendaran", "Belum dapat waktu yang pas"],
      });
      dialogData.push({
        dialog: `Alasan saja, Emangnya kamu Kuliah atau Bekerja?`,
        character: "/assets/ayah.png",
        bg: "/assets/familyroom.jpg",
        pertanyaan: ["Kuliah", "Kerja", "Pengagguran"],
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
