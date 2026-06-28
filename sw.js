var CACHE_NAME = 'ibvn-cache-v1';
var ARQUIVOS_CACHE = [
  '/',
  '/index.html',
  '/assets/img/logo.png',
  '/assets/img/externo.jpg',
  '/assets/img/templo.jpg',
  '/assets/img/foto-historica.jpg',
  '/assets/img/foto-historica2.jpg',
  '/assets/img/congregacao.jpg',
  '/assets/img/comunidade.jpg',
  '/assets/img/pr-adriano.jpg'
];

// Instala e faz cache dos arquivos principais
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ARQUIVOS_CACHE);
    })
  );
});

// Limpa caches antigos ao ativar nova versão
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(nomes) {
      return Promise.all(
        nomes.filter(function(nome) {
          return nome !== CACHE_NAME;
        }).map(function(nome) {
          return caches.delete(nome);
        })
      );
    })
  );
});

// Estratégia: tenta rede primeiro, cai no cache se offline
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .then(function(resposta) {
        var respostaClone = resposta.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, respostaClone);
        });
        return resposta;
      })
      .catch(function() {
        return caches.match(event.request);
      })
  );
});