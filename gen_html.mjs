import * as fs from 'fs';

const i18n = {
  ru: {
    nav_home: 'Главная', nav_prod: 'Продукты', nav_tech: 'Технологии',
    nav_proj: 'Проекты', nav_about: 'О нас', nav_serv: 'Сервис',
    nav_news: 'Новости', nav_cont: 'Контакты',
    hero_title: '<span>Graphene Roller</span><br>Супер-износостойкие & Антикоррозионные',
    hero_desc: 'Высокопрочные графеновые композитные ролики для суровых условий Центральной Азии. Морозостойкость до −40°C, полная герметизация, пылезащита.',
    hero_btn1: 'Каталог продукции', hero_btn2: 'Бесплатный запрос',
    benefits_title: 'Ключевые преимущества',
    b1_title: 'Износостойкость +300%', b1_desc: 'Графеновое усиление увеличивает срок службы в 3 раза',
    b2_title: 'Полная герметизация', b2_desc: 'Защита от пыли и воды для открытых карьеров и шахт',
    b3_title: 'Морозостойкость −40°C', b3_desc: 'Адаптированы для суровых зим Центральной Азии',
    b4_title: 'Без обслуживания', b4_desc: 'Снижение эксплуатационных расходов на шахтах и заводах',
    home_form_title: 'Индивидуальное предложение',
    home_form_sub: 'Оставьте заявку — мы подберем оптимальное решение',
    form_name: 'ФИО', form_country: 'Страна', form_phone: 'Телефон / WhatsApp',
    form_email: 'Email', form_product: 'Тип продукции', form_msg: 'Объем / пожелания',
    form_msg_ph: 'Количество, размеры...', form_btn: '📩 Отправить запрос',
    p1: 'Стандартные ролики', p2: 'Буферные ролики', p3: 'Самоустанавливающиеся',
    p4: 'Коррозионностойкие', p5: 'Морозостойкие', p6: 'Полный комплект',
    global_title: 'Глобальное присутствие', global_sub: 'Центральная Азия — наш основной регион',
    kz: '🇰🇿 Казахстан', uz: '🇺🇿 Узбекистан', kg: '🇰🇬 Кыргызстан', tj: '🇹🇯 Таджикистан', tm: '🇹🇲 Туркменистан',
    prod_title: 'Каталог продукции', prod_sub: 'Полный ассортимент графеновых роликов',
    prod1_title: 'Стандартные желобчатые ролики', prod1_desc: 'Базовые ролики общего назначения с графеновым усилением. Срок службы выше в 2–3 раза.',
    prod2_title: 'Буферные ролики', prod2_desc: 'Усиленные для зон загрузки шахт. Амортизация ударов и защита ленты.',
    prod3_title: 'Самоустанавливающиеся группы', prod3_desc: 'Автоматическое центрирование ленты. Снижение износа и простоев.',
    tag_wear: 'Износостойкие', tag_uni: 'Универсальные', tag_impact: 'Ударопрочные',
    tag_mine: 'Шахтные', tag_auto: 'Автоматические', tag_center: 'Центрирование',
    tech_title: 'Наши технологии', tech_sub: 'Графеновые материалы, подтвержденные испытаниями',
    t1_title: 'Материаловедение графена', t1_desc: 'Графеновые нанопластинки создают многослойную защиту.',
    t2_title: 'Автоматизированное производство', t2_desc: 'Роботизированные линии, точность ±0.1 мм.',
    t3_title: 'Испытания на прочность', t3_desc: 'Износостойкость +300%, коррозия +400%, эластичность при −40°C.',
    t4_title: 'Патенты и сертификаты', t4_desc: 'ISO 9001:2015, CE, EAC. Международные патенты.',
    proj_title: 'Реализованные проекты', proj_sub: 'Центральная Азия — наши ключевые проекты',
    proj1_title: 'Угольная шахта, Казахстан', proj1_desc: 'Полная замена роликов на графеновые. Срок службы с 8 до 24 мес.',
    proj2_title: 'Цементный завод, Узбекистан', proj2_desc: 'Коррозионностойкие ролики. Экономия 40% в год.',
    proj3_title: 'ГРК, Кыргызстан', proj3_desc: 'Морозостойкие ролики для высокогорья. Работа при −35°C.',
    about_title: 'О компании',
    about_p1: 'Мы — международная компания по производству конвейерных компонентов из графеновых композитных материалов.',
    about_p2: 'Комплексные трансграничные услуги: подбор, техсопровождение, таможня.',
    stat1: 'м² производства', stat2: 'реализованных проектов', stat3: 'стран экспорта', stat4: 'CE · EAC',
    serv_title: 'Экспортный сервис', serv_sub: 'Полный цикл поддержки внешнеторговых операций',
    s1_title: 'Индивидуальное изготовление', s1_desc: 'Ролики по вашим размерам и чертежам.',
    s2_title: 'Документация на русском', s2_desc: 'Паспорта, сертификаты, таможня.',
    s3_title: 'Логистика в ЦА', s3_desc: 'Авто-, ж/д и морские перевозки для ЦА.',
    s4_title: 'Гарантия и сервис', s4_desc: 'Послепродажное обслуживание. Выездная поддержка.',
    s5_title: 'Оптовые скидки', s5_desc: 'Спецусловия для дилеров.',
    s6_title: 'PDF-каталог', s6_desc: 'Скачайте каталог на русском или английском.',
    s6_btn: '📥 Скачать PDF',
    news_title: 'Новости и обновления', news_sub: 'Отраслевые новости',
    n_date1: '15.04.2026', n1_title: 'Морозостойкие ролики в Казахстан', n1_desc: '5000 комплектов для шахты в Караганде.',
    n_date2: '02.04.2026', n2_title: 'Новая линия производства', n2_desc: 'Мощность +40%, поставка до 15 дней.',
    n_date3: '18.03.2026', n3_title: 'Сертификация EAC', n3_desc: 'Сертификат ЕАЭС на всю линейку.',
    contact_title: 'Свяжитесь с нами', contact_sub: 'Готовы обсудить ваш проект. Отвечаем в течение 2 часов',
    cont_phone: 'Телефон', cont_wa: 'WhatsApp', cont_email: 'Email', cont_tg: 'Telegram',
    footer_p: 'Графеновые композитные ролики для Центральной Азии',
  },
  en: {
    nav_home: 'Home', nav_prod: 'Products', nav_tech: 'Technology',
    nav_proj: 'Projects', nav_about: 'About Us', nav_serv: 'Service',
    nav_news: 'News', nav_cont: 'Contact',
    hero_title: '<span>Graphene Roller</span><br>Wear-Resistant & Anti-Corrosion',
    hero_desc: 'High-strength graphene composite rollers for harsh Central Asian conditions. Frost resistance to −40°C, full sealing.',
    hero_btn1: 'Product Catalog', hero_btn2: 'Free Inquiry',
    benefits_title: 'Key Benefits',
    b1_title: 'Wear Resistance +300%', b1_desc: 'Graphene reinforcement triples service life',
    b2_title: 'Full Sealing', b2_desc: 'Dust and water protection for open pits and mines',
    b3_title: 'Frost −40°C', b3_desc: 'Adapted for harsh Central Asian winters',
    b4_title: 'Maintenance Free', b4_desc: 'Reduced operating costs at mines and plants',
    home_form_title: 'Custom Quote', home_form_sub: 'Leave a request — we will find the solution',
    form_name: 'Full Name', form_country: 'Country', form_phone: 'Phone / WhatsApp',
    form_email: 'Email', form_product: 'Product Type', form_msg: 'Quantity / Requirements',
    form_msg_ph: 'Quantity, dimensions...', form_btn: '📩 Send Inquiry',
    p1: 'Standard Rollers', p2: 'Buffer Rollers', p3: 'Self-Aligning',
    p4: 'Anti-Corrosion', p5: 'Frost-Resistant', p6: 'Full Set',
    global_title: 'Global Presence', global_sub: 'Central Asia is our main region',
    kz: '🇰🇿 Kazakhstan', uz: '🇺🇿 Uzbekistan', kg: '🇰🇬 Kyrgyzstan', tj: '🇹🇯 Tajikistan', tm: '🇹🇲 Turkmenistan',
    prod_title: 'Product Catalog', prod_sub: 'Complete range of graphene rollers',
    prod1_title: 'Standard Trough Rollers', prod1_desc: 'General purpose rollers with graphene reinforcement. 2–3x longer service life.',
    prod2_title: 'Buffer Rollers', prod2_desc: 'Reinforced for mine loading zones. Impact absorption and belt protection.',
    prod3_title: 'Self-Aligning Groups', prod3_desc: 'Automatic belt centering. Reduced wear and downtime.',
    tag_wear: 'Wear-Resistant', tag_uni: 'Universal', tag_impact: 'Impact-Resistant',
    tag_mine: 'Mining', tag_auto: 'Automatic', tag_center: 'Centering',
    tech_title: 'Our Technology', tech_sub: 'Graphene materials confirmed by testing',
    t1_title: 'Graphene Material Science', t1_desc: 'Graphene nanoplatelets create multi-layer protection.',
    t2_title: 'Automated Production', t2_desc: 'Robotic lines, precision ±0.1mm.',
    t3_title: 'Strength Testing', t3_desc: 'Wear +300%, corrosion +400%, elasticity at −40°C.',
    t4_title: 'Patents & Certificates', t4_desc: 'ISO 9001:2015, CE, EAC.',
    proj_title: 'Completed Projects', proj_sub: 'Central Asia — our key projects',
    proj1_title: 'Coal Mine, Kazakhstan', proj1_desc: 'Full graphene replacement. Service life 8→24 months.',
    proj2_title: 'Cement Plant, Uzbekistan', proj2_desc: 'Anti-corrosion rollers. 40% savings.',
    proj3_title: 'Mining Complex, Kyrgyzstan', proj3_desc: 'Frost-resistant for high altitude. −35°C.',
    about_title: 'About Us',
    about_p1: 'We make conveyor components from graphene composite materials.',
    about_p2: 'Cross-border services: sizing, technical support, customs.',
    stat1: 'm² facilities', stat2: 'completed projects', stat3: 'export countries', stat4: 'CE · EAC',
    serv_title: 'Export Service', serv_sub: 'Full support cycle for foreign trade',
    s1_title: 'Custom Manufacturing', s1_desc: 'Rollers to your dimensions.',
    s2_title: 'Russian Documentation', s2_desc: 'Passports, certificates, customs.',
    s3_title: 'CA Logistics', s3_desc: 'Truck, rail and sea transport.',
    s4_title: 'Warranty & Service', s4_desc: 'After-sales. On-site support.',
    s5_title: 'Wholesale Discounts', s5_desc: 'Special terms for dealers.',
    s6_title: 'PDF Catalog', s6_desc: 'Download in Russian or English.',
    s6_btn: '📥 Download PDF',
    news_title: 'News & Updates', news_sub: 'Industry news',
    n_date1: 'Apr 15, 2026', n1_title: 'Frost rollers to Kazakhstan', n1_desc: '5,000 sets for Karaganda mine.',
    n_date2: 'Apr 2, 2026', n2_title: 'New production line', n2_desc: 'Capacity +40%, delivery 15 days.',
    n_date3: 'Mar 18, 2026', n3_title: 'EAC Certification', n3_desc: 'EAEU certificate for all products.',
    contact_title: 'Contact Us', contact_sub: 'Reply within 2 hours',
    cont_phone: 'Phone', cont_wa: 'WhatsApp', cont_email: 'Email', cont_tg: 'Telegram',
    footer_p: 'Graphene composite rollers for Central Asia',
  },
  kk: {
    nav_home: 'Басты бет', nav_prod: 'Өнімдер', nav_tech: 'Технологиялар',
    nav_proj: 'Жобалар', nav_about: 'Біз туралы', nav_serv: 'Қызметтер',
    nav_news: 'Жаңалықтар', nav_cont: 'Байланыс',
    hero_title: '<span>Graphene Roller</span><br>Тозуға төзімді & Коррозияға қарсы',
    hero_desc: 'Орталық Азияға арналған графенді композиттік роликтер. −40°C аяз, толық герметизация.',
    hero_btn1: 'Өнімдер каталогы', hero_btn2: 'Тегін сұраныс',
    benefits_title: 'Негізгі артықшылықтар',
    b1_title: 'Тозуға төзімділік +300%', b1_desc: 'Графен қызмет мерзімін 3 есе арттырады',
    b2_title: 'Толық герметизация', b2_desc: 'Шаң мен судан қорғаныс',
    b3_title: '−40°C аязға төзімді', b3_desc: 'Орталық Азияның суық қыстарына бейімделген',
    b4_title: 'Қызмет көрсетусіз', b4_desc: 'Шығындарды азайту',
    home_form_title: 'Жеке ұсыныс', home_form_sub: 'Өтініш қалдырыңыз — біз таңдаймыз',
    form_name: 'Аты-жөні', form_country: 'Ел', form_phone: 'Телефон / WhatsApp',
    form_email: 'Email', form_product: 'Өнім түрі', form_msg: 'Көлемі / талаптар',
    form_msg_ph: 'Саны, өлшемдері...', form_btn: '📩 Сұраныс жіберу',
    p1: 'Стандартты роликтер', p2: 'Буферлік роликтер', p3: 'Өздігінен орнатылатын',
    p4: 'Коррозияға төзімді', p5: 'Аязға төзімді', p6: 'Толық жинақ',
    global_title: 'Әлемдік қатысу', global_sub: 'Орталық Азия — негізгі аймақ',
    kz: '🇰🇿 Қазақстан', uz: '🇺🇿 Өзбекстан', kg: '🇰🇬 Қырғызстан', tj: '🇹🇯 Тәжікстан', tm: '🇹🇲 Түрікменстан',
    prod_title: 'Өнімдер каталогы', prod_sub: 'Графенді роликтердің ассортименті',
    prod1_title: 'Стандартты ойықты роликтер', prod1_desc: 'Графенді күшейтілген роликтер. Қызмет мерзімі 2–3 есе жоғары.',
    prod2_title: 'Буферлік роликтер', prod2_desc: 'Шахталардың тиеу аймағына арналған. Соққыдан қорғайды.',
    prod3_title: 'Өздігінен орнатылатын топтар', prod3_desc: 'Лентаны автоматты центрлеу. Тозуды азайту.',
    tag_wear: 'Тозуға төзімді', tag_uni: 'Әмбебап', tag_impact: 'Соққыға төзімді',
    tag_mine: 'Шахталық', tag_auto: 'Автоматты', tag_center: 'Центрлеу',
    tech_title: 'Технологиялар', tech_sub: 'Графен материалдары сынақтан өткен',
    t1_title: 'Графен материалтану', t1_desc: 'Көпқабатты қорғаныс.',
    t2_title: 'Автоматты өндіріс', t2_desc: 'Роботты желілер, дәлдік ±0.1 мм.',
    t3_title: 'Беріктік сынақтары', t3_desc: 'Тозу +300%, коррозия +400%, −40°C серпімділік.',
    t4_title: 'Патенттер', t4_desc: 'ISO 9001:2015, CE, EAC.',
    proj_title: 'Жобалар', proj_sub: 'Орталық Азия — негізгі жобалар',
    proj1_title: 'Көмір шахтасы, Қазақстан', proj1_desc: 'Графенді роликтерге ауыстыру. 8→24 ай.',
    proj2_title: 'Цемент зауыты, Өзбекстан', proj2_desc: 'Коррозияға төзімді. 40% үнемдеу.',
    proj3_title: 'Тау-кен комбинаты, Қырғызстан', proj3_desc: 'Аязға төзімді. −35°C жұмыс.',
    about_title: 'Біз туралы',
    about_p1: 'Графенді композиттерден конвейер компоненттерін өндіруші компания.',
    about_p2: 'Трансшекаралық қызметтер: өлшемдер, техқолдау, кеден.',
    stat1: 'м² өндіріс', stat2: 'жоба', stat3: 'ел', stat4: 'CE · EAC',
    serv_title: 'Экспорттық қызмет', serv_sub: 'Сыртқы сауданы толық қолдау',
    s1_title: 'Жеке өндіріс', s1_desc: 'Сіздің өлшемдеріңіз бойынша.',
    s2_title: 'Құжаттама', s2_desc: 'Паспорттар, сертификаттар, кеден.',
    s3_title: 'Логистика', s3_desc: 'ОА-ға авто, теміржол, теңіз тасымалы.',
    s4_title: 'Кепілдік', s4_desc: 'Сатудан кейінгі қызмет.',
    s5_title: 'Жеңілдіктер', s5_desc: 'Дилерлерге арнайы шарттар.',
    s6_title: 'PDF каталог', s6_desc: 'Орыс немесе ағылшын тілінде.',
    s6_btn: '📥 PDF жүктеу',
    news_title: 'Жаңалықтар', news_sub: 'Сала жаңалықтары',
    n_date1: '15.04.2026', n1_title: 'Аязға төзімді роликтер Қазақстанға', n1_desc: '5000 жинақ, Қарағанды.',
    n_date2: '02.04.2026', n2_title: 'Жаңа өндіріс желісі', n2_desc: 'Қуат +40%, жеткізу 15 күн.',
    n_date3: '18.03.2026', n3_title: 'EAC сертификациясы', n3_desc: 'ЕАО сертификаты.',
    contact_title: 'Байланыс', contact_sub: '2 сағат ішінде жауап',
    cont_phone: 'Телефон', cont_wa: 'WhatsApp', cont_email: 'Email', cont_tg: 'Telegram',
    footer_p: 'Орталық Азияға арналған графенді роликтер',
  }
};

