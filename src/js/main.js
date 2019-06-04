'use strict';

import './jquery-global.js';
const $ = require('../../node_modules/jquery/dist/jquery');
import 'ion-rangeslider';
import 'jquery.cookie';
import 'slick-carousel';

$(function() {
	const $filtersDropdown = $('.js-filters-dropdown');
	const $filtersAllDropdown = $('.js-filters-all-dropdown');

 $filtersDropdown.on('click', '.filters__parameters-title', function(e) {
		e.preventDefault();

		$(this).parent().toggleClass('open');
	});

 $('.filters__parameters-title').eq(0).trigger('click');
 $('.filters__parameters-title').eq(1).trigger('click');

 $filtersAllDropdown.on('click', function(e) {
 	e.preventDefault();
 	$(this).toggleClass('active');
 	$('.js-filters-wrapper').toggleClass('active');
	});
});

$(function() {
	const $contactsDropdown = $('.js-contacts-dropdown');

	$contactsDropdown.on('click', '.filters__parameters-title', function(e) {
		e.preventDefault();

		$('.js-contacts-dropdown.open').removeClass('open');

		$(this).parent().toggleClass('open');

		if($(this)[0].dataset.mapHref) {
   $('.contacts__col--map')[0].src = $(this)[0].dataset.mapHref;
  }

		if($(this).hasClass('js-with-time')) {
   $('.contacts__time-wrapper.visible').removeClass('visible');
   $(e.currentTarget.hash).addClass('visible');
		}
	});
});

$(function() {
	const $jsLayoutList = $('.js-layout-list');
	const $jsLayoutBricks = $('.js-layout-bricks');
	const $catalogContent = $('.catalog__content-wrapper');
	let catalogLayoutVal = $.cookie('catalogLayout');

	function addBricksMobile() {
		if ($(document).width() < 992) {
   $catalogContent.addClass('bricks-layout');
  }
	}

	if( catalogLayoutVal == 1 ) {
		$jsLayoutBricks.addClass('active');
		$jsLayoutBricks.siblings().removeClass('active');
		$catalogContent.not('.js-slider-recommendations').addClass('bricks-layout');
	} else {
		$jsLayoutList.addClass('active');
		$jsLayoutList.siblings().removeClass('active');
		$catalogContent.removeClass('bricks-layout');
	}
 addBricksMobile();

	$jsLayoutList.on('click', function(e) {
		e.preventDefault();
		$catalogContent.removeClass('bricks-layout');
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$.cookie('catalogLayout', 0, {path: '/'});
	});

	$jsLayoutBricks.on('click', function(e) {
		e.preventDefault();
		$catalogContent.addClass('bricks-layout');
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$.cookie('catalogLayout', 1, {path: '/'});
	});

	$(window).on('resize', function() {
  addBricksMobile();
	});
});

$(function() {
	const $headerToggler = $('.js-header-toggler');
	const $secondHeaderToggler = $('.js-second-toggler');
	const $menu = $('.js-menu');
	const $menuClose = $('.js-menu-close');
	const $navClose = $('.js-nav-close');
	const $langs = $('.js-langs');
	const $sortingDropdown = $('.js-sorting-dropdown');

	$headerToggler.on('mouseover', function() {
  if($(document).width() > 991) {
   $menu.addClass('visible');
  }
	});

	$headerToggler.on('mouseleave', function() {
  if($(document).width() > 991) {
   $menu.removeClass('visible');
  }
	});

 $headerToggler.on('click', function(e) {
 	if( $(document).width() < 992 ) {
 		e.preventDefault();
   $menu.addClass('visible');
   $('body').addClass('menu-open');
  }
	});

 $menu.on('mouseover', function() {
 	if($(document).width() > 991) {
   $(this).addClass('visible');
		}
	});

 $menu.on('mouseleave', function() {
  if($(document).width() > 991) {
   $(this).removeClass('visible');
  }
	});

 $menuClose.on('click', function(e) {
 	e.preventDefault();
 	$menu.removeClass('visible');
  $('body').removeClass('menu-open');
 });

 $secondHeaderToggler.on('click', function(e) {
  e.preventDefault();
  $('.header__nav').toggleClass('open');
  $('body').addClass('menu-open');
 });

 $navClose.on('click', function(e) {
 	e.preventDefault();
 	$('.header__nav').removeClass('open');
  $('body').removeClass('menu-open');
 });

 $langs.on('click', function(e) {
  e.preventDefault();
  $(this).parent().toggleClass('open');

  if($('.header__nav').hasClass('open')) {
   $secondHeaderToggler.trigger('click');
  }
	});

 $sortingDropdown.on('click', function(e) {
  e.preventDefault();
  $(this).parent().toggleClass('open');
	});
});

