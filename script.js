// Sample questions data
const questions = [

    // New PBM Questions
    {
        type: "PBM",
        question: "Kalimat di atas tidak logis karena…",
        teks: "Setelah minum obat, sakit kepala Andi justru semakin lapar.",
        options: ["Sakit kepala tidak bisa lapar", "Obat tidak boleh diminum Andi", "Obat selalu menyembuhkan", "Obat harus diminum saat lapar"],
        answer: 0,
        explanation: "\"Yang lapar\" harusnya subjek manusia (Andi), bukan \"sakit kepala\". Kalimat ini tidak logis karena struktur subjek dan predikat tidak selaras secara makna."
    },
    {
        type: "PBM",
        question: "Manakah pasangan kata yang memiliki hubungan makna paling erat?",
        teks: "",
        options: ["Hujan – Basah", "Buku – Kayu", "Lem – Air", "Bola – Topi"],
        answer: 0,
        explanation: "Hujan menyebabkan basah, hubungan sebab-akibat yang kuat. Pilihan lain tidak punya asosiasi langsung."
    },
    {
        type: "PBM",
        question: "Manakah kata yang merupakan hiponim dari kata \"minuman\"?",
        teks: "",
        options: ["Susu", "Roti", "Piring", "Dapur"],
        answer: 0,
        explanation: "Susu adalah jenis dari minuman. Jadi susu adalah hiponim dari kata \"minuman\"."
    },
    {
        type: "PBM",
        question: "Sinonim dari kata \"ramah\" adalah…",
        teks: "Ia selalu bersikap ramah kepada siapa pun yang ia temui.",
        options: ["Kasar", "Baik hati", "Lugu", "Sombong"],
        answer: 1,
        explanation: "\"Ramah\" memiliki arti dekat dengan \"baik hati\" dalam konteks sosial. Kasar dan sombong adalah lawan katanya."
    },
    {
        type: "PBM",
        question: "Hubungan yang paling tepat antara kalimat (1) dan (2) adalah…",
        teks: "(1) Harga cabai naik drastis di pasaran.\n(2) Banyak petani cabai gagal panen akibat cuaca buruk.\n(3) Pemerintah mengimpor cabai dari luar negeri.\n(4) Pedagang memanfaatkan kenaikan harga untuk meraih untung besar.",
        options: ["Sebab – Akibat", "Perbandingan", "Tujuan", "Penegasan"],
        answer: 0,
        explanation: "Kalimat (2) menjelaskan sebab dari kalimat (1): harga naik karena petani gagal panen."
    },
    {
        type: "PBM",
        question: "Gaya bahasa pada kalimat di atas adalah…",
        teks: "Ia menangis seperti langit runtuh karena gagal masuk kampus impiannya.",
        options: ["Metafora", "Personifikasi", "Simile (perumpamaan)", "Hiperbola"],
        answer: 2,
        explanation: "Ada kata \"seperti\" yang menjadi ciri khas gaya bahasa simile atau perumpamaan."
    },
    {
        type: "PBM",
        question: "Susunan kalimat yang tepat agar menjadi paragraf yang padu adalah…",
        teks: "Kalimat Acak:\n\n1. Kegiatan membaca bisa meningkatkan wawasan.\n2. Banyak orang belum menjadikan membaca sebagai kebiasaan.\n3. Padahal membaca adalah kunci kesuksesan.\n4. Oleh karena itu, penting membudayakan gemar membaca sejak dini.",
        options: ["2 - 1 - 3 - 4", "1 - 2 - 4 - 3", "2 - 3 - 1 - 4", "3 - 2 - 1 - 4"],
        answer: 0,
        explanation: "Mulai dari masalah (2), lalu penjelasan manfaat (1), ditegaskan (3), ditutup dengan solusi (4)."
    },
    {
        type: "PBM",
        question: "Manakah pasangan kata yang memiliki imbuhan dengan makna sejenis?",
        teks: "",
        options: ["Penari – Penjaga", "Pelukis – Pemotong", "Pekerja – Pembersih", "Petani – Penjahit"],
        answer: 3,
        explanation: "Kata \"petani\" dan \"penjahit\" menggunakan imbuhan pe- yang bermakna pelaku suatu pekerjaan atau profesi."
    },
    {
        type: "PBM",
        question: "Perbaikan kalimat agar memiliki frasa sejajar adalah…",
        teks: "Ia suka bermain gitar, menyanyi, dan fotografi.",
        options: ["Bermain gitar, menyanyi, dan fotografi.", "Bermain gitar, menyanyi, dan mengambil foto.", "Gitar, menyanyi, dan fotografi.", "Bermain gitar, menyanyi, dan berfoto."],
        answer: 1,
        explanation: "Semua frasa harus berupa bentuk verbal (kata kerja). \"Fotografi\" adalah nomina, perlu disetarakan dengan \"mengambil foto\"."
    },
    {
        type: "PBM",
        question: "Manakah yang merupakan pasangan kata tetap (kolokasi)?",
        teks: "",
        options: ["Kopi – Pisang", "Teh – Roti", "Asam – Garam", "Makan – Minum"],
        answer: 2,
        explanation: "\"Asam dan garam\" adalah pasangan kata tetap yang sering digunakan dalam ungkapan, misalnya \"sudah asam garam kehidupan\"."
    },
    {
        type: "PBM",
        question: "Apa yang membuat kalimat di atas tidak logis?",
        teks: "Rina meminum makanan kesukaannya setiap pagi sebelum berangkat sekolah.",
        options: ["Rina suka makanan", "Makanan bisa diminum", "Meminum makanan tidak logis", "Pagi bukan waktu makan"],
        answer: 2,
        explanation: "Kata \"meminum makanan\" tidak logis karena makanan biasanya dikunyah, bukan diminum."
    },
    {
        type: "PBM",
        question: "Pilih pasangan kata yang memiliki asosiasi makna paling erat.",
        teks: "",
        options: ["Kunci – Gembok", "Meja – Pensil", "Payung – Sepatu", "Lemari – Lantai"],
        answer: 0,
        explanation: "Kunci dan gembok saling terkait dalam fungsi membuka/menutup sesuatu."
    },
    {
        type: "PBM",
        question: "Manakah yang merupakan hiponim dari kata \"kendaraan\"?",
        teks: "",
        options: ["Mobil", "Jalan", "Terminal", "Mesin"],
        answer: 0,
        explanation: "Mobil adalah jenis dari kendaraan, jadi termasuk hiponim."
    },
    {
        type: "PBM",
        question: "Apa sinonim dari kata \"sengit\"?",
        teks: "Perdebatan itu berlangsung cukup sengit.",
        options: ["Biasa", "Keras", "Lemah", "Lembut"],
        answer: 1,
        explanation: "\"Sengit\" berarti keras atau penuh emosi."
    },
    {
        type: "PBM",
        question: "Hubungan logis antar kalimat tersebut adalah…",
        teks: "Kalimat 1: Diah belajar dengan giat.\nKalimat 2: Ia ingin lolos SNBT.",
        options: ["Sebab-akibat", "Perbandingan", "Penjelasan", "Pertentangan"],
        answer: 0,
        explanation: "Kalimat 1 (belajar giat) terjadi karena ingin lolos SNBT (tujuan/akibat)."
    },
    {
        type: "PBM",
        question: "Kalimat tersebut menggunakan gaya bahasa…",
        teks: "Ia menari dengan indah, seperti daun yang melayang ditiup angin.",
        options: ["Metafora", "Hiperbola", "Simile", "Ironi"],
        answer: 2,
        explanation: "Menggunakan kata \"seperti\", jadi ini adalah simile (perumpamaan eksplisit)."
    },
    {
        type: "PBM",
        question: "Susunan paragraf yang tepat adalah…",
        teks: "Kalimat Acak:\n\n1. Banyak siswa merasa gugup menghadapi UTBK.\n2. Salah satu caranya adalah dengan banyak berlatih soal.\n3. Oleh karena itu, persiapan harus dilakukan sejak jauh hari.\n4. Latihan membantu meningkatkan kepercayaan diri.",
        options: ["1 - 3 - 2 - 4", "1 - 2 - 3 - 4", "1 - 2 - 4 - 3", "2 - 4 - 3 - 1"],
        answer: 0,
        explanation: "1 sebagai pembuka masalah, 3 sebagai solusi umum, 2 & 4 mendukung solusi."
    },
    {
        type: "PBM",
        question: "Manakah pasangan kata yang memiliki makna imbuhan yang sama?",
        teks: "",
        options: ["Terbang – Terbakar", "Mencuci – Memasak", "Berkata – Berpikir", "Penulis – Pembeli"],
        answer: 3,
        explanation: "Kata \"penulis\" dan \"pembeli\" sama-sama menggunakan awalan \"pe-\" dan akhiran \"-an\" sebagai pelaku."
    },
    {
        type: "PBM",
        question: "Frasa mana yang tidak sejajar?",
        teks: "Anita suka menari, menyanyi, dan bermain musik.",
        options: ["Menari", "Menyanyi", "Bermain musik", "Semua sejajar"],
        answer: 2,
        explanation: "Kata \"bermain musik\" adalah frasa berbeda bentuk. Seharusnya \"memainkan musik\" agar paralel dengan \"menari\" dan \"menyanyi\"."
    },
    {
        type: "PBM",
        question: "Manakah pasangan kata yang benar dan umum digunakan?",
        teks: "",
        options: ["Tua-muda", "Pagi-malam", "Atas-bawah", "Maju-kejar"],
        answer: 2,
        explanation: "\"Atas-bawah\" adalah pasangan kata tetap yang lazim digunakan. \"Maju-kejar\" tidak umum dan tidak setara."
    },

    // New PPU Questions
    {
        type: "PPU",
        question: "Pendidikan karakter penting diterapkan sejak dini, … anak terbiasa bersikap jujur dan disiplin.",
        teks: "",
        options: ["karena", "meskipun", "agar", "walaupun"],
        answer: 2,
        explanation: "Konjungsi \"agar\" menunjukkan tujuan. Kalimat menjadi: \"Pendidikan karakter penting diterapkan sejak dini, agar anak terbiasa bersikap jujur dan disiplin.\""
    },
    {
        type: "PPU",
        question: "Manakah penulisan yang sesuai dengan ejaan yang disempurnakan (EYD)?",
        teks: "",
        options: ["aktifitas", "kreatifitas", "aktivitas", "kwalitas"],
        answer: 2,
        explanation: "Penulisan baku adalah \"aktivitas\". Kata lain seperti \"kreatifitas\" dan \"kwalitas\" adalah bentuk tidak baku."
    },
    {
        type: "PPU",
        question: "Sinonim dari kata \"prioritas\" adalah…",
        teks: "",
        options: ["Cadangan", "Utama", "Kedua", "Tambahan"],
        answer: 1,
        explanation: "Prioritas = sesuatu yang diutamakan atau didahulukan."
    },
    {
        type: "PPU",
        question: "Kalimat inti dari kalimat di atas adalah…",
        teks: "Para siswa baru dengan semangat tinggi mengikuti kegiatan orientasi di aula sekolah.",
        options: ["Para siswa baru mengikuti kegiatan orientasi.", "Para siswa mengikuti kegiatan orientasi.", "Siswa mengikuti kegiatan.", "Siswa mengikuti orientasi."],
        answer: 3,
        explanation: "Kalimat inti hanya terdiri dari subjek dan predikat + objek. Kata keterangan dan tambahan deskriptif dihilangkan."
    },
    {
        type: "PPU",
        question: "Kalimat gabungan yang tepat dari ketiga kalimat di atas adalah…",
        teks: "(1) Ia rajin belajar.\n(2) Ia tidak pernah menyontek.\n(3) Ia mendapat beasiswa.",
        options: ["Karena rajin belajar dan tidak pernah menyontek, ia mendapat beasiswa.", "Ia mendapat beasiswa, karena tidak pernah menyontek dan belajar.", "Ia tidak menyontek, tetapi ia mendapat beasiswa.", "Rajin belajar, menyontek tidak, ia beasiswa dapat."],
        answer: 0,
        explanation: "Hubungan sebab-akibat terlihat jelas, dan penggunaan konjungsi \"karena\" tepat untuk menggabungkan dua sebab dan satu akibat."
    },
    {
        type: "PPU",
        question: "Perbaikan tanda baca yang benar adalah…",
        teks: "Budi membawa tas, sepatu, buku dan penghapus.",
        options: ["Budi membawa: tas sepatu buku, dan penghapus.", "Budi membawa tas, sepatu, buku, dan penghapus.", "Budi membawa tas, sepatu, buku dan, penghapus.", "Budi membawa tas sepatu, buku dan penghapus."],
        answer: 1,
        explanation: "Penggunaan koma yang benar untuk daftar adalah menggunakan koma sebelum kata \"dan\" (Oxford comma dalam konteks daftar panjang)."
    },
    {
        type: "PPU",
        question: "Kata yang dapat dihilangkan tanpa mengubah makna kalimat adalah…",
        teks: "Ia membaca buku novel selama dua jam di kamar tidurnya sendiri.",
        options: ["Membaca", "Buku", "Sendiri", "Dua jam"],
        answer: 1,
        explanation: "\"Buku novel\" adalah frasa tidak efisien karena \"novel\" sudah termasuk jenis buku. Kata \"buku\" dapat dihilangkan."
    },
    {
        type: "PPU",
        question: "Bencana banjir tahun ini lebih parah daripada tahun lalu … curah hujan yang sangat tinggi.",
        teks: "",
        options: ["karena", "walaupun", "agar", "meskipun"],
        answer: 0,
        explanation: "Konjungsi \"karena\" menunjukkan hubungan sebab-akibat yang tepat antara dua peristiwa."
    },
    {
        type: "PPU",
        question: "Manakah kata berikut yang merupakan bentuk tidak baku?",
        teks: "",
        options: ["Risiko", "Ijazah", "Analisa", "Atmosfer"],
        answer: 2,
        explanation: "\"Analisa\" adalah bentuk tidak baku. Bentuk bakunya adalah \"analisis\"."
    },
    {
        type: "PPU",
        question: "Ia tetap berangkat sekolah … hujan deras mengguyur sejak pagi.",
        teks: "",
        options: ["karena", "meskipun", "agar", "jika"],
        answer: 1,
        explanation: "\"Meskipun\" digunakan untuk menunjukkan kontras antara dua hal. Kalimat menjadi: \"Ia tetap berangkat sekolah meskipun hujan deras mengguyur sejak pagi.\""
    },
    {
        type: "PPU",
        question: "Anak-anak sebaiknya diajarkan menjaga kebersihan sejak kecil, … menjadi kebiasaan yang terbawa hingga dewasa.",
        teks: "",
        options: ["supaya", "karena", "walaupun", "tetapi"],
        answer: 0,
        explanation: "\"Supaya\" menunjukkan tujuan. Kalimat menjadi: \"Anak-anak sebaiknya diajarkan menjaga kebersihan sejak kecil, supaya menjadi kebiasaan yang terbawa hingga dewasa.\""
    },
    {
        type: "PPU",
        question: "Manakah penulisan kata yang salah menurut EYD?",
        teks: "",
        options: ["Apotek", "Kualitas", "Karir", "Aktivitas"],
        answer: 2,
        explanation: "Penulisan baku adalah \"karier\", bukan \"karir\". Ini sering jadi jebakan!"
    },
    {
        type: "PPU",
        question: "Sinonim kata \"menganalisis\" adalah…",
        teks: "",
        options: ["Menentukan", "Meneliti", "Menyimpulkan", "Menyalurkan"],
        answer: 1,
        explanation: "\"Menganalisis\" = meneliti secara cermat dan terperinci. Kata lain seperti \"menentukan\" atau \"menyimpulkan\" punya konteks berbeda."
    },
    {
        type: "PPU",
        question: "Kalimat inti dari kalimat tersebut adalah…",
        teks: "Dengan penuh semangat dan tanpa rasa lelah, para relawan menolong korban bencana.",
        options: ["Para relawan menolong korban bencana.", "Para relawan penuh semangat menolong korban.", "Relawan menolong korban dengan semangat.", "Relawan menolong bencana."],
        answer: 0,
        explanation: "Kalimat inti = Subjek + Predikat + Objek. Keterangan bisa dihilangkan."
    },
    {
        type: "PPU",
        question: "Kalimat gabungan yang tepat adalah…",
        teks: "(1) Kakak sedang belajar.\n(2) Adik menonton televisi.\n(3) Ayah membaca koran.",
        options: ["Kakak sedang belajar, tetapi ayah membaca koran dan adik menonton televisi.", "Kakak belajar, adik menonton, dan ayah membaca koran.", "Kakak sedang belajar; adik menonton televisi dan ayah membaca koran.", "Kakak sedang belajar, adik menonton televisi, dan ayah membaca koran."],
        answer: 3,
        explanation: "Kalimat majemuk setara dengan struktur sejajar dan konjungsi yang jelas."
    },
    {
        type: "PPU",
        question: "Manakah pembetulan kalimat tersebut yang tepat?",
        teks: "Semua orang tua berharap anaknya menjadi: cerdas, mandiri, dan sukses.",
        options: ["... menjadi cerdas mandiri dan sukses.", "... menjadi, cerdas mandiri dan sukses.", "... menjadi: cerdas mandiri, dan sukses.", "... menjadi cerdas, mandiri, dan sukses."],
        answer: 3,
        explanation: "Tanda titik dua tidak tepat digunakan setelah \"menjadi\". Gunakan daftar dengan tanda koma."
    },
    {
        type: "PPU",
        question: "Kata yang dapat dihilangkan tanpa mengubah makna kalimat adalah…",
        teks: "Ia menaiki ke atas panggung dengan penuh percaya diri.",
        options: ["Ia", "Ke atas", "Menaiki", "Ke"],
        answer: 2,
        explanation: "Kata \"menaiki ke atas\" = redundan. Cukup \"naik ke atas panggung\"."
    },
    {
        type: "PPU",
        question: "Para siswa … membawa peralatan kebersihan untuk kerja bakti besok pagi.",
        teks: "",
        options: ["diminta", "meminta", "meminta-minta", "dimintai"],
        answer: 0,
        explanation: "Kata pasif yang tepat adalah \"diminta\"."
    },
    {
        type: "PPU",
        question: "Manakah di bawah ini yang merupakan kata tidak baku?",
        teks: "",
        options: ["Risiko", "Terampil", "Komplek", "Objektif"],
        answer: 2,
        explanation: "\"Komplek\" adalah bentuk tidak baku. Bentuk bakunya adalah \"kompleks\"."
    },
    {
        type: "PPU",
        question: "… kamu tidak mengerjakan tugas, kamu akan mendapatkan nilai rendah.",
        teks: "",
        options: ["Karena", "Supaya", "Jika", "Dan"],
        answer: 2,
        explanation: "Konjungsi syarat yang tepat untuk pernyataan sebab-akibat bersyarat adalah \"jika\"."
    }
];

