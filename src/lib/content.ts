import type { Photo } from "@/lib/apartments";

export type FaqItem = {
  question: string;
  answer: string;
};

export type RelatedLink = {
  href: string;
  title: string;
  text: string;
};

export type LandingPage = {
  path: string;
  navLabel: string;
  whatsappLabel: string;
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  hero: Photo;
  gallery: Photo[];
  introTitle: string;
  paragraphs: string[];
  highlights: { title: string; text: string }[];
  apartmentIds: string[];
  faqs: FaqItem[];
  finalTitle: string;
  finalText: string;
  related: RelatedLink[];
};

const stayLinks = {
  gunluk: {
    href: "/bursa-apart-gunluk",
    title: "Günlük apart",
    text: "Bir gece ve kısa şehir planları için eşyalı daire.",
  },
  saatlik: {
    href: "/bursa-apart-saatlik",
    title: "Saatlik apart",
    text: "Günübirlik mola ve kısa dinlenme için temiz oda.",
  },
  haftalik: {
    href: "/bursa-apart-haftalik",
    title: "Haftalık apart",
    text: "Birkaç gün ile iki hafta arası, ev düzeninde kalış.",
  },
  aylik: {
    href: "/bursa-apart-aylik",
    title: "Aylık apart",
    text: "Eşya taşımadan, merkezde uzun süreli yaşam.",
  },
  osmangazi: {
    href: "/osmangazi",
    title: "Osmangazi",
    text: "Merkez ilçede günlükten aylığa daire seçenekleri.",
  },
  altiparmak: {
    href: "/altiparmak",
    title: "Altıparmak",
    text: "Çarşı ve ulaşım aksına yakın konaklama.",
  },
} as const;

const hero = {
  bright: {
    src: "/images/living-bright.jpg",
    alt: "Bursa apart için aydınlık ve eşyalı bir salon",
  },
  modern: {
    src: "/images/living-modern.jpg",
    alt: "Günlük kiralık apartta modern oturma alanı",
  },
  cozy: {
    src: "/images/living-cozy.jpg",
    alt: "Aylık konaklamaya uygun sıcak tonlarda apart salonu",
  },
  scandi: {
    src: "/images/living-scandi.jpg",
    alt: "Haftalık kalış için sade ve ferah apart salonu",
  },
  soft: {
    src: "/images/bedroom-soft.jpg",
    alt: "Saatlik ve günlük konaklama için düzenli yatak odası",
  },
  white: {
    src: "/images/bedroom-white.jpg",
    alt: "Temiz çarşaflı apart yatak odası",
  },
  hotel: {
    src: "/images/bedroom-hotel.jpg",
    alt: "Kontrol edilmiş, kullanıma hazır apart yatağı",
  },
  kitchen: {
    src: "/images/kitchen.jpg",
    alt: "Eşyalı apartta temel mutfak alanı",
  },
} as const;