$(function() {
	const $tabsToggle = $('.js-compare-tabs-toggle');
	const $tabsContent = $('.js-compare-tabs-content');

	$tabsToggle.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$tabsContent.find('#tab-1').toggleClass('active');
		$tabsContent.find('#tab-2').toggleClass('active');
	});
});

$(function() {
 $('.js-range-slider').ionRangeSlider({
		type: 'double',
  skin: 'round',
  postfix: ' т',
  extra_classes: 'range-container'
	});

 $('.js-year-range-slider').ionRangeSlider({
		type: 'double',
  skin: 'round',
  extra_classes: 'range-container',
  from: 1960,
  to: 2018
	});

 $('.js-hours-range-slider').ionRangeSlider({
		type: 'double',
  skin: 'round',
  extra_classes: 'range-container',
  from: 0,
  to: 1000000
	});
});

$(function () {
  const $modal = $('.js-modal');
  const $closeBtn = $('.js-close');
  const $modalTrigger = $('.js-modal-trigger');
  const $modalBackground = $('.js-modal-background');

  $modalBackground.on('click', closeModal);
  $closeBtn.on('click', closeModal);
  $modalTrigger.on('click', showModal);
  // $(document).on("mouseup", handleDocumentClick);

  function closeModal () {
    $modal.fadeOut();
    $modal.removeClass('is-visible');
    $('body').removeClass('is-static');
    $modalBackground.removeClass('is-visible');
  }

  function handleDocumentClick(e) {
    if ($('document').has(e.target).length === 0) {
      $modal.removeClass('is-visible');
      $modal.fadeOut();
    }
  }

  function showModal(e) {
    e.preventDefault();
    $modal.hide();
    $('body').addClass('is-static');
    const modalToShow= $(e.currentTarget).data('index');
    if ( $(`#${modalToShow}`)) {
      $(`#${modalToShow}`).fadeIn();
      $(`#${modalToShow}`).addClass('is-visible');
      $modalBackground.addClass('is-visible');
    }


    $('.js-input').val('');
  }
});

$(function() {
 const $window = $(window);

 $window.on('scroll', function() {

  let scrolledTop = - $('main')[0].getBoundingClientRect().top;

  if(scrolledTop > 130) {
   $('body').addClass('body-scrolled');
  } else {
   $('body').removeClass('body-scrolled');
  }
 });
});

$(function() {
 const $dataLink = $('*[data-url]');

 $dataLink.on('click', function(e) {
  e.stopPropagation();
  window.location.href = e.currentTarget.dataset.url;
 });
});

