$('.icon,.wooden').hover(function() {
    const a = Math.random() * 15 - 5;
    $(this).css('transform', 'rotate(' + a + 'deg) scale(1.07)');
}, function() {
    $(this).css('transform', 'none');
});

$('.thumb').hover(function() {
  const a = Math.random() * 15 - 5;
  $(this).css('transform', 'rotate(' + a + 'deg) scale(1.2)');
}, function() {
  $(this).css('transform', 'none');
});


// $(document).ready(function() {
//     const currentYear = new Date().getFullYear();
//     $('#copyright-date').text('est. 2023 - ' + currentYear);
// });

// to ethan if you read this: while i appreciate you adding this, i want the footer to say 20XX on pur

tippy('a[title]', {
    theme: 'custom',
    animation: 'scale-extreme',
    followCursor: true,
    arrow: tippy.narrowArrow,
    zIndex: 9999999999,
    maxWidth: 300,

    content(reference) {
      const title = reference.getAttribute('title');
      reference.removeAttribute('title');
      return title;
    },
    
  }),
  tippy('span[title]', {
    theme: 'custom',
    animation: 'scale-extreme',
    followCursor: true,
    arrow: tippy.narrowArrow,
    zIndex: 9999999999,
    maxWidth: 300,

    content(reference) {
      const title = reference.getAttribute('title');
      reference.removeAttribute('title');
      return title;
    },
    
  }),
  tippy('img[title]', {
    theme: 'custom',
    animation: 'scale-extreme',
    followCursor: true,
    arrow: tippy.narrowArrow,
    zIndex: 9999999999,
    maxWidth: 300,

    content(reference) {
      const title = reference.getAttribute('title');
      reference.removeAttribute('title');
      return title;
    },
    
  });

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  function CMYKbutton() {
    var copyText = document.getElementById("CMYKbutton");
    copyText.hidden = false;
    copyText.select();
    document.execCommand("copy");
    copyText.hidden = false;
    alert("Copied!");
    }

  function greenbutton() {
    var copyText = document.getElementById("greenbutton");
    copyText.hidden = false;
    copyText.select();
    document.execCommand("copy");
    copyText.hidden = false;
    alert("Copied!");
    }