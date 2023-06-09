export const HTMLDocument = /*html*/`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      /* css content */
    </style>
  </head>
  <body>
    <!-- comment content -->
    <div id="div1">
      div content
    </div>
    text node
    <section>
      <article>
        <header>article header</header>
        <p>
          article content
          in a paragraph
        </p>
        <p>
          second paragraph
        </p>
      </article>
    </section>
    <main>
      <div id="div2">
        <div id="div2a"></div>
      </div>
    </main>
    <div id="attribute tester" attr1="attr1 value" attr2="attr2 value"></div>
    <div id="insert-after">
      <div id="insert-after1"></div>
      <div id="insert-after2"></div>
    </div>
    <img src="IMG_SRC" alt="IMG_ALT">
    <template>
      // template content
    </template>
    <script>
      // js content
    </script>
  </body>
  </html>
`


export const HTMLFragmentChildren = /*html*/`
  <div id="child1">child1 content</div>
  <div id="child2">child2 content</div>
`


export const HTMLFragment = /*html*/`
  <section attr1="attr1 value">
    ${HTMLFragmentChildren}
  </section>
`