export const gunlukPage: LandingPage = {
  path: "/bursa-apart-gunluk",
  navLabel: "Günlük",
  whatsappLabel: "Bursa Apart Günlük",
  title: "Bursa Apart Günlük | Temiz Daireler | bursaapartbulus.com",
  description:
    "Bursa apart günlük kiralık daire. Osmangazi ve Altıparmak'ta temiz, eşyalı, merkezi konaklama. 7/24 telefon ve WhatsApp. bursaapartbulus.com",
  h1: "Bursa apart günlük, Bursa apart Osmangazi günlük ve Bursa apart Altıparmak günlük",
  subtitle:
    "Bir gece veya birkaç gün için temiz, eşyalı daire. Aynı gün giriş sorun, fiyatı telefonda netleştirelim.",
  hero: hero.modern,
  gallery: [hero.modern, hero.white, hero.kitchen],
  introTitle: "Kısa şehir planı için günlük apart",
  paragraphs: [
    "Bursa apart günlük konaklama, şehre kısa süreli gelenler içindir. Bursa apart Osmangazi günlük ve Bursa apart Altıparmak günlük arayan misafirler Heykel, Setbaşı ve çarşıya yakın, temiz ve eşyalı bir dairede kalır.",
    "İş görüşmesi, hastane randevusu veya aile ziyaretinde mutfaklı daire, otel odasına göre daha rahat eder. Müsait daireyi kişi sayınıza göre telefonda ayırırız.",
    "Online ödeme ve site üzerinden rezervasyon yok. Fiyat, süre ve daire tipine göre değişir; net rakamı aradığınızda söyleriz. Giriş saati doluluğa bağlıdır, aynı gün için de sorabilirsiniz.",
  ],
  highlights: [
    { title: "Aynı gün giriş", text: "Müsaitlik varsa beklemeden o gün teslim ederiz." },
    { title: "Merkezde kalın", text: "Osmangazi ve Altıparmak çevresinde yürüyerek işinizi görün." },
    { title: "Net fiyat", text: "Süre ve kişi sayısı belli olunca fiyatı telefonda söyleriz." },
  ],
  apartmentIds: ["altiparmak-suit", "heykel-studio", "setbasi-daire", "carsi-loft", "panorama-oda"],
  faqs: [
    {
      question: "Bursa apart günlük fiyatı nasıl belirlenir?",
      answer:
        "Fiyat gece sayısı, kişi adedi ve daire tipine göre değişir. Sitede sabit bir liste tutmuyoruz; güncel fiyatı telefon veya WhatsApp ile söylüyoruz.",
    },
    {
      question: "Aynı gün giriş yapabilir miyim?",
      answer:
        "Daire boşsa aynı gün giriş olur. Giriş saatini aradığınız anda netleştiririz. Yoğun günlerde erken sormanız yer ayırtmayı kolaylaştırır.",
    },
    {
      question: "Girişte kimlik gerekir mi?",
      answer:
        "Evet. Kısa süreli konaklamada kimlik bilgisi alınır. Giriş kurallarını daireyi ayırmadan önce kısaca anlatırız.",
    },
    {
      question: "Günlük dairede neler hazır?",
      answer:
        "Yatak, oturma alanı, temel mutfak eşyası, banyo ve ücretsiz Wi-Fi standarttır. Hangi dairede ne olduğunu fotoğrafla gösteririz.",
    },
    {
      question: "Günlük ile saatlik konaklama arasındaki fark nedir?",
      answer:
        "Saatlik plan birkaç saatlik dinlenme içindir. Geceyi geçirecekseniz günlük tarife daha doğru olur. Emin değilseniz saatinizi söyleyin, biz uygun olanı önerelim.",
    },
  ],
  finalTitle: "Günlük daire için müsaitliği sorun",
  finalText: "Tarihinizi ve kişi sayınızı yazın. Size boş daireyi ve net fiyatı dönelim.",
  related: [stayLinks.saatlik, stayLinks.haftalik, stayLinks.altiparmak],
};

