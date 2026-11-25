import { ClockIcon, HomeIcon, PinIcon, ShieldIcon, WifiIcon } from "@/components/icons";

const items = [
  {
    title: "Temiz ve hijyenik",
    text: "Her çıkıştan sonra daire kontrol edilir, düzenli teslim edilir.",
    icon: ShieldIcon,
  },
  {
    title: "7/24 hizmet",
    text: "Gece gündüz telefon ve WhatsApp hattı açıktır.",
    icon: ClockIcon,
  },
  {
    title: "Merkezi konum",
    text: "Osmangazi ve Altıparmak çevresinde, ulaşımı kolay adresler.",
    icon: PinIcon,
  },
  {
    title: "Eşyalı daire",
    text: "Yatak, oturma alanı ve temel mutfak kullanımı hazırdır.",
    icon: HomeIcon,
  },
  {
    title: "Ücretsiz Wi-Fi",
    text: "İş, ders ve yayın için internet dairede hazırdır.",
    icon: WifiIcon,
  },
];

export function Advantages() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => (
        <li key={item.title} className="rounded-2xl border border-line bg-white p-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-coral">
            <item.icon />
          </span>
          <h3 className="mt-3 text-sm font-bold text-ink">{item.title}</h3>
          <p className="mt-1 text-sm leading-5 text-muted">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
