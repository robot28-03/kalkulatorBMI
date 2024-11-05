// Mendapatkan referensi ke elemen form dan hasil
const bmiForm = document.getElementById('bmiForm');
const resultDiv = document.getElementById('result');
const explanationDiv = document.getElementById('explanation');

// Menambahkan event listener untuk event submit pada form
bmiForm.addEventListener('submit', function(event) {
    // Mencegah pengiriman form secara default
    event.preventDefault();

    // Mengambil nilai dari input form
    const weight = parseFloat(document.getElementById('weight').value); // Berat dalam kg
    const height = parseFloat(document.getElementById('height').value); // Tinggi dalam m
    const gender = document.getElementById('gender').value; // Jenis kelamin

    // Memanggil fungsi untuk menghitung BMI
    const bmi = calculateBMI(weight, height);
    
    // Menampilkan hasil BMI dan penjelasan
    displayResult(bmi, gender);
});

// Fungsi untuk menghitung BMI
function calculateBMI(weight, height) {
    // Memastikan tinggi tidak nol untuk menghindari pembagian dengan nol
    if (height <= 0) {
        alert("Tinggi harus lebih dari 0!");
        return null;
    }
    return weight / (height * height); // Formula BMI: berat (kg) / (tinggi (m) * tinggi (m))
}

// Fungsi untuk menampilkan hasil dan penjelasan
function displayResult(bmi, gender) {
    // Memastikan nilai BMI valid sebelum melanjutkan
    if (bmi === null) return;

    let category = '';

    // Menentukan kategori BMI berdasarkan nilai BMI
    if (bmi < 18.5) {
        category = 'Kekurangan Berat Badan';
    } else if (bmi < 24.9) {
        category = 'Berat Badan Normal';
    } else if (bmi < 29.9) {
        category = 'Kelebihan Berat Badan';
    } else {
        category = 'Kegemukan (Obesitas)';
    }

    // Menampilkan hasil
    resultDiv.innerHTML = `BMI Anda: ${bmi.toFixed(2)} (${category}) untuk ${gender}.`;

    // Penjelasan tentang BMI
    explanationDiv.innerHTML = `BMI adalah ukuran yang digunakan untuk menilai berat badan relatif terhadap tinggi badan. 
    Kategori BMI membantu menentukan apakah seseorang memiliki berat badan yang sehat.`;
}