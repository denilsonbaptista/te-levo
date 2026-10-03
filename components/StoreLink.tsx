import { Icon } from "./Icons";

export const STORE_URLS = {
  passengerAndroid:
    "https://play.google.com/store/apps/details?id=br.com.televomobilearaxa.passenger.drivermachine",
  passengerIos: "https://apps.apple.com/br/app/te-levo-mobile/id1602300920",
  driverAndroid: "https://play.google.com/store/apps/details?id=br.com.televomobilearaxa.taxi.drivermachine",
  instagram: "https://www.instagram.com/televomobile.pa/",
  whatsapp: "https://wa.me/5594936182415",
  whatsappDriver: `https://wa.me/5594936182415?text=${encodeURIComponent(
    "Olá! Quero ser motorista parceiro da te levo.",
  )}`,
};

type StoreLinkProps = {
  href: string;
  store: "play" | "apple";
  caption: string;
  onDark?: boolean;
};

export default function StoreLink({ href, store, caption, onDark }: StoreLinkProps) {
  return (
    <a className={onDark ? "store on-dark" : "store"} href={href} target="_blank" rel="noopener noreferrer">
      <Icon id={store === "play" ? "i-play" : "i-apple"} />
      <span>
        <small>{caption}</small>
        <strong>{store === "play" ? "Google Play" : "App Store"}</strong>
      </span>
    </a>
  );
}
