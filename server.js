const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', message: 'MSDMA fonctionne', version: '2.0' });
});

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MSDMA - Des services, des personnes, une seule app</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>body{font-family:'Inter',sans-serif} .bg-msdma-blue{background:#0B1E42} .bg-msdma-yellow{background:#FFC400} .text-msdma-yellow{color:#FFC400}</style>
</head>
<body class="bg-gray-50">
<!-- HEADER -->
<header class="bg-msdma-blue text-white p-4 sticky top-0 z-50">
  <div class="max-w-6xl mx-auto flex justify-between items-center">
    <div class="flex items-center gap-2 font-extrabold text-2xl"><span class="bg-white text-blue-900 w-8 h-8 flex items-center justify-center rounded-lg">M</span><span>MSD<span class="text-msdma-yellow">MA</span></span></div>
    <a href="/api/status" class="bg-msdma-yellow text-black px-4 py-2 rounded-full font-bold text-sm">API OK</a>
  </div>
</header>

<!-- HERO comme app 1 -->
<section class="bg-msdma-blue text-white px-6 pt-8 pb-20 rounded-b-[2.5rem]">
  <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">Des services,<br>des personnes,<br><span class="text-msdma-yellow">une seule application.</span></h1>
      <p class="mt-4 text-blue-200">Bonjour, Souleymane 👋 Quel service recherches-vous aujourd'hui ?</p>
      <div class="mt-6 bg-white rounded-full p-2 flex items-center gap-2"><span class="pl-3 text-gray-400">🔍</span><input class="flex-1 outline-none text-black text-sm" placeholder="Rechercher un service, une tâche..."><button class="bg-msdma-yellow px-6 py-2 rounded-full text-black font-bold text-sm">Publier une tâche</button></div>
    </div>
    <div class="hidden md:flex justify-center"><div class="bg-white text-black rounded-[2rem] p-4 w-[300px] shadow-2xl"><p class="font-bold text-sm">Besoin d'un service ?</p><p class="text-xs text-gray-500">Publiez votre tâche en quelques clics</p><button class="mt-3 bg-msdma-yellow w-full py-2 rounded-full font-bold text-sm">Publier une tâche</button><div class="mt-4 bg-blue-50 rounded-xl p-3 flex gap-2"><div class="w-10 h-10 bg-orange-200 rounded-lg"></div><div><p class="text-xs font-bold">Livraison de colis</p><p class="text-[10px]">Kaloum → Matoto - 50 000 GNF</p></div></div></div></div>
  </div>
</section>

<!-- SERVICES comme app 3 -->
<section class="max-w-6xl mx-auto px-6 -mt-10">
  <div class="bg-white rounded-[1.5rem] shadow-xl p-6 grid grid-cols-4 md:grid-cols-8 gap-4 text-center">
    <div><div class="w-12 h-12 bg-blue-50 rounded-full mx-auto flex items-center justify-center text-xl">📦</div><p class="text-[11px] font-bold mt-2">Livraison</p></div>
    <div><div class="w-12 h-12 bg-green-50 rounded-full mx-auto flex items-center justify-center text-xl">🛒</div><p class="text-[11px] font-bold mt-2">Courses</p></div>
    <div><div class="w-12 h-12 bg-blue-50 rounded-full mx-auto flex items-center justify-center text-xl">🚗</div><p class="text-[11px] font-bold mt-2">Transport</p></div>
    <div><div class="w-12 h-12 bg-yellow-50 rounded-full mx-auto flex items-center justify-center text-xl">🧹</div><p class="text-[11px] font-bold mt-2">Ménage</p></div>
    <div><div class="w-12 h-12 bg-red-50 rounded-full mx-auto flex items-center justify-center text-xl">🔧</div><p class="text-[11px] font-bold mt-2">Réparation</p></div>
    <div><div class="w-12 h-12 bg-indigo-50 rounded-full mx-auto flex items-center justify-center text-xl">💻</div><p class="text-[11px] font-bold mt-2">Informatique</p></div>
    <div><div class="w-12 h-12 bg-orange-50 rounded-full mx-auto flex items-center justify-center text-xl">🏠</div><p class="text-[11px] font-bold mt-2">Aide à domicile</p></div>
    <div><div class="w-12 h-12 bg-gray-100 rounded-full mx-auto flex items-center justify-center text-xl">➕</div><p class="text-[11px] font-bold mt-2">Autres</p></div>
  </div>

  <!-- EXEMPLE TACHE comme app 5 -->
  <div class="mt-8 grid md:grid-cols-3 gap-6">
    <div class="bg-white rounded-2xl p-5 shadow-sm border"><div class="flex justify-between"><span class="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded-full">En cours de livraison</span><span class="text-xs font-bold">50 000 GNF</span></div><div class="mt-4 flex items-center gap-2 text-xs"><span>📍 Kaloum → Matoto</span></div><div class="mt-3 h-2 bg-blue-100 rounded-full overflow-hidden"><div class="h-full w-2/3 bg-blue-900"></div></div><p class="text-[10px] mt-2 text-gray-500">Distance 4,5 km • 25 min</p></div>
    <div class="bg-white rounded-2xl p-5 shadow-sm border"><p class="font-bold">💬 Discussion</p><div class="mt-3 space-y-2 text-xs"><p class="bg-blue-900 text-white p-2 rounded-xl rounded-br-none ml-8">Bonjour, je suis en route. J'arrive dans 10 min.</p><p class="bg-gray-100 p-2 rounded-xl rounded-bl-none mr-8">Parfait, merci beaucoup !</p></div></div>
    <div class="bg-white rounded-2xl p-5 shadow-sm border text-center"><div class="w-12 h-12 bg-green-500 text-white rounded-full mx-auto flex items-center justify-center text-xl">✓</div><p class="font-bold mt-2">Paiement sécurisé</p><p class="text-xs text-gray-500 mt-1">Montant 50 000 GNF - Vous recevrez 47 500 GNF après commission MSDMA (5%)</p><button class="mt-4 bg-msdma-yellow w-full py-2 rounded-full font-bold text-sm">En attente de confirmation</button></div>
  </div>
</section>

<footer class="text-center py-10 text-xs text-gray-400">© 2026 MSDMA • Ensemble, tout devient plus simple. • Conakry, Guinée</footer>
</body>
</html>
  `);
});

app.listen(PORT, () => console.log('MSDMA 2.0 sur port ' + PORT));