$(function() {
 const $itemCompare = $('.js-item-compare');
 const $compareCount = $('.js-compare-count');
 const $compareDropdown = $('.js-compare-dropdown');

 if(!$.cookie('compareIds')) {
  $.cookie('compareIds', '[]', {path: '/'});
  $.cookie('compareType', '', {path: '/'});
  $.cookie('compareNames', '[]', {path: '/'});
 }

 createHeaderCompareList();

 function createHeaderCompareList() {
  let countOfItems = parseCookieNames().length;
  let itemsNames = parseCookieNames();
  let itemsIds = parseCookieIds();
  $compareCount.text(countOfItems);

  if(countOfItems < 1) {
   $compareDropdown.css('opacity', '0');
  } else {
   $compareDropdown.css('opacity', '');
  }

  if(countOfItems >= 1) {
   $compareDropdown[0].innerHTML = '';

   itemsNames.forEach((item, index) => {
    let itemTemplate = `<div class="header__compare-item">${item}
<a href="#" data-id="${itemsIds[index]}" data-name="${itemsNames[index]}" 
class="header__compare-close js-compare-delete"></a></div>`;
    $compareDropdown.append(itemTemplate);
   });
  }

  $itemCompare.each((index,item) => {
   item.classList.remove('active');

   if(itemsNames.length > 0) {
    itemsNames.forEach(name => {
     if (item.dataset.name === name ) {
      item.classList.add('active');
     }
    });
   }
  });
 }

 function parseCookieIds() {
  let rtn = JSON.parse($.cookie('compareIds'));
  return rtn;
 }

 function parseCookieNames() {
  let rtn = JSON.parse($.cookie('compareNames'));
  return rtn;
 }

 $('body').on('click', '.js-compare-delete', function(e) {
  e.preventDefault();
  let currentId = e.currentTarget.dataset.id;
  let currentName = e.currentTarget.dataset.name;
  let compareIds = parseCookieIds();
  let compareNames = parseCookieNames();
  let indexOfCurrentId = compareIds.indexOf(currentId);
  let indexOfCurrentName = compareNames.indexOf(currentName);

  compareIds.splice(indexOfCurrentId, 1);
  compareNames.splice(indexOfCurrentName, 1);

  $.cookie('compareIds', JSON.stringify(compareIds), {path: '/'});
  $.cookie('compareNames', JSON.stringify(compareNames), {path: '/'});

  if(!compareIds.length) {
   $.cookie('compareType', '', {path: '/'});
  }

  createHeaderCompareList();
 });

 $itemCompare.on('click', function(e) {
  e.preventDefault();
  let thisType = e.currentTarget.dataset.type;
  let thisId = e.currentTarget.dataset.id;
  let thisName = e.currentTarget.dataset.name;
  let compareIds = parseCookieIds();
  let compareNames = parseCookieNames();
  let compareType = $.cookie('compareType');

  if (!compareType.length) {
   $.cookie('compareType', thisType, {path: '/'});
  } else {
   if (thisType !== $.cookie('compareType')) {
    $('#modal-type-error').fadeIn();
    $('#modal-type-error').addClass('is-visible');
    $('.js-modal-background').addClass('is-visible');
    return false;
   }
  }

  if(compareIds.length > 2) {
   $('#modal-type-error-2').fadeIn();
   $('#modal-type-error-2').addClass('is-visible');
   $('.js-modal-background').addClass('is-visible');
   return false;
  }

  if(compareIds.indexOf(thisId) > -1) {
   return false;
  } else {
   compareIds.push(thisId);
   $(this).addClass('active');
   $.cookie('compareIds', JSON.stringify(compareIds), {path: '/'});
   addNameToCookie();
  }

  function addNameToCookie() {
   compareNames.push(thisName);
   $.cookie('compareNames', JSON.stringify(compareNames), {path: '/'});
   createHeaderCompareList();
  }
 });
});
$(function() {
 let checkSearchPage = $('main').hasClass('search');

 if(checkSearchPage) {
  const $searchInput = $('.search__input');
  let searchText = $(document)[0].location.search;

  searchText = searchText.replace('?s=', '');
  searchText =  decodeURIComponent(searchText);

  $searchInput.val(searchText);
 }
});

