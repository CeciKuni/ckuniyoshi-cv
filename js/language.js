function changeLanguage(lang, src) {
  document.documentElement.lang = lang;
  language(lang, src);
}

function language(e, src) {
  fetch(src)
    .then((response) => response.json())
    .then((dict) => {
      const elements = document.querySelectorAll(`[id^="lg"]`);
      elements.forEach((element) => {

        element.textContent = dict[element.id];

      });
      const downloadButton = document.getElementById('lgDownloadButton');
      if (e === 'en') {
        downloadButton.href = './data/CV - Cecilia Kuniyoshi - EN - 2024.pdf';
      } else {
        downloadButton.href = './data/CV - Cecilia Kuniyoshi - 2024.pdf';
      }
    });
}


function changeModalLanguage(modalId) {
  const modal = document.querySelector(modalId);
  const selectedLanguage = document.documentElement.lang;
  
  // Obtiene solo los elementos dentro del modal que tienen IDs correspondientes en el JSON
  const modalElementsToUpdate = modal.querySelectorAll('[id^="lg"]');

  // Traduce los elementos dentro del modal
  language(selectedLanguage, `./json/${selectedLanguage}.json`, modalElementsToUpdate);
}

