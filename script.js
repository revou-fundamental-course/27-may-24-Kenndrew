document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const formattedTime = currentDate.toLocaleTimeString('id-ID');
    
    document.getElementById('current-time').textContent = formattedDate + ' ' + formattedTime;

    const form = document.getElementById('messageForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah formulir dari pengiriman default

        // Ambil nilai dari formulir
        const name = document.getElementById('name').value;
        const tanggalLahir = document.getElementById('tanggal_lahir').value;
        const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
        const pesan = document.getElementById('message').value;

        // Tampilkan nilai yang diinput
        document.getElementById('nama-pengguna').textContent = name;
        document.getElementById('tanggal-lahir').textContent = tanggalLahir;
        document.getElementById('jenis-kelamin').textContent = jenisKelamin;
        document.getElementById('pesan-pengguna').textContent = pesan;
    });
});
