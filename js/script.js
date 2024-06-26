document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopContainer = document.getElementById("scrollToTopContainer");

  if (scrollToTopContainer) {
    let isButtonVisible = false;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 80 && !isButtonVisible) {
        scrollToTopContainer.classList.add("visible");
        scrollToTopContainer.classList.remove("hidden");
        isButtonVisible = true;
      } else if (scrollPosition <= 80 && isButtonVisible) {
        scrollToTopContainer.classList.remove("visible");
        scrollToTopContainer.classList.add("hidden");
        isButtonVisible = false;
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    scrollToTopContainer.addEventListener("click", scrollToTop);
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      scrollToTopContainer.removeEventListener("click", scrollToTop);
      window.removeEventListener("scroll", handleScroll);
    };
  } else {
    console.error("Error: ScrollToTopContainer element not found.");
  }
});

const translations = {
  ro: {
    Nav1: "Despre Noi",
    Nav2: "Echipa",
    Nav3: "Produse",
    Nav4: "Contacte",
    CarouselTitle: "Transformăm conceptele în realitate online",
    CarouselText1:
      "Oportunitatea de a beneficia de expertiza noastră și de a dezvolta împreună soluții de succes este baza",
    CarouselText2: "colaborării noastre",
    EchipaTitle1: "Echipa",
    EchipaTitle2: "Noastră",
    EchipaText:
      "Echipa noastră are ca obiectiv să aducă inovație și să sporească eficiența colaborării în colectiv, oferind suport clienților noștri pentru a se dezvolta în mediul digital și a atinge rezultate pe care nu le-au atins până acum. Suntem o companie în plină expansiune, orientată către progres continuu.",
    NumeDan: "Loghin Dan",
    Job: "Developer",
    NumeEdu: "Ivanov Eduard",
    EmailTitle1: "Rămâi la curent cu tendințele",
    EmailTitle2: "în design web și oferte exclusive",
    EmailSend: "Trimite",
    EmailComplete: "Completează din nou",
    EmailAnounce: "Anunță-ne",
    EmailThanks: "Mulțumesc!",
    EmailCompleteEmail: "Completați adresa de email!",
    FooterRealized: "Realizat de",
    FooterRights: "Toate drepturile rezervate",
    FooterContact: "Simțiți-vă liber să ne contactați oricând",
    LandingTitle1: "Creăm",
    landingTitle2: "Profesional",
    LandingTitleCircle: "WebSite-ul",
    LandingTitle3: "Dvs",
    LandingTitle3Mobile: "Dvs",
    LandingContacts: "Contactează-ne la +373 685 487 89",
    HowTitle1: "Modul",
    HowTitle2: "nostru",
    HowTitle3: "de lucru",
    HowText:
      "În cadrul metodei noastre de lucru, punem accent pe lucru în echipă și comunicarea eficientă, astfel încât să atingem cu succes obiectivele stabilite.",
    HowBoxTitle1: "Analiza produsului",
    HowBoxTitle2: "și crearea sarcinilor tehnice",
    HowBoxText:
      "Ne vom implica într-un dialog constructiv cu clientul nostru pentru a discuta în detaliu despre produsul nostru, apoi preluăm responsabilitatea de a elabora specificațiile tehnice, împărțindu-le în grupuri mici printre colegii noștri.",
    HowBoxTitlev2: "Împărțirea lucrării în etape",
    HowBoxTextv2:
      "Divizăm procesul în etape. În prima săptămână, ne concentrăm pe crearea designului web și lucrăm la acest aspect până când sunteți complet mulțumit cu produsul final.",
    HowBoxTitlev3: "Dezvoltarea produsului",
    HowBoxTextv3:
      "Dezvoltarea produsului, inclusiv toate aspectele legate de design, producție, actualizări, și serviciile oferite pentru a asigura buna funcționare a acestuia.",
    ReviewApiSudexTitle: "Review - APISUDEX",
    ReviewADTitle: "Review - A&D",
    ReviewSandutaArtTitle: "Review - SĂNDUȚA ART",
    ReviewApiSudexText:
      "Colaborarea cu Two Tek pentru dezvoltarea website-ului nostru a fost cu adevărat excepțională. De la calitatea lor remarcabilă și atenția minuțioasă acordată fiecărui detaliu, până la crearea unui website unic și memorabil. Îi recomandăm cu încredere celor care caută parteneri de încredere în acest domeniu.",
    ReviewADText:
      "Suntem extrem de mulțumiți de experiența noastră de colaborare cu Two Tek pentru dezvoltarea site-ului nostru. Aceștia au livrat un produs de excepție, cu performanță remarcabilă, timp de încărcare rapid și comunicare eficientă, ceea ce îi recomandă cu încredere ca partener de încredere în dezvoltarea web.",
    ReviewSAText:
      "Echipa Two Tek a furnizat o colaborare de excepție pentru dezvoltarea site-ului Sanduta Art. Site-ul funcționează perfect, iar calitatea, viteza și transparența serviciului lor ne-au uimit. Recomandăm cu încredere serviciile Two Tek pentru oricine caută o echipă profesionistă de dezvoltare web.",
    language: "Ro",
    language2: "Ru",
    language3: "En",
    calendly: "Stabiliți o întâlnire",
    calendlyMobile: "Programați-vă",
    BlobsTitle1: "Ce vă oferim",
    BlobsTitle2: "ca parteneri",
    BlobsText1: "Suntem parteneri de încredere,",
    BlobsText2: "pregătiți să vă sprijinim cu soluții inovatoare",
    BlobsText3: "și servicii de înaltă calitate",
    CirclesTitle1: "Dominați cu noi",
    CirclesTitle2: "Operăm cu rapiditate",
    CirclesTitle3: "Experiență 2+ Ani",
    CirclesTitle4: "Plata în Rate",
    CirclesTitle5: "Întotdeauna Conectați",
    CirclesText1:
      "Dezvoltăm website-uri captivante pentru a vă diferenția de concurență și a atrage atenția publicului dvs.",
    CirclesText2:
      "Suntem alegerea perfectă pentru a vă construi cu viteză și eficiență web-siteul dvs.",
    CirclesText3:
      "Peste 2 ani experiență în dezvoltarea și design-ul web, creăm site-uri personalizate și funcționale.",
    CirclesText4:
      "2Tek vă oferă servicii de top cu opțiuni de plată în rate pentru o experiență financiară excelentă.",
    CirclesText5:
      "2Tek oferă conectivitate și performanță rapidă, cu un accent pe răspuns eficient.",
    gif: "/images/gif.gif",
    SliderButton: "Vezi Website-ul",
    WebsiteApisudex: "APISUDEX",
    WebsiteAD: "A&D",
    WebsiteSA: "SĂNDUȚA ART",
    WebsiteBuffy: "BUFFY",
    SliderTitle1: "Accesează",
    SliderTitle2: "Proiectele Noastre:",
    FormularP: "Contactează-ne",
    FormularNume: "Nume",
    FormularEmail: "Email",
    FormularButon: "Trimite",
    FormularError: "Te rugăm să completezi corect toate câmpurile!",
  },
  ru: {
    Nav1: "О Нас",
    Nav2: "Команда",
    Nav3: "Продукты",
    Nav4: "Контакты",
    CarouselTitle: "Мы воплощаем идеи в реальность онлайн",
    CarouselText1:
      "Возможность воспользоваться нашим опытом и вместе разработать успешные решения",
    CarouselText2: "— основа нашего сотрудничества.",
    EchipaTitle1: "Наша",
    EchipaTitle2: "команда",
    EchipaText:
      "Наша команда стремится внасить инновации и повышать эффективность коллективного сотрудничества, оказывая поддержку нашим клиентам большего развития в цифровой среде и достижении результатов. Мы растущая компания, ориентированная на постоянный прогресс.",
    NumeDan: "Логин Дан",
    Job: "Программист",
    NumeEdu: "Иванов Эдуард",
    EmailTitle1: "Будьте в курсе тенденций",
    EmailTitle2: "веб-дизайна и эксклюзивных предложений",
    EmailSend: "Отправить",
    EmailComplete: "Заполните снова",
    EmailAnounce: "Сообщите нам",
    EmailThanks: "Спасибо!",
    EmailCompleteEmail: "Заполните адрес электронной почты!",
    FooterRealized: "Сделано",
    FooterRights: "Все права защищены",
    FooterContact: "Свяжитесь с нами в любое время",
    LandingTitle1: "Cоздаем",
    landingTitle2: "Ваш",
    LandingTitleCircle: "Сайт",
    LandingTitle3: "Надежно",
    LandingTitle3Mobile: "Надежно",
    LandingContacts: "Свяжитесь с нами +373 685 487 89",
    HowTitle1: "Наш",
    HowTitle2: "способ",
    HowTitle3: "работы",
    HowText:
      "В нашем методе работы мы уделяем особое внимание командной работе и эффективному общению, чтобы мы могли успешно достичь поставленных целей.",
    HowBoxTitle1: "Анализ продукта",
    HowBoxTitle2: "и постановка технических заданий",
    HowBoxText:
      "Мы вступаем в конструктивный диалог с нашим заказчиком для детального обсуждения нашего продукта, затем берем на себя ответственность за разработку технического задания, разделяя его на небольшие группы среди наших коллег.",
    HowBoxTitlev2: "Разделение работы на этапы",
    HowBoxTextv2:
      "Делим процесс на этапы. В первую неделю мы концентрируемся на создании веб-дизайна и работаем над этим аспектом, пока вы не будете полностью удовлетворены конечным продуктом.",
    HowBoxTitlev3: "Разработка продукта и его поддержка",
    HowBoxTextv3:
      "Разработка продукта, включая все аспекты проектирования, производства, обновлений и услуг, предоставляемых для обеспечения его бесперебойной работы.",
    ReviewApiSudexTitle: "Обзор - APISUDEX",
    ReviewADTitle: "Обзор - A&D",
    ReviewSandutaArtTitle: "Обзор - SĂNDUȚA ART",
    ReviewApiSudexText:
      "Работа с Two Tek над разработкой нашего веб-сайта была поистине исключительной. От выдающегося качества и тщательного внимания к каждой детали до создания уникального и запоминающегося веб-сайта. Мы с уверенностью рекомендуем их тем, кто ищет надежных партнеров в этой сфере.",
    ReviewADText:
      "Мы очень довольны своим опытом работы с Two Tek при разработке нашего веб-сайта. Они предоставили исключительный продукт с выдающейся производительностью, быстрой загрузкой и эффективным общением, поэтому я настоятельно рекомендую их как надежного партнера по веб-разработке.",
    ReviewSAText:
      "Команда Two Tek оказала исключительную помощь при разработке веб-сайта Sanduta Art. Веб-сайт работает отлично, и мы были поражены качеством, скоростью и прозрачностью их обслуживания. Мы с уверенностью рекомендуем услуги Two Tek всем, кто ищет профессиональную команду веб-разработчиков.",
    language: "Рум",
    language2: "Рус",
    language3: "Анг",
    calendly: "Назначить встречу",
    calendlyMobile: "Назначьте",
    BlobsTitle1: "Что мы предлагаем",
    BlobsTitle2: "вам как партнерам",
    BlobsText1: "Возможность воспользоваться нашим опытом и совместно",
    BlobsText2: "разрабатывать успешные решения является",
    BlobsText3: "основой нашего сотрудничества.",
    CirclesTitle1: "Доминируй с нами",
    CirclesTitle2: "Мы работаем быстро",
    CirclesTitle3: "Опыт 2+ года",
    CirclesTitle4: "Оплата в рассрочку",
    CirclesTitle5: "Всегда на связи",
    CirclesText1:
      "Мы разрабатываем привлекательные веб-сайты, чтобы выделить вас среди конкурентов и привлечь внимание вашей аудитории.",
    CirclesText2:
      "Мы — идеальный выбор для быстрого и эффективного создания вашего сайта.",
    CirclesText3:
      "Более 2 лет опыта в веб-разработке и дизайне мы создаем индивидуальные и функциональные веб-сайты.",
    CirclesText4:
      "2Tek предлагает вам первоклассные услуги с возможностью рассрочки платежа для получения превосходного финансового опыта.",
    CirclesText5:
      "2Tek предлагает быстрое подключение и производительность, уделяя особое внимание эффективному реагированию.",
    gif: "/images/echipa-ru.gif",
    SliderButton: "Посетить",
    WebsiteApisudex: "APISUDEX",
    WebsiteAD: "A&D",
    WebsiteSA: "SĂNDUȚA ART",
    WebsiteBuffy: "BUFFY",
    SliderTitle1: "Посетите наши",
    SliderTitle2: "веб-страницы:",
    FormularP: "Свяжитесь с нами",
    FormularNume: "Имя",
    FormularEmail: "Электронная почта",
    FormularButon: "Отправить",
    FormularError: "Пожалуйста, заполните все поля правильно!",
  },
  en: {
    Nav1: "About Us",
    Nav2: "Team",
    Nav3: "Products",
    Nav4: "Contact Us",
    CarouselTitle: "We turn concepts into online reality",
    CarouselText1:
      "The opportunity to benefit from our expertise and develop successful solutions together is the basis of",
    CarouselText2: "our collaboration",
    EchipaTitle1: "Our",
    EchipaTitle2: "Team",
    EchipaText:
      "Our team aims to bring innovation and increase the efficiency of collective collaboration, providing support to our clients to develop in the digital environment and achieve results they have not achieved before. We are a growing company, oriented towards continuous progress.",
    NumeDan: "Loghin Dan",
    Job: "Developer",
    NumeEdu: "Ivanov Eduard",
    EmailTitle1: "Stay up to date with web design",
    EmailTitle2: "trends and exclusive offers",
    EmailSend: "Send",
    EmailComplete: "Complete again",
    EmailAnounce: "Let us know",
    EmailThanks: "Thanks!",
    EmailCompleteEmail: "Fill in your email address!",
    FooterRealized: "Made by",
    FooterRights: "All rights reserved",
    FooterContact: "Feel free to contact us anytime at",
    LandingTitle1: "We ",
    landingTitle2: "Create",
    LandingTitleCircle: "Your WebSite",
    LandingTitle3: "Effectively",
    LandingTitle3Mobile: "Effectively",
    LandingContacts: "Contact us at +373 685 487 89",
    HowTitle1: "Our",
    HowTitle2: "way",
    HowTitle3: "of working",
    HowText:
      "In our working method, we emphasize teamwork and effective communication so that we can successfully achieve the set goals.",
    HowBoxTitle1: "Product analysis",
    HowBoxTitle2: "and creation of technical tasks",
    HowBoxText:
      "We will engage in a constructive dialogue with our customer to discuss our product in detail, then we take responsibility for developing the technical specifications, dividing them into small groups among our colleagues.",
    HowBoxTitlev2: "Dividing the work into stages",
    HowBoxTextv2:
      "We divide the process into stages. In the first week, we focus on creating the web design and work on this aspect until you are completely satisfied with the final product.",
    HowBoxTitlev3: "Product development and its support",
    HowBoxTextv3:
      "Product development, including all aspects of design, production, updates, and services provided to ensure its smooth operation.",
    ReviewApiSudexTitle: "Review - APISUDEX",
    ReviewADTitle: "Review - A&D",
    ReviewSandutaArtTitle: "Review - SĂNDUȚA ART",
    ReviewApiSudexText:
      "Working with Two Tek to develop our website was truly exceptional. From their outstanding quality and meticulous attention to every detail, to creating a unique and memorable website. We recommend them with confidence to those looking for reliable partners in this field.",
    ReviewADText:
      "We are extremely satisfied with our experience working with Two Tek for our website development. They have delivered an exceptional product with outstanding performance, fast loading time and effective communication, which is why I highly recommend them as a trusted web development partner.",
    ReviewSAText:
      "The Two Tek team provided an exceptional collaboration for the development of the Sanduta Art website. The website is working perfectly and we were amazed by the quality, speed and transparency of their service. We confidently recommend the services of Two Tek to anyone looking for a professional web development team.",
    language: "Ro",
    language2: "Ru",
    language3: "En",
    calendly: "Set up a meeting",
    calendlyMobile: "Schedule",
    BlobsTitle1: "What we offer",
    BlobsTitle2: "as partners",
    BlobsText1: "The opportunity to benefit from our expertise and develop",
    BlobsText2: "successful solutions together is the",
    BlobsText3: "basis of our collaboration.",
    CirclesTitle1: "Dominate with us",
    CirclesTitle2: "Quick Operation",
    CirclesTitle3: "Experience 2+ Years",
    CirclesTitle4: "Payment Plan",
    CirclesTitle5: "Always Connected",
    CirclesText1:
      "We develop engaging websites to differentiate you from the competition and capture the attention of your audience.",
    CirclesText2:
      "We are the perfect choice to build your website quickly and efficiently.",
    CirclesText3:
      "Over 2 years of experience in web development and design, we create custom and functional websites.",
    CirclesText4:
      "2Tek offers you top-notch services with installment payment options for a great financial experience.",
    CirclesText5:
      "2Tek offers fast connectivity and performance with a focus on efficient response.",
    gif: "/images/echipa-en.gif",
    SliderButton: "View The Website",
    WebsiteApisudex: "APISUDEX",
    WebsiteAD: "A&D",
    WebsiteSA: "SĂNDUȚA ART",
    WebsiteBuffy: "BUFFY",
    SliderTitle1: "Access our ",
    SliderTitle2: "web pages:",
    FormularP: "Contact us",
    FormularNume: "Name",
    FormularEmail: "Email",
    FormularButon: "Send",
    FormularError: "Please fill in all fields correctly!",
  },
};

