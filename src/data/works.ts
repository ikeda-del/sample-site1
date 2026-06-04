export interface Work {
  id: string;
  title: string;
  category: string;
  location: string;
  completedAt: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const works: Work[] = [
  {
    id: "work-01",
    title: "市道舗装補修工事",
    category: "舗装",
    location: "新潟県三条市",
    completedAt: "2025年11月",
    description: "老朽化した市道約1.2kmの舗装打換えと区画線設置を実施しました。",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    imageAlt: "市道舗装補修工事の現場",
  },
  {
    id: "work-02",
    title: "公共施設改修工事",
    category: "建築",
    location: "新潟県三条市",
    completedAt: "2025年9月",
    description: "既存施設のバリアフリー化と外壁改修を行い、利用者の安全性を向上しました。",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "公共施設改修工事",
  },
  {
    id: "work-03",
    title: "調整池整備工事",
    category: "土木",
    location: "新潟県三条市",
    completedAt: "2025年6月",
    description: "調整池の掘削・護岸工・排水設備の新設により、地域の防災力を強化しました。",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    imageAlt: "調整池整備工事",
  },
  {
    id: "work-04",
    title: "保育所駐車場工事",
    category: "舗装",
    location: "新潟県三条市",
    completedAt: "2025年3月",
    description: "保育所敷地内の駐車場拡張舗装と雨水排水設備の整備を行いました。",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    imageAlt: "保育所駐車場工事",
  },
  {
    id: "work-05",
    title: "連結橋架設工事",
    category: "土木",
    location: "新潟県三条市",
    completedAt: "2024年12月",
    description: "スマートインター連結橋の下部工・上部工を担当し、交通利便性の向上に貢献しました。",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    imageAlt: "連結橋架設工事",
  },
  {
    id: "work-06",
    title: "排水路整備工事",
    category: "管工事",
    location: "新潟県三条市",
    completedAt: "2024年10月",
    description: "農業用水路の護岸補強と床掘りを実施し、安定した水流を確保しました。",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "排水路整備工事",
  },
  {
    id: "work-07",
    title: "商業施設新築工事",
    category: "建築",
    location: "新潟県三条市",
    completedAt: "2024年7月",
    description: "鉄骨造2階建て商業施設の基礎から内装仕上げまで一貫して施工しました。",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "商業施設新築工事",
  },
  {
    id: "work-08",
    title: "公園整備工事",
    category: "造園",
    location: "新潟県三条市",
    completedAt: "2024年4月",
    description: "遊具設置・植栽・園路舗装を含む公園整備で、地域の憩いの場を再生しました。",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80",
    imageAlt: "公園整備工事",
  },
  {
    id: "work-09",
    title: "工場屋根防水工事",
    category: "塗装・防水",
    location: "新潟県燕市",
    completedAt: "2024年2月",
    description: "老朽化した屋上防水層の撤去と新規防水工法への更新を行いました。",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    imageAlt: "工場屋根防水工事",
  },
];

export const workCategories = ["すべて", ...new Set(works.map((w) => w.category))];