// App state
let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let answeredQuestions = new Array(questions.length).fill(false);

// DOM elements
const questionTypeElement = document.getElementById('question-type');
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const explanationElement = document.getElementById('explanation');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const resetButton = document.getElementById('reset-button');
const resultsElement = document.getElementById('results');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');
const questionContainer = document.querySelector('.question-container');

// Initialize the app
function init() {
    displayQuestion();
    updateNavButtons();

    // Event listeners
    prevButton.addEventListener('click', goToPreviousQuestion);
    nextButton.addEventListener('click', goToNextQuestion);
    resetButton.addEventListener('click', resetQuiz);
    restartButton.addEventListener('click', resetQuiz);
}

// Display current question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Hide results if showing
    resultsElement.style.display = 'none';
    questionContainer.style.display = 'block';

    // Set question type and text
    questionTypeElement.textContent = currentQuestion.type;

    // Display teks if it exists and is not empty
    if (currentQuestion.teks && currentQuestion.teks.trim() !== "") {
        // Create or update teks element
        let teksElement = document.getElementById('question-teks');
        if (!teksElement) {
            teksElement = document.createElement('div');
            teksElement.id = 'question-teks';
            teksElement.className = 'question-teks';
            questionContainer.insertBefore(teksElement, questionTextElement);
        }

        // Set the text content with proper line breaks
        teksElement.innerHTML = currentQuestion.teks.replace(/\n/g, '<br>');
        teksElement.style.display = 'block';
    } else {
        // Hide teks element if it exists
        const teksElement = document.getElementById('question-teks');
        if (teksElement) {
            teksElement.style.display = 'none';
        }
    }

    // Set question text
    questionTextElement.textContent = currentQuestion.question;

    // Clear options container
    optionsContainer.innerHTML = '';

    // Create option elements
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';

        // Add option label (A, B, C, D)
        const optionLabel = document.createElement('span');
        optionLabel.className = 'option-label';
        optionLabel.textContent = String.fromCharCode(65 + index); // A, B, C, D

        // Add option text
        const optionText = document.createElement('span');
        optionText.textContent = option;

        // Append elements
        optionElement.appendChild(optionLabel);
        optionElement.appendChild(optionText);
        optionsContainer.appendChild(optionElement);

        // Add click event
        optionElement.addEventListener('click', () => selectOption(index));

        // If this question has been answered, show the correct/incorrect styling
        if (answeredQuestions[currentQuestionIndex]) {
            if (index === currentQuestion.answer) {
                optionElement.classList.add('correct');
            } else if (index === userAnswers[currentQuestionIndex]) {
                optionElement.classList.add('incorrect');
            }
        }
    });

    // Show explanation if question has been answered
    if (answeredQuestions[currentQuestionIndex]) {
        explanationElement.textContent = currentQuestion.explanation;
        explanationElement.style.display = 'block';
    } else {
        explanationElement.style.display = 'none';
    }
}

