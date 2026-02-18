import { useState, useEffect, useCallback } from 'react'
import './presentation.css'

const TOTAL = 9

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
        {/* SLIDE 1: TITLE */}
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

        {/* SLIDE 2: LOCATION */}
        <div className={`slide s2${current === 1 ? ' active' : ''}`}>
          <div className="s2-left">
            <div className="tag">EVERNEW &bull; Преимущества</div>
            <h2 className="stitle">Локация</h2>
            <div className="sdivider" />
            <ul className="loc-points">
              <li><i className="fas fa-check" />Один из самых комфортных районов Бишкека</li>
              <li><i className="fas fa-check" />Удобная транспортная развязка</li>
              <li><i className="fas fa-check" />Тихий район, рядом большие парки</li>
              <li><i className="fas fa-check" />Престижное расположение с перспективой роста</li>
              <li><i className="fas fa-check" />Школы, университеты, медцентры в пешей доступности</li>
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

        {/* SLIDE 3: INFRASTRUCTURE */}
        <div className={`slide s3${current === 2 ? ' active' : ''}`}>
          <div className="s3-header">
            <div className="tag">EVERNEW &bull; Инфраструктура</div>
            <h2 className="stitle">Магазины, кафе, медцентры</h2>
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
          </div>
          <div className="pg-num">03</div>
        </div>

        {/* SLIDE 4: TERRITORY */}
        <div className={`slide s4${current === 3 ? ' active' : ''}`}>
          <div className="s4-left">
            <div className="tag">EVERNEW &bull; 5,2 га на 9 блоков</div>
            <h2 className="stitle">Территория и<br />благоустройство</h2>
            <div className="sdivider" />
            <div className="feat-grid">
              {[
                ['fa-shield-alt', 'Закрытая территория', 'Видеонаблюдение и охрана'],
                ['fa-leaf', '40% озеленение', 'Зелёные зоны по всей территории'],
                ['fa-palette', '3 двора', 'Индивидуальный дизайн каждого'],
                ['fa-futbol', 'Спортивные площадки', 'Футбол и баскетбол'],
                ['fa-running', 'Беговые дорожки', 'С датчиком пульса'],
                ['fa-child', 'Детские площадки', 'Безопасная среда для детей'],
                ['fa-glass-martini-alt', 'Лаунж-зоны', 'Мини-бар для резидентов'],
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
            <img alt="План квартиры EVERNEW" className="s4-plan-img" src="/city.jpg" />
          </div>
          <div className="pg-num">04</div>
        </div>

        {/* SLIDE 5: BLOCKS */}
        <div className={`slide s-blocks${current === 4 ? ' active' : ''}`}>
          <div className="blocks-left">
            <div className="tag">EVERNEW &bull; Блоки</div>
            <h2 className="stitle">Структура<br />блока</h2>
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
                <div className="bs-label">Квартир на площадке</div>
              </div>
              <div className="block-stat">
                <div className="bs-num">1</div>
                <div className="bs-label">Подъезд в блоке</div>
              </div>
            </div>
            <ul className="blocks-features">
              <li><i className="fas fa-mountain" />Панорамный вид на город и горы</li>
              <li><i className="fas fa-wind" />Вентиляция с очисткой воздуха</li>
              <li><i className="fas fa-fire-extinguisher" />Пожарные гидранты на каждом этаже</li>
              <li><i className="fas fa-bell" />Датчики пожарной системы со спец. жидкостью</li>
            </ul>
          </div>
          <div className="blocks-right">
            <img alt="План квартиры EVERNEW" className="blocks-plan-img" src="/plan.jpg" />
          </div>
          <div className="pg-num">05</div>
        </div>

        {/* SLIDE 6: FAMILY */}
        <div className={`slide s5${current === 5 ? ' active' : ''}`}>
          <div className="s5-left">
            <div className="tag">EVERNEW &bull; Для семьи</div>
            <h2 className="stitle">Район<br />семейного типа</h2>
            <div className="sdivider" />
            <ul className="loc-points">
              <li><i className="fas fa-check" />Безопасная среда для детей</li>
              <li><i className="fas fa-check" />10+ школ в пешей доступности</li>
              <li><i className="fas fa-check" />7 медцентров и клиник рядом</li>
              <li><i className="fas fa-check" />Тихий район с большими парками</li>
              <li><i className="fas fa-check" />Подходит для жизни и инвестиций</li>
            </ul>
            <div className="s5-quote">
              <p>«Надёжный застройщик делает акцент на качество и долгосрочную ценность проекта»</p>
              <div className="q-author">ОсОО ЦА ПРОМЫШЛЕННАЯ КОМПАНИЯ «СИНХЭН»</div>
            </div>
          </div>
          <div className="s5-right">
            <div className="s5-cards">
              {[
                ['fa-baby-carriage', 'Безопасность детей', 'Закрытый двор без машин, площадки и зелёные зоны'],
                ['fa-graduation-cap', 'Школы рядом', 'Государственные и частные школы в пешей доступности'],
                ['fa-hospital', 'Медицина', '7 медцентров в радиусе нескольких минут'],
                ['fa-tree', 'Парки и природа', 'Экологичный район с парками рядом'],
                ['fa-users', 'Комьюнити', 'Комфортная соседская среда в каждом дворе'],
                ['fa-chart-line', 'Инвестиция', 'Район стабильно растёт в цене'],
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
          <div className="pg-num">06</div>
        </div>

        {/* SLIDE 7: CONSTRUCTION */}
        <div className={`slide s6${current === 6 ? ' active' : ''}`}>
          <div className="s6-left">
            <div className="tag">EVERNEW &bull; Строительство</div>
            <h2 className="stitle">Качество<br />строительства</h2>
            <div className="sdivider" />
            <ul className="build-list">
              <li><i className="fas fa-fire-extinguisher" />Пожарный гидрант на каждом этаже</li>
              <li><i className="fas fa-bell" />Датчики пожарной системы в каждой квартире</li>
              <li><i className="fas fa-wind" />Система вентиляции</li>
              <li><i className="fas fa-volume-mute" />Шумо- и теплоизоляция</li>
              <li><i className="fas fa-arrow-up" />Скоростные лифты KONA</li>
              <li><i className="fas fa-gem" />Керамогранит из натурального камня</li>
              <li><i className="fas fa-window-maximize" />Алюминиевые окна, 5-камерные стеклопакеты</li>
            </ul>
            <div className="build-highlight">
              <div className="bh-label">Застройщик</div>
              <div className="bh-text">ОсОО ЦА промышленная компания <strong>«Синхэн»</strong></div>
            </div>
          </div>
          <div className="s6-right">
            <div className="s6-stats">
              {[
                ['24', 'Этажа'],
                ['115', 'Квартир в блоке'],
                ['5', 'Камер в стеклопакетах'],
                ['1', 'Подъезд'],
              ].map(([num, label]) => (
                <div className="stat-box" key={label}>
                  <div className="sb-num">{num}</div>
                  <div className="sb-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="pg-num">07</div>
        </div>

        {/* SLIDE 8: ARCHITECTURE + QR/документы */}
        <div className={`slide s7${current === 7 ? ' active' : ''}`}>
          <div className="s7-left">
            <div className="tag">EVERNEW &bull; Архитектура</div>
            <h2 className="stitle">Архитектура и<br />планировки</h2>
            <div className="sdivider" />
            <div className="arch-grid">
              {[
                ['fa-building', 'Премиум класс'],
                ['fa-ruler-combined', 'Продуманные планировки'],
                ['fa-mountain', 'Панорамные окна с видом на горы'],
                ['fa-sun', 'Терраса'],
                ['fa-palette', 'Современный дизайн фасада'],
                ['fa-couch', '500м² общая зона на 1 этаже'],
                ['fa-door-open', '5 квартир на площадке'],
                ['fa-th-large', 'Просторные планировки'],
              ].map(([icon, text]) => (
                <div className="arch-item" key={text}><i className={`fas ${icon}`} />{text}</div>
              ))}
            </div>
          </div>
          <div className="s7-right">
            <div className="qr-block">
              <div className="qr-frame">
                <div className="ca ca-tl" />
                <div className="ca ca-tr" />
                <div className="ca ca-bl" />
                <div className="ca ca-br" />
                <img alt="QR Code" src="/qr.jpg" />
              </div>
              <div className="qr-caption"><i className="fas fa-camera" />Сканируйте для просмотра</div>
              <ul className="doc-list">
                {['Полный пакет документов', 'Зелёная книга', 'АПУ', 'ИТУ', 'Заключение госэкспертизы', 'Гарантия строительства'].map((t) => (
                  <li key={t}><i className="fas fa-check-circle" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pg-num">08</div>
        </div>

        {/* SLIDE 9: INVESTMENT + CONTACTS */}
        <div className={`slide s8${current === 8 ? ' active' : ''}`}>
          <div className="s8-header">
            <span className="section-tag">ИНВЕСТИЦИИ &bull; EVERNEW</span>
            <h1 className="main-title">Выгодная инвестиция</h1>
            <div className="s8-divider" />
          </div>
          <div className="s8-grid-wrapper">
            <div className="s8-benefits">
              {[
                ['fa-gem', 'Премиум-класс', 'Эксклюзивная недвижимость для истинных ценителей качества и статуса.'],
                ['fa-chart-line', 'Рост стоимости', 'Район стабильно растёт в цене, обеспечивая высокую доходность вложений.'],
                ['fa-trophy', 'Надёжный застройщик', 'Компания «Синхэн» делает акцент на качество и долгосрочную ценность.'],
                ['fa-bullseye', 'Универсальность', 'Идеально подходит как для комфортной жизни, так и для пассивного дохода.'],
              ].map(([icon, title, desc]) => (
                <div className="s8-card" key={title}>
                  <div className="s8-icon"><i className={`fas ${icon}`} /></div>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="s8-contact-footer">
              <div className="s8-cta">
                <h4>Свяжитесь с нами</h4>
                <p>для персонального показа</p>
              </div>
              <div className="s8-person">
                <div className="s8-person-icon"><i className="fas fa-phone-alt" /></div>
                <div>
                  <h2>Манапова Минaвар</h2>
                  <p>Ваш персональный менеджер</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pg-num">09</div>
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