export const saatlikPage: LandingPage = {
  path: "/bursa-apart-saatlik",
  navLabel: "Saatlik",
  whatsappLabel: "Bursa Apart Saatlik",
  title: "Bursa Apart Saatlik | Temiz Daireler | bursaapartbulus.com",
  description:
    "Bursa apart saatlik kiralık daire. Osmangazi ve Altıparmak'ta kısa süreli, temiz ve merkezi konaklama. 7/24 hat. bursaapartbulus.com",
  h1: "Bursa apart saatlik, Bursa apart Osmangazi saatlik ve Bursa apart Altıparmak saatlik",
  subtitle:
    "İki randevu arası veya yol molası için temiz daire. Bütün gece ayırmadan, net fiyatla giriş yapın.",
  hero: hero.soft,
  gallery: [hero.soft, hero.hotel, hero.bright],
  introTitle: "Kısa süre için saatlik apart",
  paragraphs: [
    "Bursa apart saatlik konaklama, günübirlik planı olanlar içindir. Bursa apart Osmangazi saatlik ve Bursa apart Altıparmak saatlik ihtiyaçta bütün gece tutmadan, merkezi ve temiz bir daire kullanılır.",
    "Şehirlerarası molada, iki iş arasında veya akşam geç gelen misafirde daire havalandırılmış ve kontrol edilmiş teslim edilir. Sizi çarşıdan uzak bir adrese göndermeyiz.",
    "Saatlik girişte kimlik alınır. Süre uzarsa, günlük tarifeye geçmeden önce sizi bilgilendiririz. Müsaitlik gün içinde hızla değiştiği için arayıp sormanız en doğrusudur.",
  ],
  highlights: [
    { title: "Kısa süre", text: "Birkaç saatlik plan için bütün gece ödemeyin." },
    { title: "Hızlı dönüş", text: "WhatsApp mesajına müsait daire ve fiyat ile dönüyoruz." },
    { title: "Temiz teslim", text: "Her çıkıştan sonra daire kontrol edilir." },
  ],
  apartmentIds: ["heykel-studio", "panorama-oda", "altiparmak-suit", "carsi-loft"],
  faqs: [
    {
      question: "Saatlik apartta en kısa süre ne kadar?",
      answer:
        "Süre doluluğa ve saate göre değişir. Aradığınızda kaç saat kalacağınızı söyleyin, o an uygun olan aralığı ve fiyatı paylaşalım.",
    },
    {
      question: "Gece saatlik giriş olur mu?",
      answer:
        "Hat 7/24 açıktır. Gece müsait daire varsa giriş yapılır. Yoğun saatlerde kısa bir onay süresi olabilir.",
    },
    {
      question: "Saatlik daireler nerede?",
      answer:
        "Adresimiz Demirtaşpaşa, 2. Sabunevi Sk. No:6, 16220 Osmangazi/Bursa. Altıparmak, Heykel ve çarşı bu çevrededir. Giriş saatini telefonda söyleriz.",
    },
    {
      question: "Süre uzarsa ne olur?",
      answer:
        "Daire boşsa kalabilirsiniz. Uzatma ücretini, süre dolmadan söyleriz. Günlük tarife daha uygunsa onu öneririz.",
    },
    {
      question: "Kalacağım dairenin fotoğrafını görebilir miyim?",
      answer:
        "Evet. Ayırdığımız dairenin güncel fotoğraflarını WhatsApp'tan göndeririz. Sitedeki görseller daire tiplerini anlatır.",
    },
  ],
  finalTitle: "Saatlik müsaitlik için yazın",
  finalText: "Saatinizi ve kaç kişi olduğunuzu belirtin. Size uygun daireyi hemen söyleyelim.",
  related: [stayLinks.gunluk, stayLinks.haftalik, stayLinks.osmangazi],
};

export const haftalikPage: LandingPage = {
  path: "/bursa-apart-haftalik",
  navLabel: "Haftalık",
  whatsappLabel: "Bursa Apart Haftalık",
  title: "Bursa Apart Haftalık | Eşyalı Daire | bursaapartbulus.com",
  description:
    "Bursa apart haftalık kiralık daire. Osmangazi ve Altıparmak'ta mutfaklı, Wi-Fi'lı, eşyalı konaklama. 7/24 arayın. bursaapartbulus.com",
  h1: "Bursa apart haftalık, Bursa apart Osmangazi haftalık ve Bursa apart Altıparmak haftalık",
  subtitle:
    "Proje, tedavi veya aile ziyareti için birkaç gün aynı evde kalın. Her gece otel değiştirmek zorunda değilsiniz.",
  hero: hero.scandi,
  gallery: [hero.scandi, hero.kitchen, hero.white],
  introTitle: "Bir haftayı ev düzeninde geçirin",
  paragraphs: [
    "Bursa apart haftalık kiralama, birkaç gün ile iki hafta arasında kalanlar içindir. Bursa apart Osmangazi haftalık ve Bursa apart Altıparmak haftalık seçeneklerde mutfak, ücretsiz Wi-Fi ve eşya hazırdır.",
    "Aynı dairede çamaşır, mutfak ve çalışma alanı olduğu için her sabah valiz toplamazsınız. Market ve ulaşım yürüme mesafesindedir. Dört kişiyseniz 2+1 daire bakarız.",
    "Haftalık fiyatta gece sayısını birlikte netleştiririz. Uzatma ihtimaliniz varsa baştan söylemeniz, dolu güne denk gelmemenizi sağlar. Koşulları girişten önce açıkça konuşuruz.",
  ],
  highlights: [
    { title: "Ev konforu", text: "Mutfak ve oturma alanı birkaç günlük yaşam için hazır." },
    { title: "Tek adres", text: "Süre boyunca aynı dairede kalırsınız." },
    { title: "Esnek uzatma", text: "Müsaitse haftayı gün gün uzatabilirsiniz." },
  ],
  apartmentIds: ["setbasi-daire", "osmangazi-aile", "altiparmak-suit", "carsi-loft"],
  faqs: [
    {
      question: "Haftalık fiyat, gece geceden daha mı avantajlı?",
      answer:
        "Genelde birkaç gece ve üzeri kalışta haftalık tarife daha uygun olur. Tam rakamı gece sayınız belli olunca söyleriz.",
    },
    {
      question: "Mutfak kullanılabiliyor mu?",
      answer:
        "Evet. Haftalık dairelerde temel mutfak eşyası vardır. Ocak, buzdolabı ve küçük ev aletlerinin durumu daireye göre değişir; fotoğrafta gösteririz.",
    },
    {
      question: "Kaç kişi kalabilir?",
      answer:
        "Stüdyo ve 1+1 daireler iki veya üç kişi, 2+1 daireler dört kişi içindir. Kişi sayısını söylerseniz doğru planı ayıralım.",
    },
    {
      question: "Hafta içinde temizlik yapıyor musunuz?",
      answer:
        "Standart teslim, girişte temiz dairedir. Uzun kalışta ara temizlik istenirse ayrıca konuşulur ve ücreti baştan söylenir.",
    },
    {
      question: "Süreyi uzatabilir miyim?",
      answer:
        "Daire bir sonraki misafire söz verilmediyse uzatma olur. Kararınızı çıkıştan bir gün önce bildirmeniz yeterli.",
    },
  ],
  finalTitle: "Haftalık planınızı birlikte netleştirelim",
  finalText: "Başlangıç gününüzü ve kaç gece kalacağınızı yazın. Uygun daireyi ve haftalık fiyatı iletelim.",
  related: [stayLinks.gunluk, stayLinks.aylik, stayLinks.osmangazi],
};