$(function() {
 const $validateForm = $('.js-form-validate');

 let $phone1 = document.getElementById('client-phone');
 let $phone2 = document.getElementById('phone');
 let $phone3 = document.getElementById('contact-phone');
 let maskOptions = {
  mask: '+{38}(000)000-00-00',
  lazy: false,
 };

 if($('#client-phone').length) {
  let mask1 = new IMask($phone1, maskOptions);
 }
 if($('#phone').length) {
  let mask2 = new IMask($phone2, maskOptions);
 }
 if($('#contact-phone').length) {
  let mask3 = new IMask($phone3, maskOptions);
 }

 function checkMail($input) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let inputVal = $input.val();
  let validate = re.test(inputVal);

  if(validate === false) {
   $input.css('box-shadow', '0 0 0 3px rgba(255, 0, 0, 0.5)');
   $input.parent().find('.form__label--error').css('max-height', '12px');
   return false;
  } else {
   $input.css('box-shadow', '');
   $input.parent().find('.form__label--error').css('max-height', '');
   return true;
  }
 }

 function checkPhone($phone) {
  let phoneVal = $phone.val().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  if(phoneVal.length < 12) {
   $phone.css('box-shadow', '0 0 0 3px rgba(255, 0, 0, 0.5)');
   $phone.parent().find('.form__label--error').css('max-height', '12px');
   return false;
  } else {
   $phone.css('box-shadow', '');
   $phone.parent().find('.form__label--error').css('max-height', '');
   return true;
  }
 }

 $validateForm.each(function() {
   $(this).on('submit', function() {
    let phoneState = checkPhone($(this).find('.js-phone-validate'));
    let mailState = checkMail($(this).find('.js-email-validate'));

    if(phoneState && mailState) {
     $(this).submit();
    } else {
     return false;
    }
   });
 });
});

$(function() {
 const $servicesWrapper = $('.js-services-wrapper');
 const $servicesButton = $('.js-service-button');
 const $footer = $('.footer');

 $(window).on('scroll', function() {
  if($servicesWrapper.length) {
   var servicesWrapperPos = $servicesWrapper[0].getBoundingClientRect().top;
  }

  let footerTopPos = $footer[0].getBoundingClientRect().top;

  if(servicesWrapperPos < 0) {
   $servicesButton.css({
    'opacity' : '1',
    'pointer-events' : 'auto'
   });
  } else {
   $servicesButton.css({
    'opacity' : '',
    'pointer-events' : ''
   });
  }

  if(footerTopPos + 50 < $(window).height()) {
   $servicesButton.css('bottom', '400px');
  } else {
   $servicesButton.css('bottom', '');
  }
 });
});


$(function() {
 const $filtersForm = $('.js-filters-form');
 const $checkboxesInput = $('.js-checkboxes-input');

 function createNewUrl(groupContainer) {
  let groups = groupContainer.find('*[data-filter-group]');
  let location = '';//$(document)[0].location.origin + $(document)[0].location.pathname;
  location += '?';

  groups.each((id, group) => {
   let filterGroup = group.dataset.filterGroup;
   let $groupElement = $(`*[data-filter-group="${filterGroup}"]`);
   let $checkedInputs = $groupElement.find('input:checked');
   location += group.dataset.filterGroup + '=';

   $checkedInputs.each((id, input) => {
    location += input.dataset.filterId + ',';
   });
  });
  $checkboxesInput.val(location);
  groupContainer.submit();
 }

 function parseUrl() {
  let urlSearch = document.location.search;
  urlSearch = urlSearch.replace('?', '');
  let urlSearchGroups = urlSearch.slice(1).split('&');

  urlSearchGroups.forEach((group) => {
   group = group.split('=');
   if(group[1]) {
    let groupIds = group[1].split(',');
    groupIds = groupIds.slice(0, -1);

    groupIds.forEach((id) => {
     $(`*[data-filter-id=${id}]`).trigger('click');
    });
   }
  });
 }

 function openActiveFiltersDropdown() {
  let $filtersActiveCheckbox = $filtersForm.find('input:checked');

  if($filtersActiveCheckbox.length) {
   $filtersActiveCheckbox.each(function() {
    $(this).parent().parent().parent().addClass('open');
   });
  }
 }

 if($filtersForm.length) {
  parseUrl();
  openActiveFiltersDropdown();
 }

 $filtersForm.on('click', '.filters__parameters-search', function(e) {
  e.preventDefault();
  createNewUrl($filtersForm);
 });
});
