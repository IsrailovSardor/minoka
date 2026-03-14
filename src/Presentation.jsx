import { useState, useEffect, useCallback } from 'react'
import './presentation.css'

const TOTAL = 14

export default function Presentation() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((n) => {
    if (n >= 0 && n < TOTAL) setCurrent(n)
  }, [])

  const go = useCallback((dir) => {
    setCurrent((prev) => {
      const next = prev + dir
      return next >= 0 && next < TOTAL ? next : prev
    })
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(1)
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  useEffect(() => {
    let startX = 0
    const onStart = (e) => { startX = e.touches[0].clientX }
    const onEnd = (e) => {
      const diff = startX - e.changedTouches[0].clientX
      if (Math.abs(diff) > 50) go(diff > 0 ? 1 : -1)
    }
    window.addEventListener('touchstart', onStart)
    window.addEventListener('touchend', onEnd)
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [go])

  return (
    <>
      <div className="texture" />
      <div className="g-border" />
      <div className="g-corner gc-tl" />
      <div className="g-corner gc-tr" />
      <div className="g-corner gc-bl" />
      <div className="g-corner gc-br" />

      <div className="slide-counter">
        <span className="current">{String(current + 1).padStart(2, '0')}</span> / {String(TOTAL).padStart(2, '0')}
      </div>

      <div className="slides-wrapper">

        {/* ═══ SLIDE 1: TITLE ═══ */}
        <div className={`slide s1${current === 0 ? ' active' : ''}`}>
          <div className="s1-gold-border" />
          <div className="s1-corner sc-tl" />
          <div className="s1-corner sc-tr" />
          <div className="s1-corner sc-bl" />
          <div className="s1-corner sc-br" />
          <div className="content-wrapper">
            <div className="logo-container">
              <img alt="EVERNEW Logo" className="logo-img" src="/ever.webp" />
            </div>
            <div className="gold-line-vertical" />
            <p className="brand-title">EVERNEW</p>
            <p className="cn">优点</p>
            <div className="gold-line-horizontal" />
            <p className="brand-subtitle">Премиальный жилой комплекс</p>
            <div className="address-text">
              <i className="fas fa-map-marker-alt" style={{ color: '#D4AF37' }} />
              <p>УЛ. МАЛДЫБАЕВА 259, БИШКЕК</p>
            </div>
          </div>
          <p className="year-badge">Est. 2026</p>
          <div className="pg-num">01</div>
        </div>

        {/* ═══ SLIDE 2: LOCATION ═══ */}
        <div className={`slide s2${current === 1 ? ' active' : ''}`}>
          <div className="s2-left">
            <div className="tag">EVERNEW &bull; Локация</div>
            <h2 className="stitle">Расположение</h2>
            <div className="sdivider" />
            <ul className="loc-points">
              <li><i className="fas fa-check" />Один из самых комфортных районов Бишкека</li>
              <li><i className="fas fa-check" />Удобная транспортная развязка</li>
              <li><i className="fas fa-check" />Тихий район с большими парками</li>
              <li><i className="fas fa-check" />Престижное расположение с перспективой роста</li>
              <li><i className="fas fa-check" />Экологичная локация для комфортной семейной жизни</li>
            </ul>
            <div className="loc-addr">
              <p><strong><i className="fas fa-map-pin" style={{ color: '#D4AF37', marginRight: 8 }} />ул. Малдыбаева 259</strong></p>
            </div>
          </div>
          <div className="s2-right">
            <img alt="Локация EVERNEW" className="s2-map-img" src="/location.jpg" />
          </div>
          <div className="pg-num">02</div>
        </div>

        {/* ═══ SLIDE 3: INFRASTRUCTURE ═══ */}
        <div className={`slide s3${current === 2 ? ' active' : ''}`}>
          <div className="s3-header">
            <div className="tag">EVERNEW &bull; Всё рядом</div>
            <h2 className="stitle">Инфраструктура района</h2>
            <div className="sdivider" />
          </div>
          <div className="s3-grid">
            <div className="infra-card">
              <div className="ic-icon"><i className="fas fa-graduation-cap" /></div>
              <div className="ic-title">Школы</div>
              <ul className="infra-list">
                <li className="sub-label">Государственные</li>
                <li>Школа №58</li>
                <li>Школа-гимназия №62</li>
                <li className="sub-label">Частные</li>
                <li>Oxford International School</li>
                <li>United World International School</li>
                <li>Tensai International School</li>
                <li>Ак-Тилек, Генум и др.</li>
              </ul>
            </div>
            <div className="infra-card">
              <div className="ic-icon"><i className="fas fa-university" /></div>
              <div className="ic-title">Университеты</div>
              <ul className="infra-list">
                <li>Манас</li>
                <li>КГТУ им. И. Раззакова</li>
                <li>КГМА им. И.К. Ахунбаева</li>
                <li>БГУ им. К. Карасаева</li>
                <li>КГУ им. И. Арабаева</li>
              </ul>
            </div>
            <div className="infra-card">
              <div className="ic-icon"><i className="fas fa-store" /></div>
              <div className="ic-title">Магазины и кафе</div>
              <ul className="infra-list">
                <li className="sub-label">Магазины</li>
                <li>ТЦ Ала-Арча</li>
                <li className="sub-label">Кафе и рестораны</li>
                <li>NAVAT</li>
                <li>Ходжа Насреддин</li>
                <li>Абстракт</li>
                <li>Мубарак</li>
              </ul>
            </div>
            <div className="infra-card">
              <div className="ic-icon"><i className="fas fa-heartbeat" /></div>
              <div className="ic-title">Медцентры</div>
              <ul className="infra-list">
                <li>Medi Plus</li>
                <li>MEDI</li>
                <li>Neoclinic</li>
                <li>Медцентр КГМА</li>
                <li>Unimed Clinic</li>
                <li>K.Clinic</li>
                <li>Мед центр Орто-Сай</li>
              </ul>
            </div>
            <div className="infra-card parks-card">
              <div className="ic-icon"><i className="fas fa-tree" /></div>
              <div className="ic-title">Парки рядом</div>
              <ul className="infra-list">
                <li>Ынтымак</li>
                <li>Парк Победы</li>
                <li>Дружбы</li>
                <li>Байтик</li>
                <li>Парк Адинай</li>
              </ul>
            </div>
          </div>
          <div className="pg-num">03</div>
        </div>

        {/* ═══ SLIDE 4: TERRITORY ═══ */}
        <div className={`slide s4${current === 3 ? ' active' : ''}`}>
          <div className="s4-left">
            <div className="tag">EVERNEW &bull; 5,2 га &bull; 9 блоков</div>
            <h2 className="stitle">Территория и<br />благоустройство</h2>
            <div className="sdivider" />
            <div className="feat-grid">
              {[
                ['fa-shield-alt', 'Закрытая территория', 'Видеонаблюдение и охрана'],
                ['fa-leaf', '40% озеленение', 'Зелёные зоны и аллеи'],
                ['fa-palette', '3 двора', 'Индивидуальный дизайн каждого'],
                ['fa-running', 'Спорт', 'Беговые дорожки и воркаут-зоны'],
                ['fa-child', 'Детские площадки', 'Безопасная среда для детей'],
                ['fa-glass-martini-alt', 'Лаунж-зоны', 'Мини-бар для резидентов'],
                ['fa-swimming-pool', 'Бассейн', 'С раздвижной крышей'],
                ['fa-key', 'Доступ во все дворы', 'Для всех жильцов комплекса'],
              ].map(([icon, title, desc]) => (
                <div className="feat-box" key={title}>
                  <i className={`fas ${icon}`} />
                  <div className="fb-title">{title}</div>
                  <div className="fb-desc">{desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="s4-right">
            <div className="s4-showcase">
              <p className="showcase-label">ПРИВАТНОЕ ПРОСТРАНСТВО РЕЗИДЕНТОВ</p>
              <h3 className="showcase-title">Территория, где хочется проводить каждый день</h3>
              <div className="showcase-points">
                <div className="showcase-point">
                  <i className="fas fa-seedling" />
                  <div>
                    <strong>Зелёная среда</strong>
                    <span>40% территории занимают озеленённые участки и прогулочные аллеи</span>
                  </div>
                </div>
                <div className="showcase-point">
                  <i className="fas fa-shield-alt" />
                  <div>
                    <strong>Безопасность 24/7</strong>
                    <span>Охрана, видеонаблюдение и закрытый формат дворов</span>
                  </div>
                </div>
                <div className="showcase-point">
                  <i className="fas fa-users" />
                  <div>
                    <strong>Комфорт для всех</strong>
                    <span>Детские зоны и лаунж-пространства для жителей комплекса</span>
                  </div>
                </div>
              </div>
              <div className="showcase-stats">
                <div><b>5.2 га</b><span>территории</span></div>
                <div><b>10</b><span>жилых блоков</span></div>
                <div><b>3</b><span>уникальных двора</span></div>
              </div>
            </div>
          </div>
          <div className="pg-num">04</div>
        </div>

        {/* ═══ SLIDE 5: BLOCKS ═══ */}
        <div className={`slide s-blocks${current === 4 ? ' active' : ''}`}>
          <div className="blocks-left">
            <div className="tag">EVERNEW &bull; Структура</div>
            <h2 className="stitle">Блоки</h2>
            <div className="sdivider" />
            <div className="blocks-stats">
              <div className="block-stat">
                <div className="bs-num">24</div>
                <div className="bs-label">Этажа</div>
              </div>
              <div className="block-stat">
                <div className="bs-num">115</div>
                <div className="bs-label">Квартир в блоке</div>
              </div>
              <div className="block-stat">
                <div className="bs-num">5</div>
                <div className="bs-label">Квартир на 1 этаже</div>
              </div>
              <div className="block-stat">
                <div className="bs-num">3.3м</div>
                <div className="bs-label">Высота потолков</div>
              </div>
            </div>
            <ul className="blocks-features">
              <li><i className="fas fa-mountain" />Панорамный вид на город и горы</li>
              <li><i className="fas fa-door-open" />Стеклянный вход, место под консьержа</li>
              <li><i className="fas fa-fire-extinguisher" />Пожарные гидранты на каждом этаже</li>
              <li><i className="fas fa-bell" />Датчики пожарной системы со спец. жидкостью</li>
              <li><i className="fas fa-wind" />Вентиляция с очисткой воздуха и отоплением</li>
            </ul>
          </div>
          <div className="blocks-right">
            <div className="blocks-showcase">
              <p className="showcase-label">ФОРМАТ ПРЕМИУМ-ПРОЖИВАНИЯ</p>
              <h3 className="showcase-title">Низкая плотность и продуманная геометрия этажа</h3>
              <div className="blocks-grid-mini">
                <div className="mini-card"><i className="fas fa-building" /><span>1 подъезд в блоке</span></div>
                <div className="mini-card"><i className="fas fa-door-open" /><span>На 1 этаже 5 квартир</span></div>
                <div className="mini-card"><i className="fas fa-ruler-vertical" /><span>Потолки 3.3 м</span></div>
                <div className="mini-card"><i className="fas fa-mountain" /><span>Панорамные виды</span></div>
              </div>
              <div className="blocks-note">
                <i className="fas fa-info-circle" />
                <p>Архитектурное решение блока снижает шум, обеспечивает приватность и поддерживает ощущение клубного формата жизни.</p>
              </div>
            </div>
          </div>
          <div className="pg-num">05</div>
        </div>

        {/* ═══ SLIDE 6: TECHNOLOGIES ═══ */}
        <div className={`slide s6${current === 5 ? ' active' : ''}`}>
          <div className="s6-left">
            <div className="tag">EVERNEW &bull; Технологии</div>
            <h2 className="stitle">Материалы и<br />оснащение</h2>
            <div className="sdivider" />
            <ul className="build-list">
              <li><i className="fas fa-arrow-up" />Премиальные лифты <strong>Kone</strong></li>
              <li><i className="fas fa-window-maximize" />Оконные системы <strong>Schüco</strong></li>
              <li><i className="fas fa-gem" />Керамогранит из натурального камня</li>
              <li><i className="fas fa-car" />Умная парковка с распознаванием номеров</li>
              <li><i className="fas fa-volume-mute" />Премиальная шумоизоляция</li>
              <li><i className="fas fa-temperature-low" />Теплоизоляция нового поколения</li>
            </ul>
            <div className="build-highlight">
              <div className="bh-label">Застройщик с международным опытом</div>
              <div className="bh-text">ОсОО ЦА промышленная компания <strong>«Синхэн»</strong></div>
            </div>
          </div>
          <div className="s6-right">
            <img alt="Здание EVERNEW" className="s6-building-img" src="/build.jpg" />
          </div>
          <div className="pg-num">06</div>
        </div>

        {/* ═══ SLIDE 7: INFRASTRUCTURE OF COMPLEX ═══ */}
        <div className={`slide s5${current === 6 ? ' active' : ''}`}>
          <div className="s5-left">
            <div className="tag">EVERNEW &bull; Внутри комплекса</div>
            <h2 className="stitle">Инфраструктура<br />комплекса</h2>
            <div className="sdivider" />
            <ul className="loc-points">
              <li><i className="fas fa-check" />Собственный детский сад</li>
              <li><i className="fas fa-check" />Торговый центр на территории</li>
              <li><i className="fas fa-check" />Отель для гостей резидентов</li>
              <li><i className="fas fa-check" />Бизнес-центр</li>
              <li><i className="fas fa-check" />ТЦ на территории комплекса</li>
            </ul>
            <div className="s5-quote">
              <p>«Всё для жизни — не выходя за территорию комплекса»</p>
              <div className="q-author">EVERNEW — ГОРОД В ГОРОДЕ</div>
            </div>
          </div>
          <div className="s5-right">
            <div className="s5-cards">
              {[
                ['fa-baby-carriage', 'Детский сад', 'Собственный сад на территории — ребёнок под присмотром'],
                ['fa-shopping-bag', 'Торговый центр', 'Магазины, услуги и всё необходимое внутри ЖК'],
                ['fa-hotel', 'Отель', 'Комфортное размещение для ваших гостей'],
                ['fa-briefcase', 'Бизнес-центр', 'Работайте не выезжая из комплекса'],
                ['fa-store', 'ТЦ', 'Торговая галерея и сервисы внутри комплекса'],
                ['fa-users-cog', 'Сервис резидентов', 'Единая управляющая среда и контроль доступа на территории'],
              ].map(([icon, title, desc]) => (
                <div className="fam-card" key={title}>
                  <i className={`fas ${icon}`} />
                  <div>
                    <div className="fc-title">{title}</div>
                    <div className="fc-desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pg-num">07</div>
        </div>

        {/* ═══ SLIDE 8: ARCHITECTURE + DOCS ═══ */}
        <div className={`slide s7 s7-arch${current === 7 ? ' active' : ''}`}>
          <div className="s7-left">
            <div className="tag">EVERNEW &bull; Архитектура</div>
            <h2 className="stitle">Архитектура и<br />планировки</h2>
            <div className="sdivider" />
            <div className="arch-grid">
              {[
                ['fa-building', 'Архитектура премиум-класса'],
                ['fa-ruler-combined', 'Потолки 3,3 м'],
                ['fa-mountain', 'Панорамные окна'],
                ['fa-sun', 'Терраса'],
                ['fa-palette', 'Современный дизайн фасада'],
                ['fa-couch', '500м² общая зона на 1 этаже'],
                ['fa-door-open', 'Стеклянный вход в подъезд'],
                ['fa-user-tie', 'Место под консьержа'],
              ].map(([icon, text]) => (
                <div className="arch-item" key={text}><i className={`fas ${icon}`} />{text}</div>
              ))}
            </div>
          </div>
          <div className="pg-num">08</div>
        </div>

        {/* ═══ SLIDE 9: PLAN 1 ═══ */}
        <div className={`slide s-plan-single${current === 8 ? ' active' : ''}`}>
          <div className="plan-left">
            <span className="section-tag">ПЛАНИРОВКА 1 &bull; EVERNEW</span>
            <h2 className="stitle">3-комнатная<br />86.87 м²</h2>
            <div className="sdivider" />
            <ul className="plan-list">
              <li><strong>Спальня №1:</strong> 15.51 м²</li>
              <li><strong>Спальня №2:</strong> 14.57 м²</li>
              <li><strong>Гостиная:</strong> 28.70 м²</li>
              <li><strong>Санузел №1:</strong> 5.15 м²</li>
              <li><strong>Санузел №2:</strong> 5.24 м²</li>
              <li><strong>Балкон:</strong> 2.61 м²</li>
              <li><strong>Холл:</strong> 15.09 м²</li>
            </ul>
          </div>
          <div className="plan-right">
            <img src="/plan-1.jpeg" alt="Планировка 1" className="plan-image" />
          </div>
          <div className="pg-num">09</div>
        </div>

        {/* ═══ SLIDE 10: PLAN 2 ═══ */}
        <div className={`slide s-plan-single${current === 9 ? ' active' : ''}`}>
          <div className="plan-left">
            <span className="section-tag">ПЛАНИРОВКА 2 &bull; EVERNEW</span>
            <h2 className="stitle">3-комнатная<br />67.00 м²</h2>
            <div className="sdivider" />
            <ul className="plan-list">
              <li><strong>Спальня №1:</strong> 13.75 м²</li>
              <li><strong>Спальня №2:</strong> 10.25 м²</li>
              <li><strong>Гостиная:</strong> 21.35 м²</li>
              <li><strong>Санузел №1:</strong> 4.95 м²</li>
              <li><strong>Санузел №2:</strong> 3.69 м²</li>
              <li><strong>Балкон:</strong> 2.90 м²</li>
              <li><strong>Холл:</strong> 10.11 м²</li>
            </ul>
          </div>
          <div className="plan-right">
            <img src="/plan-2.jpeg" alt="Планировка 2" className="plan-image" />
          </div>
          <div className="pg-num">10</div>
        </div>

        {/* ═══ SLIDE 11: PLAN 3 ═══ */}
        <div className={`slide s-plan-single${current === 10 ? ' active' : ''}`}>
          <div className="plan-left">
            <span className="section-tag">ПЛАНИРОВКА 3 &bull; EVERNEW</span>
            <h2 className="stitle">3-комнатная<br />111.74 м²</h2>
            <div className="sdivider" />
            <ul className="plan-list">
              <li><strong>Спальня №1:</strong> 16.64 м²</li>
              <li><strong>Спальня №2:</strong> 17.50 м²</li>
              <li><strong>Гостиная:</strong> 36.68 м²</li>
              <li><strong>Кухня:</strong> 21.21 м²</li>
              <li><strong>Санузел №1:</strong> 5.94 м²</li>
              <li><strong>Санузел №2:</strong> 4.61 м²</li>
              <li><strong>Балкон №1:</strong> 4.01 м²</li>
              <li><strong>Балкон №2:</strong> 5.00 м²</li>
            </ul>
          </div>
          <div className="plan-right">
            <img src="/plan-3.jpeg" alt="Планировка 3" className="plan-image" />
          </div>
          <div className="pg-num">11</div>
        </div>

        {/* ═══ SLIDE 12: PLAN 4 ═══ */}
        <div className={`slide s-plan-single${current === 11 ? ' active' : ''}`}>
          <div className="plan-left">
            <span className="section-tag">ПЛАНИРОВКА 4 &bull; EVERNEW</span>
            <h2 className="stitle">3-комнатная<br />80.69 м²</h2>
            <div className="sdivider" />
            <ul className="plan-list">
              <li><strong>Спальня №1:</strong> 14.35 м²</li>
              <li><strong>Спальня №2:</strong> 13.48 м²</li>
              <li><strong>Гостиная:</strong> 27.58 м²</li>
              <li><strong>Санузел №1:</strong> 5.15 м²</li>
              <li><strong>Санузел №2:</strong> 5.24 м²</li>
              <li><strong>Балкон:</strong> 2.61 м²</li>
              <li><strong>Холл:</strong> 12.28 м²</li>
            </ul>
          </div>
          <div className="plan-right">
            <img src="/plan-4.jpeg" alt="Планировка 4" className="plan-image" />
          </div>
          <div className="pg-num">12</div>
        </div>

        {/* ═══ SLIDE 13: PLAN 5 ═══ */}
        <div className={`slide s-plan-single${current === 12 ? ' active' : ''}`}>
          <div className="plan-left">
            <span className="section-tag">ПЛАНИРОВКА 5 &bull; EVERNEW</span>
            <h2 className="stitle">2-комнатная<br />57.03 м²</h2>
            <div className="sdivider" />
            <ul className="plan-list">
              <li><strong>Спальня:</strong> 13.60 м²</li>
              <li><strong>Гостиная:</strong> 25.82 м²</li>
              <li><strong>Санузел:</strong> 4.46 м²</li>
              <li><strong>Балкон:</strong> 2.61 м²</li>
              <li><strong>Холл:</strong> 10.54 м²</li>
              <li><strong>Формат:</strong> функциональная 2-комнатная квартира</li>
            </ul>
          </div>
          <div className="plan-right">
            <img src="/plan-5.jpeg" alt="Планировка 5" className="plan-image" />
          </div>
          <div className="pg-num">13</div>
        </div>

        {/* ═══ SLIDE 14: INVESTMENT ═══ */}
        <div className={`slide s8${current === 13 ? ' active' : ''}`}>
          <div className="s8-shell">
            <div className="s8-hero">
              <span className="section-tag">ИНВЕСТИЦИИ &bull; EVERNEW</span>
              <h1 className="main-title">Выгодная инвестиция</h1>
              <p className="s8-subtitle">Объект, который одинаково силен для жизни, перепродажи и долгосрочного дохода.</p>
              <div className="s8-metrics">
                <div className="s8-metric">
                  <b>20%</b>
                  <span>доходность за 6 месяцев</span>
                </div>
                <div className="s8-metric">
                  <b>Старт</b>
                  <span>цена первой волны</span>
                </div>
                <div className="s8-metric">
                  <b>Бартер</b>
                  <span>доступен по условиям</span>
                </div>
              </div>
            </div>
            <div className="s8-panel">
              <div className="s8-benefits-list">
                {[
                  ['fa-chart-line', 'Высокая ликвидность', 'Район стабильно растет в цене, что упрощает последующую перепродажу.'],
                  ['fa-handshake', 'Условия для первых покупателей', 'Лучшая цена на старте и возможность бартера на отдельных условиях.'],
                  ['fa-coins', 'Финансовая гибкость', 'Комфортные сценарии входа для инвесторов с разными бюджетами.'],
                  ['fa-trophy', 'Надежный застройщик', 'Международный опыт, финансовая устойчивость и быстрые сроки реализации.'],
                ].map(([icon, title, desc]) => (
                  <div className="s8-benefit-row" key={title}>
                    <i className={`fas ${icon}`} />
                    <div>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="s8-offer">
                <i className="fas fa-bolt" />
                <p><strong>Сейчас лучший момент входа:</strong> стартовая стоимость и специальные условия ограничены по времени.</p>
              </div>
              <div className="s8-qr-final">
                <div className="qr-caption"><i className="fas fa-camera" />Сканируйте QR для связи</div>
                <div className="qr-frame">
                  <div className="ca ca-tl" />
                  <div className="ca ca-tr" />
                  <div className="ca ca-bl" />
                  <div className="ca ca-br" />
                  <img alt="QR Code" src="/qr.jpg" />
                </div>
              </div>
              <div className="s8-closing">
                <h3>Новое будущее вместе с нами - EverNew</h3>
                <p>Спасибо за внимание. До встречи в EVERNEW.</p>
              </div>
            </div>
          </div>
          <div className="pg-num">14</div>
        </div>

      </div>

      {/* Navigation */}
      <div className="nav">
        <button className="nav-arrow" onClick={() => go(-1)}>
          <i className="fas fa-chevron-left" />
        </button>
        {Array.from({ length: TOTAL }, (_, i) => (
          <div
            key={i}
            className={`nav-dot${current === i ? ' active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
        <button className="nav-arrow" onClick={() => go(1)}>
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </>
  )
}
