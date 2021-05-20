# MagicHorizontalScroll
Библиотека позволяет делать сайт с горизонтальной прокруткой 

Опции вызова библиотеки
- wrapper: Обёртка
- scroller: Скролящийся элемент
- section: Одна секция
- scrollSpeed: Скорость прокрутки, изначальное значение 40 

### Пример 
```sh
<link href="../magic-horizontal-scroll.css" rel="stylesheet">

<section id="main-wrapper">
    <section class="main-wrapper-scroll">
        <section class="section" style="background-color: #f1f1f1;">
            <h2>Section 1</h2>
        </section>
        <section class="section" style="background-color: #ececec;">
            <h2>Section 2</h2>
        </section>
        <section class="section" style="background-color: #cecece;">
            <h2>Section 3</h2>
        </section>
    </section>
</section>

<script src="../magic-horizontal-scroll.js"></script>
<script>
    MagicHorizontalScroll({
        wrapper: '#main-wrapper', 
        scroller: '#main-wrapper .main-wrapper-scroll',
        section: '.section',
        scrollSpeed: 40,
    });
</script>
```