export const aylikPage: LandingPage = {
  path: "/bursa-apart-aylik",
  navLabel: "Aylık",
  whatsappLabel: "Bursa Apart Aylık",
  title: "Bursa Apart Aylık | Eşyalı Daire | bursaapartbulus.com",
  description:
    "Bursa apart aylık kiralık eşyalı daire. Osmangazi ve Altıparmak'ta uzun konaklama. Koşullar telefonda netleşir. bursaapartbulus.com",
  h1: "Bursa apart aylık, Bursa apart Osmangazi aylık ve Bursa apart Altıparmak aylık",
  subtitle:
    "İş ataması, üniversite veya ev bakma sürecinde eşyalı daire. Eşya taşımadan, merkezde bir ay ve üzeri kalın.",
  hero: hero.cozy,
  gallery: [hero.cozy, hero.kitchen, hero.scandi],
  introTitle: "Aylık eşyalı apart, taşınmadan yaşayın",
  paragraphs: [
    "Bursa apart aylık kiralık daire, eşya taşımadan merkezde yaşamak isteyenler içindir. Bursa apart Osmangazi aylık ve Bursa apart Altıparmak aylık planlarda yatak, mutfak ve Wi-Fi hazırdır.",
    "Depozito, faturalar ve ev kuralları telefonda açıkça konuşulur. Sürpriz kalem bırakmamak için koşulları girişten önce yazarız.",
    "Aylık kalışta mutfak ve çamaşır, günlük plana göre daha önemlidir. Hangi dairede ne olduğunu güncel fotoğraflarla WhatsApp üzerinden gösteririz. Online sözleşme veya ödeme sayfası yoktur.",
  ],
  highlights: [
    { title: "Eşyalı düzen", text: "Yatak, oturma ve mutfak ile giriş yapılır." },
    { title: "Yazılı koşullar", text: "Depozito ve fatura bilgisini girişten önce netleştiririz." },
    { title: "Merkezde yaşam", text: "Market, ulaşım ve iş aksı yürüme mesafesindedir." },
  ],
  apartmentIds: ["osmangazi-aile", "setbasi-daire"],
  faqs: [
    {
      question: "Aylık dairede depozito var mı?",
      answer:
        "Uzun kalışta depozito istenebilir. Tutarı daireye göre değişir ve girişten önce söylenir. Koşullar dışında kesinti yapılmaz.",
    },
    {
      question: "Faturalar kiraya dahil mi?",
      answer:
        "Bu daireye ve mevsime göre değişir. Elektrik, su ve aidat bilgisini fiyatı söylerken ayrıca belirtiriz.",
    },
    {
      question: "Daire tamamen eşyalı mı?",
      answer:
        "Aylık planladığımız daireler yaşam için eşyalıdır. Eksik gördüğünüz bir parça varsa girişten önce konuşuruz.",
    },
    {
      question: "Sözleşme yapılıyor mu?",
      answer:
        "Evet. Süre, bedel ve kurallar yazılı paylaşılır. İşlem telefon ve WhatsApp üzerinden yürür, sitede ödeme alınmaz.",
    },
    {
      question: "Ev bakarken bir aylıktan kısa kalınır mı?",
      answer:
        "Evet. Ev arayan misafirler için haftalık tarife de vardır. Süreyi söyleyin, uygun olanı önerelim.",
    },
  ],
  finalTitle: "Aylık daire için tarih bırakın",
  finalText: "Kaç ay kalacağınızı ve kaç kişi olduğunuzu yazın. Eşyalı seçenekleri ve koşulları iletelim.",
  related: [stayLinks.haftalik, stayLinks.gunluk, stayLinks.osmangazi],
};

