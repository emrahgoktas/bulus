# Bursa Apart

Bursa Osmangazi ve Altıparmak için telefon ve WhatsApp odaklı apart sitesi. Online ödeme yoktur.

## Çalıştırma

```bash
npm install
npm run dev
```

Üretim derlemesi:

```bash
npm run build
npm start
```

Görseller `next/image` ile WebP/AVIF olarak sunulur. Bunun için site `next start` veya görsel optimizasyonu yapan bir Node sunucusunda çalışmalıdır.

## Yayına almadan önce

1. `src/lib/site.ts` içindeki telefon, WhatsApp, e-posta, adres ve harita sorgusunu gerçek bilgilerle değiştirin.
2. Site adresi `https://bursaapartbulus.com` olarak ayarlıdır. Farklı bir adres için `.env.local` içine `NEXT_PUBLIC_SITE_URL` yazın.
3. `public/images` altındaki stok fotoğrafları kendi daire fotoğraflarınızla değiştirin.
4. `src/lib/content.ts` içindeki misafir yorumlarını gerçek yorumlarla değiştirin. Uydurma yıldıza veya puan şemasına yer verilmedi.
5. Microsoft Clarity veya Hotjar için `.env.local` içine `NEXT_PUBLIC_CLARITY_ID` ya da `NEXT_PUBLIC_HOTJAR_ID` ekleyin. Boşsa kod sayfaya eklenmez.

## Sayfalar

- `/` ana sayfa
- `/bursa-apart-gunluk`
- `/bursa-apart-saatlik`
- `/bursa-apart-haftalik`
- `/bursa-apart-aylik`
- `/osmangazi`
- `/altiparmak`
- `/iletisim`
