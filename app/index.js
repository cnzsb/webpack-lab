/**
 * Created by cnzsb on 2016/10/8.
 */

require('./scss/main.scss')
require('moment/locale/zh-cn')
var sub = require('./sub')
var $ = require('jquery')
var moment = require('moment')
var app = document.createElement('div')
app.innerHTML = '<h1>Hello World</h1>'
document.body.appendChild(app)
$('body').append('<p>TIME: ' + moment().format('LLLL') + '</p>')