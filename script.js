document.getElementById('searchInput').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const definitionText = document.getElementById('definitionText');

  // Menyemak sama ada carian adalah 'hemoglobin'
  if (searchTerm === 'hemoglobin') {
    definitionText.textContent = 'Hemoglobin: Protein dalam sel darah merah yang membawa oksigen.';
  } else if (searchTerm === '') {
    // Apabila input kosong
    definitionText.textContent = 'Sila pilih atau cari istilah untuk melihat makna.';
    searchTerms();  // Panggil fungsi searchTerms apabila input kosong
  } else {
    // Apabila tiada definisi dijumpai
    definitionText.textContent = 'Tiada definisi dijumpai untuk istilah ini.';
  }
});

// Fungsi untuk menapis senarai istilah berdasarkan input carian
function searchTerms() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.querySelector('.card ul');
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

let selectedRating = 0;

// Fungsi untuk menandakan rating berdasarkan klik pada bintang
function rate(star) {
  selectedRating = star;
  const stars = document.querySelectorAll('.star');
  stars.forEach((s, index) => {
    s.classList.toggle('selected', index < star);
  });
}

// Fungsi untuk menghantar maklum balas
function submitFeedback() {
  const comment = document.getElementById('commentBox').value;
  if (selectedRating === 0 || comment.trim() === "") {
    alert("Sila isi rating dan komen.");
    return;
  }

  const commentList = document.getElementById('commentList');
  const li = document.createElement('li');
  li.innerHTML = `⭐️ ${selectedRating} - ${comment}`;
  commentList.appendChild(li);

  // Reset
  document.getElementById('commentBox').value = "";
  selectedRating = 0;
  document.querySelectorAll('.star').forEach(star => star.classList.remove('selected'));
}