document.querySelectorAll(".language-option").forEach((option) => {
  option.addEventListener("click", function () {
    updateLanguage(this, ".selected-language");
    updateVerticalLanguage(this, ".selected-language-vertical");
  });
});

document.querySelectorAll(".language-option-vertical").forEach((option) => {
  option.addEventListener("click", function () {
    updateLanguage(this, ".selected-language");
    updateVerticalLanguage(this, ".selected-language-vertical");
  });
});

function updateLanguage(option, selector) {
  const selectedText = option.textContent;
  const languageNumber = option.getAttribute("data-translate");
  document.querySelector(selector).textContent = selectedText;
  document
    .querySelector(selector)
    .setAttribute("data-translate", languageNumber);
}

function updateVerticalLanguage(option, selector) {
  const selectedText = option.textContent;
  const languageNumber = option.getAttribute("data-translate");
  document.querySelector(selector).textContent = selectedText;
  document
    .querySelector(selector)
    .setAttribute("data-translate", languageNumber);
}

function updateLanguage(option, selector) {
  const selectedLanguage = option.getAttribute("data-value");
  const selectedText = option.textContent;
  const languageNumber = option.getAttribute("data-translate");
  document.querySelector(selector).textContent = selectedText;
  document
    .querySelector(selector)
    .setAttribute("data-translate", languageNumber);
  translatePage(selectedLanguage);
}

