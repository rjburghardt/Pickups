import $ from 'jquery'
import Routes from './Routes.js'
import GMaps from 'gmaps'
import cookie from 'js-cookie'

const userCookie = cookie.get('user')

if (userCookie) {
  const user = JSON.parse(userCookie.slice(2))
  let url = '/#/pickups/profile/' + user.user_id
  $('#profile').attr('href', url)
}

$('.menu').on('click', function () {
  $(this).siblings('.nav-bar').toggleClass('expand')
})

$('.primary-nav').on('click', '.nav-bar', function () {
  $(this).removeClass('expand')
})

if(window.location.href.split('?')[1] === 'fail') {
  $('#fail').show()
} else {
  $('#fail').hide()
}

$('main').on('click','#join-in', function() {
  const userId = $('.userId').val()
  const gameId = $('.gameId').val()

  $.post('/api/user_game', {userId, gameId})
    .then(() => {
      window.location = 'http://localhost:3000/#/pickups/search'
    })

    .fail((xhr, error, data) => {
      console.error(xhr)
      window.location = '/#/pickups/search'
    })
})

if(userCookie) {
  $('#userLogin').text('Logout').attr('href', '/auth/logout')
}