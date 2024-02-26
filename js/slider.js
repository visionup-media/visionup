

const slidesData = [
    {
        image: '/img/sliders/gizli kamera tespit işlemleri.webp',
        text: __('Gizliliğinizi Güvence Altına Alıyoruz: Gizli kamera tespit hizmetlerimizle, özel alanlarınızdaki istenmeyen gözetim araçlarını ortaya çıkarıyor, gizliliğinizi koruyoruz. Profesyonel ekipmanlar ve deneyimli uzmanlarımızla, güvenliğinizi sağlamak bizim önceliğimiz.')
    },
    {
        image: '/img/sliders/marka yönetimi hizmetleri.webp',
        text: __('Markanızı Zirveye Taşıyoruz: Stratejik marka yönetimi hizmetlerimizle, marka değerinizi artırıyor ve pazarda sürdürülebilir bir konum elde etmenizi sağlıyoruz. Vizyonunuzu gerçekleştirmek için buradayız.')
    },
    {
        image: '/img/sliders/ses dinleme tespit işlemleri.webp',
        text: __('Ses Güvenliğiniz Bizimle Emniyette: Ses dinleme cihazlarını tespit ederek, özel konuşmalarınızın güvende kalmasını sağlıyoruz. Yüksek teknoloji ekipmanlarımız ve uzman ekibimizle, gizliliğinize yönelik tehditleri ortadan kaldırıyoruz.')
    },
    {
        image: '/img/sliders/siber güvenlik hizmetleri.webp',
        text: __('Dijital Kalkanınız: Siber güvenlik hizmetlerimizle, işletmenizin ve kişisel verilerinizin çevrimiçi tehditlere karşı korunmasını sağlıyoruz. Güncel güvenlik protokolleri ve proaktif savunma stratejilerimizle, dijital dünyada güvendesiniz.')
    },
    {
        image: '/img/sliders/sosyal medya yönetimi hizmetleri.webp',
        text: __('Sosyal Medyada Parlayın: Sosyal medya yönetimi hizmetlerimizle, markanızın çevrimiçi varlığını güçlendiriyor, hedef kitlenizle etkileşimi artırıyoruz. Yaratıcı içerikler ve stratejik kampanyalarla sosyal medyada fark yaratın.')
    },
    {
        image: '/img/sliders/ürün fotoğraf ve video çekimi hizmetleri.webp',
        text: __('Ürünlerinizi Işığa Çıkarıyoruz: Profesyonel fotoğraf ve video çekimi hizmetlerimizle, ürünlerinizi etkileyici ve akılda kalıcı bir şekilde sergiliyoruz. Görsel hikayenizi en iyi şekilde anlatmak için buradayız.')
    },
    {
        image: '/img/sliders/adverse ve seo hizmetleri.webp ',
        text: __('Çevrimiçi Görünürlüğünüzü Maksimize Edin: Adverse ve SEO hizmetlerimizle, arama motorlarında üst sıralarda yer almanızı sağlıyor, çevrimiçi varlığınızı güçlendiriyoruz. Daha fazla görünürlük, daha fazla müşteri.')
    },
    {
        image: '/img/sliders/sosyal medya reklam hizmetleri.webp',
        text: __('Sosyal Medyada Güçlü Bir İz Bırakın: Sosyal medya reklam hizmetlerimizle, markanızın sosyal platformlarda görünürlüğünü artırıyor, etkileşim ve dönüşüm oranlarınızı yükseltiyoruz. Hedef kitlenize ulaşın.')
    },
    {
        image: '/img/sliders/reklam ve tanıtım hizmetleri.webp',
        text: __('Markanızı Öne Çıkarıyoruz: Yaratıcı reklam ve tanıtım hizmetlerimizle, markanızın hedef kitle üzerinde güçlü bir etki yaratmasını sağlıyoruz. Görsel ve metinsel içeriklerle dikkat çekin.')
    },
    {
        image: '/img/sliders/matbaa ve broşür basım hizmetleri.webp',
        text: __('Baskıda Kalite ve Yaratıcılık: Yüksek kaliteli matbaa baskı ve broşür basım hizmetlerimizle, markanızın mesajını etkili bir şekilde iletiyoruz. Akılda kalıcı broşürler, kartvizitler ve daha fazlası için buradayız. ',)
    },
    {
        image: '/img/sliders/fotoğraf çekim hizmetleri.webp',
        text: __('Anları Ölümsüzleştiriyoruz: Profesyonel fotoğraf çekim hizmetlerimizle, hayatınızın özel anlarını yakalıyor, her karede bir hikaye anlatıyoruz. Portrelerden etkinlik fotoğraflarına, kaliteli çekimler için doğru adres. ')
    },
    {
        image: '/img/sliders/kamera çekim hizmetleri.webp',
        text: __('Her Anı Yakalayın: Profesyonel kamera çekim hizmetlerimizle, her anı ölümsüzleştiriyoruz. Etkinlikler, toplantılar veya özel projeler için yüksek kaliteli video çekimleri sağlıyoruz. ')
    },
    {
        image: '/img/sliders/dron çekim hizmetleri.webp',
        text: __('Gökyüzünden Sanat: Dron video çekimi hizmetlerimizle, etkileyici hava çekimleri yaparak projelerinize farklı bir perspektif kazandırıyoruz. Yüksekten bakmak hiç bu kadar güzel olmamıştı. ')
    },
    {
        image: '/img/sliders/organizasyon hizmetleri.webp',
        text: __('Unutulmaz Etkinlikler Yaratıyoruz: Özel günleriniz ve kurumsal etkinlikleriniz için kusursuz organizasyon hizmetleri sunuyoruz. Her detayı düşünüyor, etkinliğinizi unutulmaz kılıyoruz. ')
    },
    {
        image: '/img/sliders/grafik tasarım hizmetleri.webp',
        text: __('Görsel Mükemmellik: Markanızın görsel kimliğini, yaratıcı grafik tasarım hizmetlerimizle şekillendiriyor, etkileyici ve akılda kalıcı tasarımlar yaratıyoruz. Logodan broşüre, her detayda mükemmellik. ')
    },
    {
        image: '/img/sliders/klip çekim hizmetleri.webp',
        text: __('Sanatınızı Ölümsüzleştiriyoruz: Yaratıcı klip çekimi hizmetlerimizle, müzik ve sanat eserlerinizi etkileyici görsellerle buluşturuyoruz. Her karede bir hikaye anlatıyor, sanatınızı öne çıkarıyoruz. ')
    }
];