document
  .querySelectorAll(".language-btn, .language-btn-vertical")
  .forEach((btn) => {
    btn.addEventListener("click", function () {
      toggleDropdown(this);
    });
  });

function toggleDropdown(btn) {
  const dropdown = btn.nextElementSibling;
  const arrow =
    btn.querySelector(".language-arrow") ||
    btn.querySelector(".language-arrow-vertical");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    arrow.classList.remove("rotate");
  } else {
    closeAllDropdowns();
    dropdown.style.display = "block";
    arrow.classList.add("rotate");
  }
}

function closeAllDropdowns() {
  document
    .querySelectorAll(".dropdown-content, .dropdown-content-vertical")
    .forEach((dropdown) => {
      dropdown.style.display = "none";
      dropdown.previousElementSibling
        .querySelector(".language-arrow")
        ?.classList.remove("rotate");
      dropdown.previousElementSibling
        .querySelector(".language-arrow-vertical")
        ?.classList.remove("rotate");
    });
}

document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".language-btn") &&
    !event.target.closest(".language-btn-vertical")
  ) {
    closeAllDropdowns();
  }
});

function translatePage(language) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[language] && translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    document.body.classList.add("nav-scrolled");
  } else {
    document.body.classList.remove("nav-scrolled");
  }
});
