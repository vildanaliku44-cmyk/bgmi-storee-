function showPayment(pack) {
  document.getElementById('selected-pack').innerText = "Selected Pack: " + pack;
  document.getElementById('payment-box').classList.remove('hidden');
}