window.onload = function () {
    const services = [
      'Gizli Kamera Tespit İşlemleri',
      'Ses Dinleme Tespit İşlemleri',
      'Siber Güvenlik Hizmetleri',
      'Marka Yönetim Hizmetleri',
      'Sosyal Medya Yönetim Hizmetleri',
      'Ürün Fotoğraf ve Video Çekimi Hizmetleri',
      'Klip Çekimi Hizmetleri',
      'Grafik Tasarım Hizmetleri',
      'Web Tasarım Hizmetleri',
      'Organizasyon Hizmetleri',
      'Dron Video Çekimi Hizmetleri',
      'Kamera Çekim Hizmetleri',
      'Fotoğraf Çekim Hizmetleri',
      'Matbaa ve Broşür Basım Hizmetleri',
      'Reklam ve Tanıtım Hizmetleri',
      'Sosyal Medya Reklam Hizmetleri',
      'Adverse ve SEO Hizmetleri',
    ];
    let html = '';
    services.forEach(function (service) {
      html += "<b>" + __(service) + "</b>";
    });

    var typedStrings = document.getElementById("typed-strings");
    if (typedStrings) {
      typedStrings.innerHTML = html;
    }
  }


function createSwiperContent() {
    const swiperWrapper = document.getElementById('swiper-slider');
    slidesData.forEach((slide, index) => {
        const slideHtml = `
        <div class="swiper-slide split-slide split-slide-${index + 1}">
          <div class="slider-content" style="background:url('${slide.image}');">
            <span class="slider-content-text">${slide.text}</span>
          </div>
        </div>
      `;
        swiperWrapper.innerHTML += slideHtml;
    });
}
createSwiperContent();