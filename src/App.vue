<template>
  <v-app>
    <Navigation :isAuth="isAuth"/>
    <v-main class="mx-5 mx-md-8 mx-lg-16 mb-3 px-sm-10 px-md-5 px-lg-16">
      <router-view
          :isAuth="isAuth"
          :banks="banks"
          :cards="cards"
          :payments="payments"
          :accountReqs="accountReqs"
          :cardReqs="cardReqs"
          :accounts="accounts"
      >
      </router-view>
    </v-main>
  </v-app>
</template>

<script>

import Navigation from "@/components/Navigation";
import SearchBar from "@/components/controls/SearchBar";

export default {
  name: 'App',
  components: {SearchBar, Navigation},
  data: () => ({
    isAuth: true,
    banks: [
      {
        id: 1,
        title: 'Belarusbank',
        text: ' ОАО «АСБ Беларусбанк» — крупнейшее универсальное системообразующее финансово-кредитное учреждение Республики Беларусь.\n' +
            '\n' +
            'ОАО «АСБ Беларусбанк» в течение многих лет является неотъемлемой частью банковской системы страны, важнейшей составляющей ее стабильности. Банк объединяет в себе огромный профессиональный опыт и богатые традиции, имеет репутацию надежного партнера.\n' +
            '\n' +
            'Беларусбанк был и остается надежной опорой белорусской экономики. Как крупнейшее кредитно-финансовое учреждение республики активно участвует в реализации государственных программ, инвестиционных проектов, осуществляет кредитование важнейших отраслей промышленного и сельскохозяйственного производства, социальной сферы.\n' +
            '\n' +
            'Приоритетным направлением деятельности банка остается обслуживание населения. Практически каждая белорусская семья пользуется услугами банка. Миллионы людей доверяют ему свои сбережения. Бесспорным преимуществом остаются широкая филиальная сеть и доступность банковских услуг.\n' +
            '\n' +
            'Обладает обширной филиальной сетью и развитой инфраструктурой.\n' +
            '\n' +
            'ОАО «АСБ Беларусбанк» осуществляет свою деятельность на основании следующих лицензий:\n' +
            '\n' +
            '    Лицензия на осуществление банковской деятельности №1 от 11.01.2019г., выданная Национальным банком Республики Беларусь.\n' +
            '    Лицензия Министерства финансов Республики Беларусь на право осуществления профессиональной и биржевой деятельности по ценным бумагам № 02200/5200-1246-1089 (действительна до 29.07.2022 г.).\n' +
            '\n' +
            'Член Межбанковского объединения Шанхайской организации сотрудничества, Всемирного Института Сберегательных банков (WSBI), Банковской Ассоциации стран Центральной и Восточной Европы, Международной торговой и форфейтинговой ассоциации, Финансово-банковского совета СНГ.\n' +
            '\n' +
            'Представительства банка открыты в России, Германии и Китае. Рейтинги агентств Standard & Poor\'s и Fitch Ratings находятся на уровне страновых.\n' +
            '\n' +
            'ОАО «АСБ Беларусбанк» принято на учет в государственное учреждение "Агентство по гарантированному возмещению банковских вкладов (депозитов) физических лиц" 21 января 2009 года под номером 3.\n' +
            '\n' +
            'ОАО «АСБ Беларусбанк» является головной организацией банковского холдинга.',
        contacts: '+375-17-218-57-77, ' +
            '136, ' +
            '+375-29-198-57-77, ' +
            '+375-29-888-57-77, ' +
            '+375-25-999-57-77',
        logo: "https://belarusbank.by/i/bbZnak.png",
        picture: "https://cdnn11.img.sputnik.by/img/102995/48/1029954893_0:0:3001:1688_1920x0_80_0_0_7781b09ea3bae50e2d1a5ea54710b32e.jpg",
        foundDate: '20.02.2001'
      },
      {
        id: 2,
        title: 'Belagroprombank',
        text: ' ОАО «Белагропромбанк» зарегистрировано 03.09.1991 (письмо Национального банка Республики Беларусь от 03.09.1991 №03005/184) и является уполномоченным банком Правительства Республики Беларусь, обслуживающим государственные программы.\n' +
            '\n' +
            'ОАО «Белагропромбанк» имеет широкую сеть центров банковских услуг. Более 360 пунктов обслуживания клиентов расположены на территории Республики Беларусь.\n' +
            '\n' +
            'ОАО «Белагропромбанк» является первым банком, который внедрил систему менеджмента качества, соответствующей требованиям СТБ ISO 9001. ОАО «Белагропромбанк» осуществляет банковскую деятельность согласно Лицензии на осуществление банковской деятельности № 2 от 22 июля 2009 года.\n' +
            '\n' +
            'ОАО «Белагропромбанк» - это головная организация банковского холдинга, в который входят ОАО «Туровщина», ОАО «Агролизинг», ЧУП «Озерицкий – Агро», частное предприятие «Агробизнесконсалт», ОАО «Туровcкий молочный комбинат», ООО «Туров Фрост Ворк».\n' +
            '\n' +
            'Собственный капитал и уставный фонд составляют 37,8% и 44,1% в сумме от всей банковской системы страны.',
        contacts: '+375-17-218-57-77, ' +
            '136, ' +
            '+375-29-198-57-77, ' +
            '+375-29-888-57-77, ' +
            '+375-25-999-57-77',
        logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAPEBEVFRATEBMTERIOFRYQFhIYFxYRFRUYHSggGxolGxUVITEhJiorMC4wGB8zODUtNygtLisBCgoKDg0OFxAQFy4lHyUrLSstKysvLSs3LSstLSstLS0tLS0rKy0tKy0tLS0tLS0tLS0rLSstKy0tKzctKystN//AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgYDB//EADoQAAICAQMCBAQDBgMJAAAAAAABAgMRBAUSITEGE0FRImFxgRQykSMzNEJSghahsQcVJGJyc3TB8P/EABoBAQEBAAMBAAAAAAAAAAAAAAABBQMEBgL/xAApEQEAAgIBAwIGAgMAAAAAAAAAAQIDEQQFEiETMSJBUWFxgSMyFDOh/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGACMNjX0VEs3OmMuErEpezOpbmYIt2Tby5a8fJru0lRmmsp5R2q2i3s4rRNWw2MlAAAAAAAAAAAAAAAAAAAAAAAAAAYYGs5YR8ZJ1WZI99OZ/xO1Np1rCbXfD6HnrdY9PJMTWWrHTotSJi3lEupp1M3KuzhOXVwn2bx6M6mXHg5lu+ltW+7npbLx66vXcfV0Gy6SdVXGcsvLffOF7I9DwMNsWPVp2yuVkrktuIWZ3fu4JZKAAAAAAAAAAAAAAAAAAAAAAAAAAxIa2kzpQ+INffVKCrXwtZbxy6+xidS5mXF4pDR4WHHk/up1ucJvF1EJ+8orjIxY5uO/+6n7d/wDxb184rE9vrsTlpp5frXJ4kvoz6tw6ZI7+Pf8ASRyL0nWaP26TY67Y1JWt564z1fH0TPSdPreuKIv7srlWra0zVZHfdYySZDJRkAAAAAAAAAAAAAAAAAAAAAAAA1mS0xEDltx362FtkIqGIvCys+h5jm9VvTJNK1ify1sHBrfHF9yjf7ypt6X0xX/NDuvm0daOdgyzrLTX4c/+PkrG8dv1Lz1W2uCVtM3OHpJfmj9cHHl4V8X8mCfD6x8mt/gyxqXQ7BrZ21ZmuqeOWMcl7npOm5r5MXxsnl460t8Lbcd5rp6N8pf0r/2Tl9SxYI1vyuHiZMkb+Skt8TXN/DGEfr8TMTJ1zJPmsNCOnY/nPlebDuEr63KSSabXQ3Om8u3Ix91vdn8vBGK+oWhouqAAAAAAAAAAAAAAAAAAAAAAANZDY4reYeXq5Sa6ZjP7eqPHcz+Hm7tHiW9xrTbjeF7rNnpujyilCTSalHp+ps5el4M9N0jUyzcfLyYbbnzDn6bbdHa4y7fzR7qUfdGFjvl4WSaX/q1bVpysfdHuud43ZV1RVLSc1lNJdI47/U1+b1GlMH8PvLP4/EtkvPf8lds+yu79pY2oP9ZfNv2OjwOm2zx35Xa5XNjF8FEnxHXXVXCuEYxbeenfC9Wzm6tjw4MUUrHlw8C2TJebSsPC9PGhPtybl9jQ6RSa4Y8Otzcnfklcms6YAAAAAAAAAAAAAAAAAAAAAAA1kEmdKTxLt7sirIrMo5yvePsYvVuH6te+Pk0ODn7J7Z9pQtg3hRSqsfT+ST9v6WdLpnU5pX08jn5nE7viol+JtMp1eZ6xaafyfc7nV8FcmH1KuDp+W1cnZLnNDR5tkK/RvH9vqjzPDx2y5q1lr57+lSZh2mr1VdEMvCSXwxXd+yR7bNyMfHp+Hn8eK+W7k/j1l/8A9iMDyvdfqHIj6NndeNi183a6epQioroksL6HscVIx1ikMG1u6Zl6nIgAAAAAAAAAAAAAAAAZAAAGQAADDAw0SY8alJ8+XP7vsCm3OrCk+8X2Zhc7pPqfHj8NPjc6aeLKO2Oori65K1R6rGHJfZmJkry6R6cxOmjW2C89+428KJThJSgpqXXGItnXw05FLbrWXLecd41Mwn6fatRfLlPlH3lPv9kd/DwOTyr7ybiPu6t+Tiwxqv8Ax1G3aCFMcRXX1fqz0/F4tOPTVYY+bkWyz5TUduHDrTOQAABkAAAAAAAAAAwwOd8V6+yD09Nfmp2ynzlTDzLFCEcvivf5lRF2e2K1FcZ3bhCb5cIamLhGzplpZWG13x3AsrfEdSlJQr1Fyg+M51UynBSXdcvVr5ZIbTadzpnR+IjNOri5OXsl3TT7NewGu0brXqqldXy45axKLjJNd00FU1vjnSxck69WsNpv8PZjp88BNvfVeMdHXVTdznOFzkq+EJSbce6a9Gsg210vjPTTcvh1EFGMpylOmcIqMe/VoqdyPDx9omlJrURg8ftHRZww/XljsDa03XxHpdNXC2yzMbP3SgnZKf8A0pdyLtC0fjTSWWRql51Mp9IedVOpSfsm1gaErUeIIKyyuFGpudb4zddUpxUsZxn7kmlZ9yLNF4ioVdk5Qug4ShCVcq2p8p/lSj8z59GkeyzeW9PiGvnCFlWo0/N8YStqlXFy9I8u2X6H1rSblvq9+rhZKqFd1844c1TW7FH5SfZP5FViHiKl13Tkra3TFztrnCULFH0ai+6+aAm7Zr69TVC6p5hNZWej+aa9GBS7t4rrhXrfJzK3TRTeViPJvC6/JsJMuS0e8qcIyu3m6qyazJKhxhFv+Xk44+4Tudpq98r0dVHmyu1HOOFZXW7eWF+Z8e2Qu2u1+LtLqLfJi7a7HFyjGyuVTkl3457g2n7LvFWrhKynlxjOVb5JxfKPcG1fLxdpVXZZmfGF608vgefNeOy9V1Lo2mbpv1GnlVXNylZa8V1wi5Sa/qaXZfMLtaxZBkAAAAc/vU1HW7fKTSjm+OX0XOUOi+vcI08VtN6KMWvM/EwlBfzcYxlza/tb/UsJKv8AC1Oremj5WooglKxOLq5SjPm8qT5d8gNTt0q4VaFTU56m6dtziuKVKfOzC9E2ox+7Am+Z+E1l0Ev2d9TtqXp59UcTgvm4cX/aBRbNuGt1mnd8tfRTyc15XlxykvR5eSp5UGydtp65/wCL1f37dUJNPo/jL+A1f/amfKzCl0ms08dlirLKv4fDi5Rzy49se5Uc5s2KrdklqPgr8m1Rc+kVNzfFdezxgovf9pepqnRRCM4Tud9PlqLUpfm6tY7EVdeG/wB9uHv58c/Xyo5JMRJCm3n99qv/ACtv/wBIiKwq48bSi9JKPecrKFUl1bs82LWEVNyz4Ykk9XCTXmLUWufvh4cW/lgCr8WSi7dRxazHQ3q1r0zJcFL/ADwhAzTuC0Kvh2jKqF+nj6OyajGVa/vcXhf1FFNvG3umjXVJNz/B0Sswurm7XKUv9QLmWr0ktnzOdLX4fD6wzz49FjvnIFJte6aqFW16Ou2On8ymU5WWRT6JvEVnt6Ab62Fsdz2/zdVXqm1dhwjGPFY7PjkDPgjS66dNz02oqqr8+7MZ1Ox8uXV5yE0pkpLRalSacluVfKSXRyxHLS9OoNOo2Bqjcb463+Jt/hbn0hKnHSuGeia9iSsO7iR9MgAAACNr9DVfB12wVkH6P3917BETQ7Hp6Z+ZXB88NKUpSsaXsnJ9ANNR4d0tk3OVXxSeZOMpQy/dpPuNmnvpNqpqlGcINSjB1xbbk1BvLXV+6QHtqtFXa4OceThLlB+0sNZ/RsGlXZ4Q2+Tcnpasttvpjq33JsSa9g0sVSo0QiqXKVOFjjKXdr6jYz4j0k79JqKq8Oc4SjHLws+nUsLKn2PwXpIU0+fpapXxjHzJfmzP1efUS+Yhfa7bKb4eXbVCyCxiLisL6exNrpE2/wAMaKianVp4Rmu0sZa+mS7NLDT6SFcrJQjh2S5zfvLGM/5AVPiPZVdXJVwTlZbRK3rxzCEll598DZpK0uwaauasjX8azxcnKbX05PoNmm2v2TT3y5zr+PGOUW4Sx7NpjYU7Hp4VzqjUlCaxZ6uX1k+rGzT11O10WulzqjJ0vlTlZ4vGMr7E2N3oa3OVjgnOUVXN4zmCeeL/AFGxVf4O2/ly/C15znt0z74GzSduOyabURhG6iFih+TMey9kXY8NF4Y0VE1ZVp64TWcSS6rPcbNJm37bVp4uFNahFycml6yfdk2Iz8PaRxlB0R4ysV01jvav538xs0kbhtVOojGN1cZqLUoZX5ZLs0y7NJkI4WP0+gVsAAAAAAAQAAAoAAMYAyAAEGMDQyAAFAAAAACAUABNAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z",
        picture: "https://ctv.by/sites/default/files/field2/vlcsnap-2019-04-05-11h25m46s695.jpg",
        foundDate: '10.12.2005'
      },
      {
        id: 3,
        title: 'BSB',
        text: ' ЗАО «БСБ Банк» осуществляет свою деятельность на белорусском рынке банковских услуг с 7 октября 2002 года. \n' +
            '\n' +
            'Уставный фонд:\n' +
            '\n' +
            '    Акционерное общество «Swiss Investment Century»\n' +
            '    Акционерное общество «Profinvest Professional and Financial Investment»\n' +
            '    Закрытое акционерное общество «Белорусско-Швейцарский Банк «БСБ Банк».\n' +
            '\n' +
            'На сегодняшний день инфраструктура БСБ Банка включает Головной офис, 9 отделений в г. Минске, 27 пунктов обмена валют, а также 48 собственных банкоматов. \n' +
            '\n' +
            'Услуги для бизнес-клиентов:\n' +
            '\n' +
            '    Открытие и ведение счетов в рублях и валюте\n' +
            '    Дистанционное открытие счетов\n' +
            '    Расчетно-кассовое обслуживание\n' +
            '    Интернет-Банк\n' +
            '    BSB WebAPI\n' +
            '    Сервис 24/7\n' +
            '    BSB Payoneer\n' +
            '    Валютный маклер\n' +
            '    Факторинг\n' +
            '    Ценные бумаги\n' +
            '    Депозиты в рублях и валюте\n' +
            '    Кредитование\n' +
            '    Корпоративные карточки VISA, Mastercard\n' +
            '    Эквайринг.\n' +
            '\n' +
            'Услуги для частных клиентов:\n' +
            '\n' +
            '    Выпуск платежных карточек VISA, Mastercard\n' +
            '    Выпуск карточек с индивидуальным дизайном\n' +
            '    Мобильный Банк\n' +
            '    Интернет-Банк\n' +
            '    Р2Р-переводы\n' +
            '    Мой Дом\n' +
            '    MoneyApp\n' +
            '    Обмен валют\n' +
            '    Надежные платежи\n' +
            '    Доверительное управление и т.д.\n' +
            '\n' +
            'Позиционирование\n' +
            '\n' +
            'Клиентоориентированный Банк для малого и микробизнеса.\n' +
            '\n' +
            'Ценности\n' +
            '\n' +
            '    Клиентоориентированность\n' +
            '    Развитие сотрудника и Банка\n' +
            '    Командный дух\n' +
            '    Моральные ценности\n' +
            '    Здоровье\n' +
            '    Гармония человека и природы\n' +
            '    Семья. \n' +
            '\n' +
            'Стратегические цели\n' +
            '\n' +
            '    Банк высокой корпоративной культуры\n' +
            '    Первоклассный клиентский сервис\n' +
            '    Цифровая трансформация без ущерба отношениям с клиентами\n' +
            '    Надежный и устойчивый Банк\n' +
            '    Эффективный банковский бизнес.\n',
        contacts: '+375-17-218-57-77, ' +
            '136, ' +
            '+375-29-198-57-77, ' +
            '+375-29-888-57-77, ' +
            '+375-25-999-57-77',
        logo: "data:image/png;base64,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",
        picture: "data:image/jpeg;base64,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",
        foundDate: '30.09.2008'
      },
      {
        id: 4,
        title: 'Alphabank',
        text: ' ЗАО «Альфа-Банк» (Беларусь) создан на основе консолидации активов двух белорусских банков и входит в структуру Консорциума «Альфа-Групп» - одного из крупнейших частных финансово-промышленных консорциумов в России на территории СНГ. Консорциуму «Альфа-Групп» принадлежит 99,88% акций ЗАО «Альфа-Банк».\n' +
            '\n' +
            'Альфа-Банк (Беларусь) является универсальным банком и по величине активов, кредитного портфеля, средств клиентов, нормативного капитала входит в первую «десятку» крупнейших белорусских банков.\n' +
            '\n' +
            'Альфа-Банк (Беларусь) динамично развивается и в течение 5 лет успешной работы на белорусском рынке демонстрирует последовательный рост активов, капитала и клиентской базы во всех сегментах рынка.\n' +
            '\n' +
            'Альфа-Банк (Беларусь) наращивает присутствие на всех сегментах банковского рынка, ориентируясь на реальные потребности клиентов.\n' +
            '\n' +
            'Альфа-Банк (Беларусь), следуя традициям «Альфа-Групп», занимает активную социальную позицию и оказывает значительную поддержку проектам, которые стали знаковыми. С 2010 года Альфа-Банк (Беларусь) является Генеральным партнером Международного фестиваля «Владимир Спиваков приглашает!», с 2012 года Банк выступает Генеральным партнером международного джазового фестиваля.\n' +
            '\n' +
            'Также в рамках программы социальной ответственности Банк является партнером Белорусской республиканской федерации прыжков в воду, Белорусской федерации гандбола, гандбольного клуба «СКА-Минск».\n' +
            '\n' +
            'Банк направляет средства на различные мероприятия по поддержке белорусского спорта, культуры и другие социальные мероприятия.',
        contacts: '+375-17-218-57-77, ' +
            '136, ' +
            '+375-29-198-57-77, ' +
            '+375-29-888-57-77, ' +
            '+375-25-999-57-77',
        logo: "https://alfabank.servicecdn.ru/media/footer-alfa-logo_1025x1025_common_19-01-2021.svg",
        picture: "https://img.newgrodno.by/wp-content/uploads/16407852191599741243_0_320_3072_2048_1920x0_80_0_0_d1f4d2ea59b9138466dd05112d89044b.jpg",
        foundDate: '02.07.2002'
      },
      {
        id: 5,
        title: 'VTB',
        text: ' ЗАО Банк ВТБ (Беларусь) работает на рынке Республики Беларусь с 1996 года и стабильно входит в десятку крупнейших банков в стране.\n' +
            '\n' +
            'Принадлежность к международной финансовой группе позволяет решать задачи любого уровня сложности, обеспечивает возможность финансирования крупных проектов и предоставления индивидуальных тарифов корпоративным клиентам.\n' +
            '\n' +
            'Банк ВТБ предлагает широкий спектр услуг для малого бизнеса и активно работает с физическими лицами. Мы стремимся к созданию благоприятных экономических условий, расширению финансовых возможностей, разработке выгодных программ и продуктов для наших клиентов.\n' +
            '\n' +
            'Основной пакет акций банка (99,99996%) принадлежит Банк ВТБ ПАО (Россия), 1 акцией владеет СООО "ВТБ Лизинг" (Республика Беларусь).\n' +
            '\n' +
            'Банк ВТБ (Беларусь) уделяет особое внимание корпоративной социальной ответственности, оказывая благотворительную и спонсорскую помощь, а также развивая корпоративную благотворительную программу «Мир без слез». В рамках данного проекта, начиная с 2008 года, банк оказал адресную помощь 15-ти детским больницам на общую сумму более 56 тыс. бел. руб.\n' +
            '\n' +
            'Банк ВТБ (Беларусь) является членом Белорусской торгово-промышленной палаты, членом Ассоциации белорусских банков, членом ОАО «Белорусская валютно-фондовая биржа» и Белорусского союза предпринимателей, уполномоченным агентом по размещению облигаций Государственного выигрышного валютного займа Министерства Финансов Республики Беларусь. А также является головной организацией банковского холдинга ЗАО Банк ВТБ (Беларусь) наряду с ООО "СНБ-Агро", ООО «СНБ-строй».',
        contacts: '+375-17-218-57-77, ' +
            '136, ' +
            '+375-29-198-57-77, ' +
            '+375-29-888-57-77, ' +
            '+375-25-999-57-77',
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/VTB_logo_2018.png",
        picture: "https://novostivolgograda.ru/attachments/0195617d6cfd3c911a3df24cf839529430aa8e5a/store/crop/0/-1/1920/1080/1920/1080/0/e2523399845db4f8fe12fb398e922310898a1bd5c8f5b283f23c1381bf0d/%D0%B2%D1%82%D0%B1-vtb-kredit-%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82-%D0%BC%D0%BE%D1%88%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8-moshenniki-%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C.jpg",
        foundDate: '27.01.1995'
      }
    ],
    accounts: [
      {
        id: 1, openDate: 'April 11, 2023 06:14:00', balance: '223.54 BYN',
        bankLogo: 'https://belarusbank.by/i/bbZnak.png',
        number: '3413 4124 8148 1894 9812',
        title: 'Student Card', currency: 'BYN'
      },
      {
        id: 2, openDate: 'June 11, 2022 12:14:00', balance: '2.54 BYN',
        bankLogo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/VTB_logo_2018.png',
        number: '3413 4124 8148 1894 9812',
        title: 'Gold Card', currency: 'BYN'
      },
      {
        id: 3, openDate: 'March 03, 2023 13:54:00', balance: '360.54 BYN',
        bankLogo: 'https://alfabank.servicecdn.ru/media/footer-alfa-logo_1025x1025_common_19-01-2021.svg',
        number: '3413 4124 8148 1894 9812',
        title: 'Student Card', currency: 'BYN'
      },
      {
        id: 4, openDate: 'September 09, 2023 15:49:00', balance: '23.54 BYN',
        bankLogo: 'https://belarusbank.by/i/bbZnak.png',
        number: '3413 4124 8148 1894 9812',
        title: 'Salary Card', currency: 'BYN'
      },
      {
        id: 5, openDate: 'April 11, 2023 06:14:00', balance: '103.54 BYN',
        bankLogo: 'https://alfabank.servicecdn.ru/media/footer-alfa-logo_1025x1025_common_19-01-2021.svg',
        number:  '3413 4124 8148 1894 9812',
        title: 'Salary Card', currency: 'BYN'
      }
    ],
    cards: [
      {
        id: 1,
        paymentsSystem: 'VISA',
        paymentsSystemLogo: 'https://lavca.org/app/uploads/2019/07/VISA-logo-square.png',
        bank: 'BELARUSBANK',
        bankLogo: 'https://belarusbank.by/i/bbZnak.png',
        cardNumber: '4255 1901 0817 3177',
        validThrow: '06/22',
        owner: 'DMIRTY SIDORENKO',
        balance: '225.63 BYN'
      },
      {
        id: 2,
        paymentsSystem: 'Maestro',
        paymentsSystemLogo: 'https://logoeps.com/wp-content/uploads/2012/10/maestro-card-vector-logo.png',
        bank: 'ALPHABANK',
        bankLogo: 'https://alfabank.servicecdn.ru/media/footer-alfa-logo_1025x1025_common_19-01-2021.svg',
        cardNumber: '5055 1904 9817 8107',
        validThrow: '07/23',
        owner: 'DMIRTY SIDORENKO',
        balance: '5.93 BYN'
      },
      {
        id: 3,
        paymentsSystem: 'VISA',
        paymentsSystemLogo: 'https://lavca.org/app/uploads/2019/07/VISA-logo-square.png',
        bank: 'BSB',
        bankLogo: "data:image/png;base64,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",
        cardNumber: '7225 4903 4867 1197',
        validThrow: '01/27',
        owner: 'DMIRTY SIDORENKO',
        balance: '25.02 BYN'
      }
    ],
    payments: [
      {
        id: 1, title: 'Sergey', date: 'April 12, 2023 03:24:00',
        value: '14.2 BYN',
        cardNumber: '4255 1901 0817 3177',
        receiver: '2131 1231 2131 9929',
        bankLogo: 'https://belarusbank.by/i/bbZnak.png'
      },
      {
        id: 2,
        title: 'Balance',
        date: 'April 11, 2023 06:14:00',
        value: '34.2 BYN',
        cardNumber: '4255 1901 0817 3177',
        receiver: '2131 1231 2131 9929',
        bankLogo: 'https://alfabank.servicecdn.ru/media/footer-alfa-logo_1025x1025_common_19-01-2021.svg'
      },
      {
        id: 3,
        title: 'MTS',
        date: 'April 11, 2023 16:45:00',
        value: '42.2 BYN',
        cardNumber: '7225 4903 4867 1197',
        receiver: '2131 1231 2131 9929',
        bankLogo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/VTB_logo_2018.png'
      },
      {
        id: 4,
        title: 'Credit',
        date: 'April 10, 2023 17:49:00',
        value: '107.2 BYN',
        cardNumber: '4255 1901 0817 3177',
        receiver: '2131 1231 2131 9929',
        bankLogo: 'https://alfabank.servicecdn.ru/media/footer-alfa-logo_1025x1025_common_19-01-2021.svg'
      },
      {
        id: 5, title: 'Balance', date: 'April 9, 2023 21:54:00',
        value: '143.2 BYN',
        cardNumber: '5055 1904 9817 8107',
        receiver: '2131 1231 2131 9929',
        bankLogo: 'https://belarusbank.by/i/bbZnak.png'
      },
      {
        id: 5, title: 'Balance', date: 'April 9, 2023 21:54:00',
        value: '143.2 BYN',
        cardNumber: '5055 1904 9817 8107',
        receiver: '2131 1231 2131 9929',
        bankLogo: 'https://belarusbank.by/i/bbZnak.png'
      },
    ],
    accountReqs: [
      {
        id: 1, userEmail: 'dimasidorenko53@gmai.com',
        purpose: 'Commercial',
        status: 'Accepted', bank: 'Belarusbank',
        date: new Date("December 17, 1995 03:24:00")
      },
      {
        id: 2, userEmail: 'dimasidorenko53@gmai.com',
        purpose: 'Individual',
        status: 'Accepted', bank: 'VTB',
        date: new Date("December 17, 1995 03:24:00")
      },
      {
        id: 3, userEmail: 'dimasidorenko53@gmai.com',
        purpose: 'Commercial',
        status: 'Accepted', bank: 'VTB',
        date: new Date("December 17, 1995 03:24:00")
      },
      {
        id: 4, userEmail: 'dimasidorenko53@gmai.com',
        purpose: 'Individual',
        status: 'Accepted', bank: 'VTB',
        date: new Date("December 17, 1995 03:24:00")
      },
      {
        id: 5, userEmail: 'dimasidorenko53@gmai.com',
        purpose: 'Individual',
        status: 'Accepted', bank: 'VTB',
        date: new Date("December 17, 1995 03:24:00")
      },
    ],
    cardReqs: [
      {
        id: 1, userEmail: 'dimasidorenko53@gmai.com',
        status: 'Rejected', bank: 'VTB', paymentSystem: 'VISA',
        date: new Date("December 17, 1995 03:24:00")
      },
      {
        id: 2, userEmail: 'dimasidorenko53@gmai.com',
        status: 'Rejected', bank: 'VTB', paymentSystem: 'MasterCard',
        date: new Date("December 17, 1995 03:24:00")
      },
      {
        id: 3, userEmail: 'dimasidorenko53@gmai.com',
        status: 'Rejected', bank: 'VTB', paymentSystem: 'VISA',
        date: new Date("December 17, 1995 03:24:00")
      },
      {
        id: 4, userEmail: 'dimasidorenko53@gmai.com',
        status: 'Rejected', bank: 'VTB', paymentSystem: 'Maestro',
        date: new Date("December 17, 1995 03:24:00")
      },
      {
        id: 5, userEmail: 'dimasidorenko53@gmai.com',
        status: 'Rejected', bank: 'VTB', paymentSystem: 'Mir',
        date: new Date("December 17, 1995 03:24:00")
      },
    ],
  })
}
</script>