export const osmangaziPage: LandingPage = {
  path: "/osmangazi",
  navLabel: "Osmangazi",
  whatsappLabel: "Osmangazi apart",
  title: "Osmangazi Apart | Bursa Günlük | bursaapartbulus.com",
  description:
    "Osmangazi apart daire. Bursa merkezde günlük, saatlik, haftalık ve aylık eşyalı konaklama. Altıparmak ve Heykel. bursaapartbulus.com",
  h1: "Bursa Apart Osmangazi: Günlükten Aylığa",
  subtitle:
    "Bursa'nın merkez ilçesinde, işinize ve ulaşımınıza yakın eşyalı daire. Süreyi siz söyleyin, daireyi birlikte seçelim.",
  hero: hero.modern,
  gallery: [hero.modern, hero.bright, hero.kitchen],
  introTitle: "Bursa apart Osmangazi merkezde",
  paragraphs: [
    "Osmangazi, Bursa'nın merkez ilçesidir. Bursa apart Osmangazi günlük, saatlik, haftalık ve aylık arayan misafirler için Altıparmak, Heykel ve Setbaşı çevresinde eşyalı daire hazırlarız.",
    "Bursa apart Osmangazi günlük, saatlik, haftalık ve aylık planların hepsinde aynı telefon hattı geçerlidir. Altıparmak, Heykel, Setbaşı ve çarşı çevresinden kişi sayınıza uygun olanı ayırırız.",
    "Adresimiz Demirtaşpaşa, 2. Sabunevi Sk. No:6, 16220 Osmangazi/Bursa. Giriş saatini ve güncel fotoğrafı ayırtmadan önce WhatsApp’tan göndeririz.",
  ],
  highlights: [
    { title: "Dört süre", text: "Saatlik, günlük, haftalık ve aylık aynı ilçede." },
    { title: "Ulaşım", text: "Merkez hatlara ve çarşıya yakın daireler." },
    { title: "Tek hat", text: "Hangi süre olursa olsun 7/24 aynı numaradasınız." },
  ],
  apartmentIds: [
    "altiparmak-suit",
    "heykel-studio",
    "setbasi-daire",
    "osmangazi-aile",
    "carsi-loft",
    "panorama-oda",
  ],
  faqs: [
    {
      question: "Osmangazi'de hangi çevrelerde daireniz var?",
      answer:
        "Altıparmak, Heykel, Setbaşı ve çarşı çevresi. Güncel boş daire hangi sokaktaysa onu söyleriz.",
    },
    {
      question: "Merkeze ulaşım nasıl?",
      answer:
        "Daireler ilçe merkezindedir. Çoğunda çarşıya ve ana duraklara yürüme mesafesi vardır. Tam süreyi daire belli olunca tarif ederiz.",
    },
    {
      question: "Günlük ve aylık aynı daire mi?",
      answer:
        "Hayır. Kısa konaklama için stüdyo ve 1+1, uzun kalış için daha geniş daireler öne çıkar. İhtiyacınızı söylemeniz yeterli.",
    },
    {
      question: "Otopark var mı?",
      answer:
        "Her dairede otopark yoktur. Aracınız varsa baştan söyleyin, uygun olan seçeneği bakalım.",
    },
    {
      question: "Rezervasyon nasıl yapılıyor?",
      answer:
        "Telefon veya WhatsApp ile. Online ödeme yok. Tarih, kişi sayısı ve süre netleşince daireyi ayırırız.",
    },
  ],
  finalTitle: "Osmangazi'de yer sorun",
  finalText: "Mahalle tercihiniz varsa yazın. Yoksa merkeze en uygun boş daireyi önerelim.",
  related: [stayLinks.gunluk, stayLinks.aylik, stayLinks.altiparmak],
};

