// Feature Functions
function startOnboarding() {
  document.getElementById("onboardingOutput").innerText = 
    "👋 Welcome artisan! Please tell us your name and craft type (voice input mock).";
}
function generatePromo() {
  document.getElementById("promoOutput").innerText = 
    "✨ Promo Idea: 'Discover handmade pottery from Jaipur! Support local artisans and bring heritage home.' #CraftConnect #Handmade";
}
function directConnect() {
  document.getElementById("connectionOutput").innerText = 
    "✅ Buyer directly connected to artisan via WhatsApp (mock demo).";
}
function platformAssist() {
  document.getElementById("connectionOutput").innerText = 
    "📦 Order placed through CraftConnect platform (mock order tracking enabled).";
}
function influencerSale() {
  document.getElementById("connectionOutput").innerText = 
    "📣 Product promoted via YouTuber/Influencer channel (affiliate link generated).";
}
function findArtisans() {
  const loc = document.getElementById("locationInput").value;
  if(!loc) {
    document.getElementById("locationOutput").innerText = "⚠ Please enter a location.";
    return;
  }
  document.getElementById("locationOutput").innerText = 
    "🗺 Artisans found in " + loc + ":\n- Pottery makers\n- Handloom weavers\n- Jewelry craftsmen";
}

// Login Modal
function showLogin() {
  document.getElementById("loginModal").style.display = "block";
}
function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}
window.onclick = function(event) {
  if (event.target == document.getElementById("loginModal")) {
    closeLogin();
  }
}