const i18nJson = JSON.stringify(i18n);

const html = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Graphene Roller — Графеновые композитные ролики</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:Inter,sans-serif;background:#0a0a0f;color:#e0e0e0;overflow-x:hidden}
a{text-decoration:none;color:inherit}
.lang-toggle{position:fixed;top:16px;right:16px;z-index:1000;display:flex;gap:4px;background:rgba(255,255,255,.06);padding:4px;border-radius:50px;border:1px solid rgba(255,255,255,.1);backdrop-filter:blur(20px)}
.lang-btn{padding:8px 16px;border:none;border-radius:50px;cursor:pointer;font-size:13px;font-weight:600;transition:all .25s;background:transparent;color:#666;font-family:inherit}
.lang-btn.active{background:linear-gradient(135deg,#00c8ff,#64ffda);color:#000}.lang-btn:hover:not(.active){color:#fff}
.wa-float{position:fixed;bottom:28px;right:28px;z-index:999;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#25D366,#128C7E);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(37,211,102,.35);transition:all .3s;cursor:pointer;font-size:28px;color:#fff}
.wa-float:hover{transform:scale(1.1);box-shadow:0 6px 28px rgba(37,211,102,.55)}
nav{position:fixed;top:0;left:0;right:0;z-index:999;background:rgba(10,10,15,.92);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.06);padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:62px}
.logo{font-size:19px;font-weight:800;background:linear-gradient(135deg,#00c8ff,#64ffda);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.nav-links{display:flex;gap:3px;flex-wrap:wrap}
.nav-links a{padding:6px 12px;border-radius:50px;font-size:12px;font-weight:500;transition:all .25s;color:#888;white-space:nowrap}
.nav-links a:hover,.nav-links a.active{background:rgba(255,255,255,.09);color:#fff}
.hamburger{display:none;flex-direction:column;gap:4px;cursor:pointer;padding:6px}
.hamburger span{width:24px;height:2px;background:#fff;border-radius:2px;transition:all .3s}
@media(max-width:860px){.nav-links{display:none;position:fixed;top:62px;left:0;right:0;background:rgba(10,10,15,.98);flex-direction:column;padding:18px;gap:6px;border-bottom:1px solid rgba(255,255,255,.06)}.nav-links.open{display:flex}.hamburger{display:flex}}
.page{display:none;padding-top:62px}.page.active{display:block}
section{padding:64px 24px;max-width:1140px;margin:0 auto}
@media(max-width:600px){section{padding:44px 14px}}
h1{font-size:42px;font-weight:800;line-height:1.12;margin-bottom:16px}
@media(max-width:600px){h1{font-size:28px}}
h2{font-size:28px;font-weight:700;margin-bottom:20px;text-align:center}
h2 span{background:linear-gradient(135deg,#00c8ff,#64ffda);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
h3{font-size:17px;font-weight:600;margin-bottom:10px}
.subtitle{font-size:15px;color:#888;margin-bottom:26px;text-align:center;line-height:1.5}
.btn{display:inline-block;padding:13px 32px;border-radius:50px;font-size:14px;font-weight:600;transition:all .25s;cursor:pointer;border:none;background:linear-gradient(135deg,#00c8ff,#64ffda);color:#000;font-family:inherit}
.btn:hover{transform:scale(1.04);box-shadow:0 0 36px rgba(0,200,255,.28)}
.btn-outline{background:transparent;border:2px solid rgba(0,200,255,.5);color:#00c8ff}
.btn-outline:hover{border-color:#00c8ff;background:rgba(0,200,255,.1)}
.btn-wa{background:linear-gradient(135deg,#25D366,#128C7E);color:#fff}
.btn-group{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:110px 24px 60px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920') center/cover;opacity:.2;z-index:-1}
.hero::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(0,200,255,.05),transparent 70%);z-index:-1}
.hero h1{font-size:48px;max-width:800px;margin:0 auto 14px}
@media(max-width:600px){.hero h1{font-size:30px}}
.hero h1 span{background:linear-gradient(135deg,#00c8ff,#64ffda);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero p{font-size:17px;color:#aaa;max-width:620px;margin:0 auto 22px;line-height:1.6}
.hero-phone{display:inline-block;padding:10px 24px;border-radius:50px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);font-weight:600;font-size:15px;transition:all .25s;margin-top:14px}
.hero-phone:hover{border-color:#00c8ff}
.benefits-grid,.tech-grid,.service-grid,.news-grid,.products-grid,.projects-grid{display:grid;gap:18px}
.benefits-grid{grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}
.products-grid{grid-template-columns:repeat(auto-fit,minmax(500px,1fr))}
.tech-grid,.service-grid{grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
.projects-grid,.news-grid{grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}
.benefit-card,.tech-card,.project-card,.service-card,.news-card,.contact-item{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:14px;transition:all .25s}
.benefit-card,.tech-card,.service-card,.news-card{padding:26px 20px}
.product-card,.project-card{overflow:hidden;border-radius:14px}
.product-card:hover,.project-card:hover,.benefit-card:hover,.tech-card:hover,.service-card:hover,.news-card:hover{border-color:rgba(0,200,255,.3);transform:translateY(-3px)}
.benefit-card{text-align:center}
.benefit-icon{font-size:34px;margin-bottom:10px}
.benefit-card p,.tech-card p,.service-card p,.product-body p,.project-body p,.news-card p{font-size:13px;color:#888;line-height:1.5;margin-top:5px}
.product-img{width:100%;height:480px;object-fit:cover;display:block;border-radius:14px 14px 0 0}
.product-body{padding:18px}
.product-body h3{font-size:15px;margin-bottom:5px}
.product-tags{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}
.product-tags span{padding:3px 10px;border-radius:50px;font-size:11px;background:rgba(0,200,255,.1);color:#64ffda}
.project-img{height:150px;background:linear-gradient(135deg,#0a2463,#1a1a2e);display:flex;align-items:center;justify-content:center;font-size:42px;border-radius:14px 14px 0 0}
.project-body{padding:18px;background:rgba(255,255,255,.03)}
.project-body h3{font-size:15px}
.service-num{font-size:26px;font-weight:800;color:#00c8ff;margin-bottom:6px}
.news-date{font-size:11px;color:#666;margin-bottom:5px}
.about-content{max-width:680px;margin:0 auto}
.about-content p{font-size:14px;color:#aaa;line-height:1.7;margin-bottom:12px}
.about-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:18px;margin-top:28px;text-align:center}
.stat-num{font-size:28px;font-weight:800;background:linear-gradient(135deg,#00c8ff,#64ffda);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.stat-label{font-size:12px;color:#888;margin-top:4px}
.contact-form{max-width:540px;margin:0 auto}
.form-group{margin-bottom:14px}
.form-group label{display:block;font-size:13px;color:#aaa;margin-bottom:4px;font-weight:500}
.form-group input,.form-group select,.form-group textarea{width:100%;padding:11px 15px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fff;font-size:14px;font-family:inherit;outline:none;transition:all .25s}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:#00c8ff;box-shadow:0 0 16px rgba(0,200,255,.08)}
.form-group select{appearance:none;-webkit-appearance:none;cursor:pointer}
.form-group select option{background:#0a0a0f;color:#fff}
.form-group textarea{resize:vertical;min-height:80px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
@media(max-width:600px){.form-row{grid-template-columns:1fr}}
.contact-info{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;margin-top:44px}
.contact-item{text-align:center;padding:18px}
.contact-item .icon{font-size:26px;margin-bottom:6px}
.contact-item h4{font-size:12px;color:#888;margin-bottom:3px}
.contact-item p{font-weight:600;font-size:13px}
.contact-item a{color:#00c8ff}
footer{border-top:1px solid rgba(255,255,255,.06);padding:28px;text-align:center}
footer p{font-size:12px;color:#666;margin-top:6px}
footer a{color:#00c8ff}
</style>
</head>
<body>

<div class="lang-toggle">
  <button class="lang-btn active" onclick="setLang('ru')">RU</button>
  <button class="lang-btn" onclick="setLang('en')">EN</button>
  <button class="lang-btn" onclick="setLang('kk')">KZ</button>
</div>

<a href="https://wa.me/77022655423" target="_blank" class="wa-float" title="WhatsApp">💬</a>

<nav>
  <div class="logo">✦ GRAPHENE ROLLER</div>
  <div class="hamburger" onclick="toggleMenu()"><span></span><span></span><span></span></div>
  <div class="nav-links" id="navLinks">
    <a href="#home" class="active" data-page="home" onclick="navigate('home')" data-i18n="nav_home"></a>
    <a href="#products" data-page="products" onclick="navigate('products')" data-i18n="nav_prod"></a>
    <a href="#technology" data-page="technology" onclick="navigate('technology')" data-i18n="nav_tech"></a>
    <a href="#projects" data-page="projects" onclick="navigate('projects')" data-i18n="nav_proj"></a>
    <a href="#about" data-page="about" onclick="navigate('about')" data-i18n="nav_about"></a>
    <a href="#service" data-page="service" onclick="navigate('service')" data-i18n="nav_serv"></a>
    <a href="#news" data-page="news" onclick="navigate('news')" data-i18n="nav_news"></a>
    <a href="#contact" data-page="contact" onclick="navigate('contact')" data-i18n="nav_cont"></a>
  </div>
</nav>

<div id="home" class="page active">
  <section class="hero">
    <div>
      <h1 data-i18n="hero_title"></h1>
      <p data-i18n="hero_desc"></p>
      <div class="btn-group">
        <a href="#products" class="btn" onclick="navigate('products')" data-i18n="hero_btn1"></a>
        <a href="#contact" class="btn btn-outline" onclick="navigate('contact')" data-i18n="hero_btn2"></a>
        <a href="https://wa.me/77022655423" target="_blank" class="btn btn-wa">💬 WhatsApp</a>
      </div>
      <div><a href="tel:+77022655423" class="hero-phone">📞 +7 702 265 5423</a></div>
    </div>
  </section>

  <section>
    <h2><span data-i18n="benefits_title"></span></h2>
    <div class="benefits-grid">
      <div class="benefit-card"><div class="benefit-icon">⚡</div><h3 data-i18n="b1_title"></h3><p data-i18n="b1_desc"></p></div>
      <div class="benefit-card"><div class="benefit-icon">🛡️</div><h3 data-i18n="b2_title"></h3><p data-i18n="b2_desc"></p></div>
      <div class="benefit-card"><div class="benefit-icon">❄️</div><h3 data-i18n="b3_title"></h3><p data-i18n="b3_desc"></p></div>
      <div class="benefit-card"><div class="benefit-icon">🔧</div><h3 data-i18n="b4_title"></h3><p data-i18n="b4_desc"></p></div>
    </div>
  </section>

  <section style="background:rgba(0,200,255,.02);border-radius:20px;margin:0 24px 50px;max-width:540px" class="contact-form">
    <h2 style="margin-bottom:10px"><span data-i18n="home_form_title"></span></h2>
    <p class="subtitle" data-i18n="home_form_sub"></p>
    <form onsubmit="submitForm(event)">
      <div class="form-row">
        <div class="form-group"><label data-i18n="form_name"></label><input type="text" id="home-name" required></div>
        <div class="form-group"><label data-i18n="form_country"></label><input type="text" id="home-country" required></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label data-i18n="form_phone"></label><input type="tel" id="home-phone" required></div>
        <div class="form-group"><label data-i18n="form_email"></label><input type="email" id="home-email"></div>
      </div>
      <div class="form-group"><label data-i18n="form_product"></label>
        <select id="home-product">
          <option value="standard" data-i18n="p1"></option>
          <option value="buffer" data-i18n="p2"></option>
          <option value="selfalign" data-i18n="p3"></option>
          <option value="anticorr" data-i18n="p4"></option>
          <option value="frost" data-i18n="p5"></option>
          <option value="fullset" data-i18n="p6"></option>
        </select>
      </div>
      <div class="form-group"><label data-i18n="form_msg"></label><textarea id="home-message" data-i18n-placeholder="form_msg_ph"></textarea></div>
      <button type="submit" class="btn" style="width:100%" data-i18n="form_btn"></button>
    </form>
  </section>

  <section style="padding-top:0;text-align:center">
    <h2><span data-i18n="global_title"></span></h2>
    <p class="subtitle" data-i18n="global_sub"></p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:20px;font-size:16px">
      <span data-i18n="kz"></span>
      <span data-i18n="uz"></span>
      <span data-i18n="kg"></span>
      <span data-i18n="tj"></span>
      <span data-i18n="tm"></span>
    </div>
  </section>
</div>

<div id="products" class="page">
  <section>
    <h2><span data-i18n="prod_title"></span></h2>
    <p class="subtitle" data-i18n="prod_sub"></p>
    <div class="products-grid">
      <div class="product-card">
        <img src="https://ardanmykametkan-eng.github.io/graphene-roller-site/images/roller-single.jpg" alt="Standard Roller" class="product-img" loading="lazy">
        <div class="product-body">
          <h3 data-i18n="prod1_title"></h3>
          <p data-i18n="prod1_desc"></p>
          <div class="product-tags"><span data-i18n="tag_wear"></span><span data-i18n="tag_uni"></span></div>
        </div>
      </div>
      <div class="product-card">
        <img src="https://ardanmykametkan-eng.github.io/graphene-roller-site/images/roller-set.jpg" alt="Buffer Rollers" class="product-img" loading="lazy">
        <div class="product-body">
          <h3 data-i18n="prod2_title"></h3>
          <p data-i18n="prod2_desc"></p>
          <div class="product-tags"><span data-i18n="tag_impact"></span><span data-i18n="tag_mine"></span></div>
        </div>
      </div>
      <div class="product-card">
        <img src="https://ardanmykametkan-eng.github.io/graphene-roller-site/images/roller-big.jpg" alt="Self-Aligning Group" class="product-img" loading="lazy">
        <div class="product-body">
          <h3 data-i18n="prod3_title"></h3>
          <p data-i18n="prod3_desc"></p>
          <div class="product-tags"><span data-i18n="tag_auto"></span><span data-i18n="tag_center"></span></div>
        </div>
      </div>
    </div>
  </section>
</div>

<div id="technology" class="page">
  <section>
    <h2><span data-i18n="tech_title"></span></h2>
    <p class="subtitle" data-i18n="tech_sub"></p>
    <div class="tech-grid">
      <div class="tech-card"><h3>🔬 <span data-i18n="t1_title"></span></h3><p data-i18n="t1_desc"></p></div>
      <div class="tech-card"><h3>⚙️ <span data-i18n="t2_title"></span></h3><p data-i18n="t2_desc"></p></div>
      <div class="tech-card"><h3>🧪 <span data-i18n="t3_title"></span></h3><p data-i18n="t3_desc"></p></div>
      <div class="tech-card"><h3>🏅 <span data-i18n="t4_title"></span></h3><p data-i18n="t4_desc"></p></div>
    </div>
  </section>
</div>

<div id="projects" class="page">
  <section>
    <h2><span data-i18n="proj_title"></span></h2>
    <p class="subtitle" data-i18n="proj_sub"></p>
    <div class="projects-grid">
      <div class="project-card"><div class="project-img">⛏️</div><div class="project-body"><h3 data-i18n="proj1_title"></h3><p data-i18n="proj1_desc"></p></div></div>
      <div class="project-card"><div class="project-img">🏭</div><div class="project-body"><h3 data-i18n="proj2_title"></h3><p data-i18n="proj2_desc"></p></div></div>
      <div class="project-card"><div class="project-img">🗻</div><div class="project-body"><h3 data-i18n="proj3_title"></h3><p data-i18n="proj3_desc"></p></div></div>
    </div>
  </section>
</div>

<div id="about" class="page">
  <section>
    <h2><span data-i18n="about_title"></span></h2>
    <div class="about-content">
      <p data-i18n="about_p1"></p>
      <p data-i18n="about_p2"></p>
      <div class="about-stats">
        <div><div class="stat-num">50000+</div><div class="stat-label" data-i18n="stat1"></div></div>
        <div><div class="stat-num">200+</div><div class="stat-label" data-i18n="stat2"></div></div>
        <div><div class="stat-num">15+</div><div class="stat-label" data-i18n="stat3"></div></div>
        <div><div class="stat-num">ISO</div><div class="stat-label" data-i18n="stat4"></div></div>
      </div>
    </div>
  </section>
</div>

<div id="service" class="page">
  <section>
    <h2><span data-i18n="serv_title"></span></h2>
    <p class="subtitle" data-i18n="serv_sub"></p>
    <div class="service-grid">
      <div class="service-card"><div class="service-num">01</div><h3 data-i18n="s1_title"></h3><p data-i18n="s1_desc"></p></div>
      <div class="service-card"><div class="service-num">02</div><h3 data-i18n="s2_title"></h3><p data-i18n="s2_desc"></p></div>
      <div class="service-card"><div class="service-num">03</div><h3 data-i18n="s3_title"></h3><p data-i18n="s3_desc"></p></div>
      <div class="service-card"><div class="service-num">04</div><h3 data-i18n="s4_title"></h3><p data-i18n="s4_desc"></p></div>
      <div class="service-card"><div class="service-num">05</div><h3 data-i18n="s5_title"></h3><p data-i18n="s5_desc"></p></div>
      <div class="service-card"><div class="service-num">06</div><h3 data-i18n="s6_title"></h3><p data-i18n="s6_desc"></p><a href="#" style="display:inline-block;margin-top:8px;padding:6px 16px;border-radius:50px;background:rgba(0,200,255,.1);border:1px solid rgba(0,200,255,.3);font-size:12px;color:#fff" data-i18n="s6_btn"></a></div>
    </div>
  </section>
</div>

<div id="news" class="page">
  <section>
    <h2><span data-i18n="news_title"></span></h2>
    <p class="subtitle" data-i18n="news_sub"></p>
    <div class="news-grid">
      <div class="news-card"><div class="news-date" data-i18n="n_date1"></div><h3 data-i18n="n1_title"></h3><p data-i18n="n1_desc"></p></div>
      <div class="news-card"><div class="news-date" data-i18n="n_date2"></div><h3 data-i18n="n2_title"></h3><p data-i18n="n2_desc"></p></div>
      <div class="news-card"><div class="news-date" data-i18n="n_date3"></div><h3 data-i18n="n3_title"></h3><p data-i18n="n3_desc"></p></div>
    </div>
  </section>
</div>

<div id="contact" class="page">
  <section>
    <h2><span data-i18n="contact_title"></span></h2>
    <p class="subtitle" data-i18n="contact_sub"></p>
    <div class="contact-form">
      <form onsubmit="submitForm(event)">
        <div class="form-row">
          <div class="form-group"><label data-i18n="form_name"></label><input type="text" id="contact-name" required></div>
          <div class="form-group"><label data-i18n="form_country"></label><input type="text" id="contact-country" required></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label data-i18n="form_phone"></label><input type="tel" id="contact-phone" required></div>
          <div class="form-group"><label data-i18n="form_email"></label><input type="email" id="contact-email"></div>
        </div>
        <div class="form-group"><label data-i18n="form_product"></label>
          <select id="contact-product">
            <option value="standard" data-i18n="p1"></option>
            <option value="buffer" data-i18n="p2"></option>
            <option value="selfalign" data-i18n="p3"></option>
            <option value="anticorr" data-i18n="p4"></option>
            <option value="frost" data-i18n="p5"></option>
            <option value="fullset" data-i18n="p6"></option>
          </select>
        </div>
        <div class="form-group"><label data-i18n="form_msg"></label><textarea id="contact-message" data-i18n-placeholder="form_msg_ph" required></textarea></div>
        <button type="submit" class="btn" style="width:100%" data-i18n="form_btn"></button>
      </form>
    </div>
    <div class="contact-info">
      <div class="contact-item"><div class="icon">📞</div><h4 data-i18n="cont_phone"></h4><p><a href="tel:+77022655423">+7 702 265 5423</a></p></div>
      <div class="contact-item"><div class="icon">💬</div><h4 data-i18n="cont_wa"></h4><p><a href="https://wa.me/77022655423" target="_blank">+7 702 265 5423</a></p></div>
      <div class="contact-item"><div class="icon">📧</div><h4 data-i18n="cont_email"></h4><p><a href="mailto:info@grapheneroller.com">info@grapheneroller.com</a></p></div>
      <div class="contact-item"><div class="icon">🌐</div><h4 data-i18n="cont_tg"></h4><p><a href="https://t.me/grapheneroller">@grapheneroller</a></p></div>
    </div>
  </section>
</div>

<footer>
  <div class="logo" style="font-size:18px;margin-bottom:12px">✦ GRAPHENE ROLLER</div>
  <p data-i18n="footer_p"></p>
  <p style="margin-top:10px">📞 <a href="tel:+77022655423" style="color:#00c8ff">+7 702 265 5423</a> &nbsp;·&nbsp; 💬 <a href="https://wa.me/77022655423" target="_blank" style="color:#25D366">WhatsApp</a></p>
  <p style="margin-top:12px;font-size:11px;color:#444">&copy; 2026 Graphene Roller. All rights reserved.</p>
</footer>

<script>
const i18n = ${i18nJson};
let currentLang = 'ru';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.lang-btn').forEach(b => {
    if (b.textContent.trim().toLowerCase() === lang.toLowerCase()) b.classList.add('active');
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang] && i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (i18n[lang] && i18n[lang][key]) {
      el.placeholder = i18n[lang][key];
    }
  });
}

function navigate(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const link = document.querySelector('.nav-links a[data-page="'+pageId+'"]');
  if (link) link.classList.add('active');
  document.getElementById('navLinks').classList.remove('open');
  window.scrollTo({top:0,behavior:'smooth'});
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const orig = btn.textContent;
  btn.textContent = '⏳...';
  btn.disabled = true;
  const data = {};
  e.target.querySelectorAll('input,select,textarea').forEach(i => { if(i.id) data[i.id]=i.value; });
  const msg = '📩 Заявка с Graphene Roller\\nФИО: '+(data['contact-name']||data['home-name']||'—')+'\\nСтрана: '+(data['contact-country']||data['home-country']||'—')+'\\nТелефон: '+(data['contact-phone']||data['home-phone']||'—')+'\\nТребования: '+(data['contact-message']||data['home-message']||'—');
  fetch('https://api.telegram.org/bot8747143105:AAFsACJsDNcLyYsLLLq3yko-YwBKwk_tXOs/sendMessage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:1021284482,text:msg})}).then(r=>r.json()).then(()=>{btn.textContent='✓';setTimeout(()=>{btn.textContent=orig;btn.disabled=false;e.target.reset();setLang(currentLang)},2000)}).catch(()=>{btn.textContent='✗';setTimeout(()=>{btn.textContent=orig;btn.disabled=false},2000)});
}

setLang('ru');
</script>
</body>
</html>`;

fs.writeFileSync('index.html', html);
console.log('OK: ' + (html.length/1024).toFixed(0) + ' KB');
