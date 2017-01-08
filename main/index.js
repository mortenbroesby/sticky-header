class StickyHeader {

  constructor() {
    this.tabContainerHeight = 100;
    $(window).scroll(() => { this.onScroll(); });
    $(window).resize(() => { this.onResize(); });
  }

  onScroll() {
    this.setStickyHeader();
  }

  setStickyHeader() {
    let offset = $('.header').offset().top + $('.header').height() - this.tabContainerHeight;
    if ($(window).scrollTop() > offset) {
      $('.header').addClass('header--sticky');
    } else {
      $('.header').removeClass('header--sticky');
    }
  }

}

new StickyHeader();