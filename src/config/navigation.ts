export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "ホーム", href: "/" },
  { label: "会社概要", href: "/#about" },
  { label: "事業内容", href: "/#services" },
  { label: "施工事例", href: "/works" },
  { label: "お知らせ", href: "/news" },
  { label: "お問い合わせ", href: "/#contact" },
];

export function isNavActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}
