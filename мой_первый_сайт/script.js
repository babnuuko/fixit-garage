// Форма → Google Sheets (или email)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = this[0].value;
  const phone = this[1].value;
  const message = this[2].value;

  // Можно отправить на email или Google Apps Script
  alert(`תודה ${name}! נחזור אליך בקרוב לטלפון ${phone}`);
  
  this.reset();
});