export const altiparmakPage: LandingPage = {
  path: "/altiparmak",
  navLabel: "Altıparmak",
  whatsappLabel: "Altıparmak apart",
  title: "Altıparmak Apart | Günlük Daire | bursaapartbulus.com",
  description:
    "Altıparmak apart daire. Bursa Altıparmak'ta günlük ve saatlik temiz, eşyalı konaklama. Merkezi konum, 7/24 hat. bursaapartbulus.com",
  h1: "Bursa Apart Altıparmak Günlük Daire",
  subtitle:
    "Bursa'nın bilinen merkez aksında, çarşıya ve ulaşımına yakın eşyalı daire. Kısa sürede de, haftalık planda da sorulabilir.",
  hero: hero.bright,
  gallery: [hero.bright, hero.soft, hero.hotel],
  introTitle: "Bursa apart Altıparmak konumunda",
  paragraphs: [
    "Altıparmak, Osmangazi'nin hareketli merkez aksıdır. Bursa apart Altıparmak günlük ve Bursa apart Altıparmak saatlik talep, çarşıya ve duraklara yürümek isteyenler içindir.",
    "Haftalık ve aylık için de aynı çevrede daha geniş daire bakarız. Bursa apart Osmangazi aramasının merkez ayağı bu bölgedir.",
    "Sokak hareketlidir. Daha sakin bir ara sokak istiyorsanız bunu baştan söyleyin. Müsait daireyi ve kat bilgisini fotoğrafla birlikte iletiriz.",
  ],
  highlights: [
    { title: "Yürüme mesafesi", text: "Çarşı, yeme içme ve ulaşım yakındır." },
    { title: "Kısa konaklama", text: "Günlük ve saatlik talep için hızlı dönüş." },
    { title: "Şeffaf adres", text: "Daire kesinleşince konumu ve katı söyleriz." },
  ],
  apartmentIds: ["altiparmak-suit", "panorama-oda", "heykel-studio", "carsi-loft"],
  faqs: [
    {
      question: "Altıparmak tam olarak nerede?",
      answer:
        "Osmangazi ilçesinde, Bursa merkezinin bilinen caddelerinden biridir. Haritayı sayfanın altındaki bölümden açabilirsiniz.",
    },
    {
      question: "Cadde gürültülü mü?",
      answer:
        "Ana aks hareketlidir. Sessiz bir ara sokak veya üst kat istiyorsanız aradığınızda belirtin, ona göre daire bakalım.",
    },
    {
      question: "Nereye yürüme mesafesinde?",
      answer:
        "Çarşı, yeme içme yerleri ve merkez duraklar bu çevrededir. Tam dakika, seçilen dairenin sokağına göre değişir.",
    },
    {
      question: "Saatlik daire var mı?",
      answer:
        "Evet, müsaitliğe bağlı. Saatlik ve günlük için aynı hattan yazmanız yeterli.",
    },
    {
      question: "Nasıl ulaşırım?",
      answer:
        "Önce telefon veya WhatsApp ile daireyi netleştirin. Adres ve yol tarifini girişten önce göndeririz.",
    },
  ],
  finalTitle: "Altıparmak'ta müsait daire sorun",
  finalText: "Günlük, saatlik veya daha uzun süreyi yazın. Merkezdeki boş daireyi iletelim.",
  related: [stayLinks.gunluk, stayLinks.saatlik, stayLinks.osmangazi],
};

export const landingPages = [
  gunlukPage,
  saatlikPage,
  haftalikPage,
  aylikPage,
  osmangaziPage,
  altiparmakPage,
];