// Handle option selection
function selectOption(optionIndex) {
    // If already answered, do nothing
    if (answeredQuestions[currentQuestionIndex]) return;

    const currentQuestion = questions[currentQuestionIndex];

    // Record user's answer
    userAnswers[currentQuestionIndex] = optionIndex;
    answeredQuestions[currentQuestionIndex] = true;

    // Get all option elements
    const optionElements = optionsContainer.querySelectorAll('.option');

    // Mark correct and incorrect options
    optionElements.forEach((element, index) => {
        if (index === currentQuestion.answer) {
            element.classList.add('correct');
        } else if (index === optionIndex) {
            element.classList.add('incorrect');
        }
    });

    // Show explanation
    explanationElement.textContent = currentQuestion.explanation;
    explanationElement.style.display = 'block';

    // Update navigation buttons
    updateNavButtons();

    // Check if all questions have been answered
    if (answeredQuestions.every(answered => answered)) {
        // Show results after a short delay
        setTimeout(showResults, 1000);
    }
}

// Go to previous question
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateNavButtons();
    }
}

// Go to next question
function goToNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateNavButtons();
    } else if (answeredQuestions.every(answered => answered)) {
        showResults();
    }
}

// Update navigation buttons state
function updateNavButtons() {
    prevButton.disabled = currentQuestionIndex === 0;

    // Change next button text if all questions answered and on last question
    if (currentQuestionIndex === questions.length - 1 && answeredQuestions.every(answered => answered)) {
        nextButton.textContent = 'Lihat Hasil';
    } else {
        nextButton.textContent = 'Selanjutnya';
    }
}

// Show quiz results
function showResults() {
    // Calculate score
    const correctAnswers = userAnswers.filter((answer, index) =>
        answer === questions[index].answer
    ).length;

    // Update score display
    scoreElement.textContent = `${correctAnswers}/${questions.length}`;

    // Hide question container and show results
    questionContainer.style.display = 'none';
    resultsElement.style.display = 'block';
}

// Reset the quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    answeredQuestions = new Array(questions.length).fill(false);

    displayQuestion();
    updateNavButtons();

    // Hide results
    resultsElement.style.display = 'none';
    questionContainer.style.display = 'block';
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
