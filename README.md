# ⛪ Igreja Batista Vida Nova — Site Oficial

Site institucional da **Igreja Batista Vida Nova (IBVN)**, localizada no Parque Santo Antônio, São Paulo/SP.

---

## 🌐 Acesso

> Link do deploy: _a definir após publicação no Vercel_

---

## 📁 Estrutura de Pastas

ibvn/
├── index.html
└── assets/
    └── img/
        ├── logo.png
        ├── externo.jpg
        ├── templo.jpg
        ├── foto-historica.jpg
        ├── foto-historica2.jpg
        ├── congregacao.jpg
        ├── comunidade.jpg
        └── pr-adriano.jpg

---

## 🔧 Tecnologias

- HTML5 semântico
- CSS3 com Custom Properties (Design Tokens)
- JavaScript vanilla (sem frameworks)
- Google Fonts — Playfair Display + Inter
- Google Maps Embed API
- Google Drive API v3 (seção Último Evento)

---

## ✨ Funcionalidades

- **Light/Dark mode** com memória via localStorage
- **Mobile-first** e totalmente responsivo
- **Animações de scroll** via IntersectionObserver
- **Carrossel automático** de fotos da igreja (seção Sobre)
- **Integração Google Drive** — seção Último Evento atualizada sem tocar no código
- **Mapa interativo** com link direto ao Google Maps
- **Navbar fixa** com transição suave e menu mobile animado
- Nomenclatura CSS seguindo metodologia **BEM**

---

## 📸 Como atualizar o Último Evento (sem programação)

1. Acesse a pasta **ibvn-ultimo-evento** no Google Drive da igreja
2. **Apague** as fotos do evento anterior
3. Faça **upload** das fotos do novo evento (qualquer nome de arquivo)
4. Abra o arquivo **evento.txt** e troque pelo nome do novo evento
5. Pronto — o site atualiza automaticamente ✅

> A pasta deve estar compartilhada como "Qualquer pessoa com o link pode visualizar"

---

## ⚙️ Configuração do Google Drive (feita uma única vez)

No arquivo index.html, localize e preencha no início do bloco script:

var DRIVE_FOLDER_ID = 'COLE_O_ID_DA_PASTA_AQUI';
var GOOGLE_API_KEY  = 'COLE_SUA_API_KEY_AQUI';

**Como obter o ID da pasta:**
- Abra a pasta no Google Drive
- Copie o trecho da URL após /folders/

**Como gerar a API Key:**
- Acesse console.cloud.google.com
- Crie um projeto → Ative a Google Drive API → Gere uma API Key
- É gratuito

---

## 🗂️ Seções do Site

| Seção | Descrição |
|---|---|
| Hero | Chamada principal com scroll hint |
| Missão e Visão | Declarações oficiais da igreja |
| Sobre Nós | História + carrossel de fotos |
| Pastor | Bio do Pr. Adriano Luiz de Oliveira |
| Cultos | Horários semanais |
| Ministérios | Ministérios e departamentos |
| Último Evento | Galeria dinâmica via Google Drive |
| Contato | Endereço, telefone, e-mail e mapa |

---

## 📍 Informações da Igreja

Igreja Batista Vida Nova — IBVN
R. Laet de Toledo César, 159 — Parque Santo Antônio
São Paulo / SP — CEP 05851-250

📞 (11) 5892-2990
✉️ ibavidanova290576@gmail.com

Cultos:
- Quarta-feira — 20h00 — Culto de Oração
- Domingo — 09h00 — Escola Bíblica Dominical
- Domingo — 10h00 — Culto Matutino
- Domingo — 18h30 — Culto Noturno

---

## 📄 Licença

Este projeto é de uso exclusivo da **Igreja Batista Vida Nova**.
Todos os direitos reservados © 2025 IBVN.