export const homePage = {
  path: "/",
  title: "Bursa Apart | Temiz Daireler | bursaapartbulus.com",
  description:
    "bursaapartbulus.com üzerinde Bursa Osmangazi ve Altıparmak'ta temiz, eşyalı apart. Günlük, saatlik, haftalık ve aylık. 7/24 telefon ve WhatsApp.",
  h1: "Bursa Apart: Günlük, Saatlik, Haftalık ve Aylık Daire",
  subtitle:
    "Osmangazi ve Altıparmak'ta temiz, eşyalı, merkezi konaklama. Müsaitlik ve fiyat için telefon veya WhatsApp yeterli.",
  hero: hero.bright,
  gallery: [hero.bright, hero.modern, hero.white],
  faqs: [
    {
      question: "Rezervasyon nasıl yapılıyor?",
      answer:
        "Yalnızca telefon ve WhatsApp üzerinden. Sitede ödeme veya online rezervasyon yoktur. Tarihinizi yazın, müsait daire ve fiyatı söyleyelim.",
    },
    {
      question: "Hangi sürelerde daire kiralıyorsunuz?",
      answer:
        "Saatlik, günlük, haftalık ve aylık. Süreyi siz söyleyin, doğru tarifeyi ve daire tipini önerelim.",
    },
    {
      question: "Daireler nerede?",
      answer:
        "Demirtaşpaşa, 2. Sabunevi Sk. No:6, 16220 Osmangazi/Bursa. Altıparmak, Heykel, Setbaşı ve çarşı yakınımızdadır.",
    },
    {
      question: "Fotoğraflar güncel mi?",
      answer:
        "Sitedeki görseller daire tiplerini gösterir. Kalacağınız dairenin güncel fotoğraflarını ayırtmadan önce WhatsApp'tan göndeririz.",
    },
    {
      question: "Gece ulaşabilir miyim?",
      answer:
        "Evet. Hat 7/24 açıktır. Gece giriş, müsait daire varsa yapılır.",
    },
  ] satisfies FaqItem[],
};

export const contactPage = {
  path: "/iletisim",
  title: "İletişim | Bursa Apart | bursaapartbulus.com",
  description:
    "Buluş Apart iletişim: 0541 131 23 53, WhatsApp ve Demirtaşpaşa, 2. Sabunevi Sk. No:6, Osmangazi/Bursa. 7/24. bursaapartbulus.com",
  h1: "Bursa Apart İletişim",
  subtitle:
    "bursaapartbulus.com üzerinden ulaştınız. Tarihi, süreyi ve kişi sayısını yazın; müsait daire ve net fiyatı hemen söyleyelim.",
};

export const testimonials = [
  {
    initial: "E",
    name: "Elif K.",
    stars: 5,
    stay: "Günlük",
    text: "Daire tertemiz teslim edildi. Çarşıya yakındı, sabah işe yürüyerek gittim.",
  },
  {
    initial: "M",
    name: "Murat A.",
    stars: 5,
    stay: "Konum",
    text: "Osmangazi merkezde, durağa birkaç dakika. Personel WhatsApp’tan hemen dönüş yaptı.",
  },
  {
    initial: "S",
    name: "Selin T.",
    stars: 5,
    stay: "Fiyat",
    text: "Haftalık fiyat telefonda net söylendi. Mutfak ve Wi-Fi işimizi gördü, sürpriz kalem çıkmadı.",
  },
  {
    initial: "A",
    name: "Ahmet Y.",
    stars: 4,
    stay: "Gece giriş",
    text: "Geç saatte hat açıktı. Karşılama düzgündü, daire söz edildiği gibi düzenliydi.",
  },
  {
    initial: "D",
    name: "Deniz Y.",
    stars: 5,
    stay: "Temizlik",
    text: "Banyo ve yatak temizdi. Konum Demirtaşpaşa’da, ihtiyacımız olan her yere yakındı.",
  },
];

export const indexableRoutes: {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly";
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: gunlukPage.path, priority: 0.9, changeFrequency: "weekly" },
  { path: saatlikPage.path, priority: 0.9, changeFrequency: "weekly" },
  { path: haftalikPage.path, priority: 0.9, changeFrequency: "weekly" },
  { path: aylikPage.path, priority: 0.9, changeFrequency: "weekly" },
  { path: osmangaziPage.path, priority: 0.8, changeFrequency: "weekly" },
  { path: altiparmakPage.path, priority: 0.8, changeFrequency: "weekly" },
  { path: contactPage.path, priority: 0.7, changeFrequency: "monthly" },
];
