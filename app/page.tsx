export default function HomePage() {
  return (
    <main>
      <header>
        <p>StarLight Manga</p>
      </header>

      <section>
        <p>Манга • Манхва • Түүхүүд</p>

        <h1>
          Манга бол зүгээр нэг түүх биш, энэ бол өөр ертөнц рүү хүрэх оддын хаалга.
        </h1>

        <p>
          StarLight нь монгол хэл дээрх манга, манхва болон сонирхолтой түүхүүдийг
          унших орон зай юм.
        </p>

        <a href="#manga">Манга үзэх</a>
      </section>

      <section id="manga">
        <h2>Шинэ нэмэгдсэн</h2>

        <article>
          <p>Horror • Psychology</p>
          <h3>The Red Book</h3>

          <p>
            Хүн бүрийн нууцыг мэддэг улаан ном. Гэхдээ түүнийг нээсэн хүн бүр
            өөрийнхөө харанхуйтай нүүр тулдаг.
          </p>

          <p>Үнэлгээ: 9.8 · Үзэлт: 12.4K</p>

          <a href="/manga/the-red-book">Дэлгэрэнгүй үзэх</a>
        </article>
      </section>

      <section>
        <p>“Одод биднийг удирддаггүй. Бид өөрсдөө тэдний гэрэл.”</p>
      </section>

      <footer>
        © 2024 StarLight Manga Team. Бүх эрх хуулиар хамгаалагдсан.
      </footer>
    </main>
  );
}
