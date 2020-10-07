const suwitJawaGame = () => {
	function getPilihanComputer() {
		const com = Math.random();
		if (com < 0.34) return "Gunting";
		if (com > 0.34 && com < 0.66) return "Kertas";
		return "Batu";
	}

	function getHasil(com, player) {
		if (player == com) return "SERI!";
		if (player == "Kertas") return com == "Batu" ? "MENANG!" : "KALAH!";
		if (player == "Gunting") return com == "Kertas" ? "MENANG!" : "KALAH!";
		if (player == "Batu") return com == "Gunting" ? "MENANG!" : "KALAH!";
	}

	function putar() {
		const imgKomputer = document.querySelector(".imgKomputer img");
		const gambar = ["Kertas", "Gunting", "Batu"];
		let i = 0;
		const waktuMulai = new Date().getTime();
		setInterval(function () {
			if (new Date().getTime() - waktuMulai > 1000) {
				clearInterval;
				return;
			}
			imgKomputer.setAttribute("src", "../App/img/" + gambar[i++] + ".png");
			if (i == gambar.length) i = 0;
		}, 100);
	}

	const overlay = document.querySelector(".overlay");
	const start = document.querySelector(".overlay p.start");
	start.addEventListener("click", function () {
		overlay.classList.add("on");
		setTimerGame();
		h1.textContent = "";
		skor1.textContent = 0;
		skor2.textContent = 0;
	});

	const pilihan = document.querySelectorAll(".left img");
	const skor1 = document.querySelector(".skor h3.player");
	const skor2 = document.querySelector(".skor h3.com");
	let skorPlayer = 0;
	let skorCom = 0;
	let hasil;

	function papanSkor() {
		if (hasil == "MENANG!") {
			skorPlayer++;
			skor1.textContent = skorPlayer;
		} else if (hasil == "KALAH!") {
			skorCom++;
			skor2.textContent = skorCom;
		}
	}

	function setTimerGame() {
		const detik = document.getElementById("detik");
		const countDown = setInterval(() => {
			detik.textContent--;
			if (detik.textContent == "0") {
				cekWinLose();
				detik.textContent = "10";
				overlay.classList.remove("on");
				clearInterval(countDown);
			}
		}, 1000);
	}

	let h1 = document.getElementById("hasil-akhir");
	function cekWinLose() {
		let hasil;
		if (skor1.textContent > skor2.textContent) hasil = "YEE KAMU MENANG!";
		else if (skor1.textContent < skor2.textContent) hasil = "KAMU KALAH :( COBA LAGI YAA";
		else {
			hasil = "KALI INI SERI!";
		}
		h1.textContent = hasil;
	}

	pilihan.forEach(function (i) {
		i.addEventListener("click", function () {
			const pilihanComputer = getPilihanComputer();
			const pilihanPlayer = i.className;
			hasil = getHasil(pilihanComputer, pilihanPlayer);

			putar();
			const imgComputer = document.querySelector(".imgKomputer img");
			setTimeout(function () {
				imgComputer.setAttribute("src", "../App/img/" + pilihanComputer + ".png");
				const info = document.querySelector(".center p");
				info.innerHTML = hasil;
				if (hasil == "SERI!") info.style.color = "yellow";
				else if (hasil == "MENANG!") info.style.color = "green";
				else {
					info.style.color = "red";
				}
				papanSkor();
			}, 1000);
		});
	});
};

export default suwitJawaGame;
