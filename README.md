# AI Engineering Bootcamp — Pano

Evren Özkip'in AI Engineering Bootcamp'i (Eylül 2026) için hazırlanmış
çalışma panosu. Bu depo panonun **herkese açık kopyasını** barındırır.

## 📱 Aç

### → **https://ykaya105565.github.io/bootcamp-pano/**

Üyelik yok, kurulum yok. Telefonda ana ekrana eklenebilir: menü → "Ana
ekrana ekle". Kendi simgesiyle, tam ekran, uygulama gibi açılır. Bir kez
açtıktan sonra **çevrimdışı** da çalışır.

## İçinde ne var

| Bölüm | Ne yapıyor |
|---|---|
| **Dersler** | Ders özetleri — her ders "Önce şunu bil" kartıyla açılıyor: konuyu zaten bildiğin bir şeye bağlıyor |
| **Sözlük** | 52 terim. Her birinin tek cümlelik tanımı, **harita/kadastro dünyasından karşılığı** ve tuzağı. Ders metninde geçen terimlere dokununca aynı kart açılıyor |
| **Uygulamalar** | Yazılan uygulamalar yan yana: hangi sürümde ne geldi, ne hâlâ eksik |
| **Quiz** | Ders turları — süre, puan, seri bonusu, sonunda konu konu döküm |
| **Bugünün tekrarı** | Unutma eğrisine karşı Leitner kutuları: yanlış bildiğin soru yarın, oturanlar bir ay sonra döner |
| **Kurcala** | Tahmin et → gör kartları · akış kurucu (tuzak kutularla) · maliyet kumbarası |
| **Projem** | Mimari karar defteri — her kararda "karşılığında neyi feda ettim" zorunlu |
| **Konu hakimiyeti** | Quiz cevaplarından otomatik hesaplanan ısı haritası |

## Verin nerede

**Kendi cihazında.** İlerlemen, quiz sonuçların ve işaretlerin tarayıcının
yerel deposunda (`localStorage`) tutuluyor. Sunucuya hiçbir şey gitmiyor,
kimse kimsenin cevabını görmüyor. Tarayıcı verisini silersen ilerleme de
gider — panodaki **Yedek** kartından dışa aktarabilirsin.

## Bu kopyada olmayan

| | |
|---|---|
| Yapay zekâ üretimi (defter notu, sunum, derin test, yeni quiz turu) | ❌ |
| Telefon ↔ bilgisayar senkronu | ❌ |

İkisi de claude.ai görüntüleyicisinin çalışma zamanına bağlı ve başka bir
yerde çalışmıyor. Geri kalan her şey burada çalışıyor.

## Geri bildirim

Panoda **Rota → Paylaş ve geri bildirim** bölümü var: anlaşılırlık puanı,
takıldığın yer, eklenmesini istediğin şey. Doldurup WhatsApp'tan
gönderiyorsun. Arkada sunucu yok, metin doğrudan geliyor.

## Nasıl üretiliyor

Kaynak, özel bir arşiv deposunda. Orada pano bir şablon ile ders içerik
dosyalarından derleniyor (`calisma/derle.py`), sonra `calisma/yayinla.py`
tek başına çalışan `index.html` + `manifest.json` + `icon.svg` + `sw.js`
üretip buraya yazıyor. Bu depoya yalnızca bu dört dosya giriyor.
